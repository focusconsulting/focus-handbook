// === Focus Handbook — Search ===

document.addEventListener('DOMContentLoaded', () => {
  let searchIndex = null;
  let searchData = null;

  // Load search index
  const basePath = getBasePath();
  fetch(basePath + 'search-index.json')
    .then(r => r.json())
    .then(data => {
      searchData = data;
      searchIndex = lunr(function () {
        this.ref('id');
        this.field('title', { boost: 10 });
        this.field('section', { boost: 5 });
        this.field('content');
        data.forEach(doc => this.add(doc));
      });
    })
    .catch(() => console.log('Search index not loaded'));

  function getBasePath() {
    const path = window.location.pathname;
    if (path.includes('/pages/states/')) return '../../';
    if (path.includes('/pages/')) return '../';
    return '';
  }

  // Sidebar search
  const sidebarInput = document.querySelector('.sidebar-search input');
  if (sidebarInput) {
    sidebarInput.addEventListener('focus', () => {
      openSearchOverlay();
    });
  }

  // Hero search
  const heroInput = document.querySelector('.hero-search input');
  if (heroInput) {
    heroInput.addEventListener('focus', () => {
      openSearchOverlay();
    });
  }

  function openSearchOverlay() {
    let overlay = document.querySelector('.search-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'search-overlay';
      overlay.innerHTML = `
        <div class="search-modal">
          <input class="search-modal-input" type="text" placeholder="Search the handbook..." autofocus>
          <div class="search-results"></div>
        </div>
      `;
      document.body.appendChild(overlay);

      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.classList.remove('active');
      });

      const modalInput = overlay.querySelector('.search-modal-input');
      modalInput.addEventListener('input', (e) => {
        performSearch(e.target.value);
      });
    }

    overlay.classList.add('active');
    setTimeout(() => overlay.querySelector('.search-modal-input').focus(), 50);
  }

  function performSearch(query) {
    const resultsContainer = document.querySelector('.search-results');
    if (!resultsContainer || !searchIndex || !searchData) return;

    if (!query.trim()) {
      resultsContainer.innerHTML = '<div class="search-empty">Type to search across all handbook pages</div>';
      return;
    }

    try {
      const results = searchIndex.search(query + '*');
      if (results.length === 0) {
        resultsContainer.innerHTML = '<div class="search-empty">No results found for "' + escapeHtml(query) + '"</div>';
        return;
      }

      resultsContainer.innerHTML = results.slice(0, 10).map(result => {
        const doc = searchData.find(d => d.id === result.ref);
        if (!doc) return '';
        const snippet = getSnippet(doc.content, query);
        return `
          <a class="search-result" href="${basePath}${doc.url}">
            <div class="search-result-title">${escapeHtml(doc.title)}</div>
            <div class="search-result-section">${escapeHtml(doc.section)}</div>
            <div class="search-result-snippet">${snippet}</div>
          </a>
        `;
      }).join('');
    } catch (e) {
      resultsContainer.innerHTML = '<div class="search-empty">Type to search...</div>';
    }
  }

  function getSnippet(content, query) {
    const lower = content.toLowerCase();
    const queryLower = query.toLowerCase();
    const idx = lower.indexOf(queryLower);
    if (idx === -1) return escapeHtml(content.slice(0, 120)) + '...';

    const start = Math.max(0, idx - 50);
    const end = Math.min(content.length, idx + query.length + 70);
    let snippet = (start > 0 ? '...' : '') + content.slice(start, end) + (end < content.length ? '...' : '');

    // Highlight matches
    const regex = new RegExp('(' + escapeRegex(query) + ')', 'gi');
    snippet = escapeHtml(snippet).replace(regex, '<mark>$1</mark>');
    return snippet;
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
});
