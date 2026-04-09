// === Focus Handbook — Navigation ===

document.addEventListener('DOMContentLoaded', () => {
  // Hamburger toggle
  const hamburger = document.querySelector('.hamburger');
  const sidebar = document.querySelector('.sidebar');

  if (hamburger && sidebar) {
    hamburger.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });

    // Close sidebar on outside click (mobile)
    document.addEventListener('click', (e) => {
      if (window.innerWidth <= 768 && sidebar.classList.contains('open') &&
          !sidebar.contains(e.target) && !hamburger.contains(e.target)) {
        sidebar.classList.remove('open');
      }
    });
  }

  // Active nav link
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && currentPath.endsWith(href.replace(/^\.\.?\//, '').replace(/^\//, ''))) {
      link.classList.add('active');
    }
  });

  // State submenu toggle
  document.querySelectorAll('.nav-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      toggle.classList.toggle('open');
      const submenu = toggle.nextElementSibling;
      if (submenu) submenu.classList.toggle('open');
    });

    // Auto-open if a child is active
    const submenu = toggle.nextElementSibling;
    if (submenu && submenu.querySelector('.nav-link.active')) {
      toggle.classList.add('open');
      submenu.classList.add('open');
    }
  });

  // Audience filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Toggle active state
      if (btn.classList.contains('active')) {
        btn.classList.remove('active');
        showAllLinks();
      } else {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterLinks(filter);
      }
    });
  });

  function filterLinks(audience) {
    document.querySelectorAll('.nav-link[data-audience]').forEach(link => {
      const linkAudience = link.dataset.audience;
      if (linkAudience === 'all' || linkAudience === audience) {
        link.style.display = '';
      } else {
        link.style.display = 'none';
      }
    });
  }

  function showAllLinks() {
    document.querySelectorAll('.nav-link[data-audience]').forEach(link => {
      link.style.display = '';
    });
  }

  // Back to top button
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 400);
    });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Keyboard shortcut: / to focus search
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      e.preventDefault();
      const searchInput = document.querySelector('.hero-search input') ||
                          document.querySelector('.sidebar-search input');
      if (searchInput) searchInput.focus();
    }
    // Escape to close search overlay
    if (e.key === 'Escape') {
      const overlay = document.querySelector('.search-overlay');
      if (overlay) overlay.classList.remove('active');
      if (sidebar) sidebar.classList.remove('open');
    }
  });
});
