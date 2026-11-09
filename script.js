/* ==========================================================================
   MERT YURTTAŞ - PORTFOLYO ETKİLEŞİMLERİ (script.js)
   1. Tema Değiştirici (Koyu Gri Stüdyo Modu / Açık Mod + localStorage)
   2. Mobil Gezinti Menüsü (ARIA erişilebilirlik destekli)
   3. Proje Kategori Filtreleme (4 Ana Kategori + Tümü) ve Canlı Arama
   4. Çalışma Tam Ekran İnceleme (Lightbox Modal - Klavye ESC destekli)
   5. İletişim Formu Doğrulama (Canlı kontrol ve Güvenli Geri Bildirim)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const themeBtn = document.getElementById('themeToggleBtn');
  const themeBtnText = document.getElementById('themeBtnText');
  const savedTheme = localStorage.getItem('mert_portfolio_theme');

  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    if (themeBtnText) themeBtnText.textContent = 'Stüdyo Koyu Mod';
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      const isLight = document.body.classList.contains('light-theme');
      localStorage.setItem('mert_portfolio_theme', isLight ? 'light' : 'dark');
      if (themeBtnText) {
        themeBtnText.textContent = isLight ? 'Stüdyo Koyu Mod' : 'Açık Mod';
      }
    });
  }

  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('mainNavLinks');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('nav-open');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('projectSearchInput');
  const projectCards = document.querySelectorAll('.project-card');
  const projectCountBadge = document.getElementById('projectCountBadge');

  let activeCategory = 'all';

  function filterProjects() {
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
    let visibleCount = 0;

    projectCards.forEach((card) => {
      const category = card.getAttribute('data-category');
      const title = (card.getAttribute('data-title') || '').toLowerCase();
      const desc = (card.textContent || '').toLowerCase();

      const matchesCategory = activeCategory === 'all' || category === activeCategory;
      const matchesSearch = !query || title.includes(query) || desc.includes(query);

      if (matchesCategory && matchesSearch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (projectCountBadge) {
      projectCountBadge.textContent = `${visibleCount} Çalışma Gösteriliyor`;
    }
  }

  if (filterBtns.length > 0) {
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        activeCategory = btn.getAttribute('data-filter') || 'all';
        filterProjects();
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', filterProjects);
  }

  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxBody = document.getElementById('lightboxBody');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxCloseBtn');
  const previewBtns = document.querySelectorAll('.preview-btn');

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('open');
    lightboxModal.setAttribute('aria-hidden', 'true');
    if (lightboxBody) lightboxBody.innerHTML = '';
  }

  if (previewBtns.length > 0 && lightboxModal) {
    previewBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const mediaType = btn.getAttribute('data-type');
        const mediaSrc = btn.getAttribute('data-src');
        const mediaTitle = btn.getAttribute('data-title') || '';

        if (lightboxBody) {
          lightboxBody.innerHTML = '';
          if (mediaType === 'video') {
            const videoEl = document.createElement('video');
            videoEl.src = mediaSrc;
            videoEl.controls = true;
            videoEl.autoplay = true;
            videoEl.playsInline = true;
            lightboxBody.appendChild(videoEl);
          } else {
            const imgEl = document.createElement('img');
            imgEl.src = mediaSrc;
            imgEl.alt = mediaTitle;
            lightboxBody.appendChild(imgEl);
          }
        }
        if (lightboxCaption) {
          lightboxCaption.textContent = mediaTitle;
        }
        lightboxModal.classList.add('open');
        lightboxModal.setAttribute('aria-hidden', 'false');
        if (lightboxClose) lightboxClose.focus();
      });
    });
  }

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxModal && lightboxModal.classList.contains('open')) {
      closeLightbox();
    }
  });

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    const nameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('emailAddr');
    const subjectSelect = document.getElementById('projectTopic');
    const messageInput = document.getElementById('messageText');
    const feedbackBox = document.getElementById('formFeedback');

    function setFieldError(inputEl, errorId, message) {
      const errSpan = document.getElementById(errorId);
      if (message) {
        inputEl.classList.add('input-error');
        inputEl.setAttribute('aria-invalid', 'true');
        if (errSpan) errSpan.textContent = message;
        return false;
      } else {
        inputEl.classList.remove('input-error');
        inputEl.setAttribute('aria-invalid', 'false');
        if (errSpan) errSpan.textContent = '';
        return true;
      }
    }

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameVal = nameInput.value.trim();
      const emailVal = emailInput.value.trim();
      const subjectVal = subjectSelect.value.trim();
      const msgVal = messageInput.value.trim();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      const v1 = setFieldError(
        nameInput,
        'nameError',
        nameVal.length < 3 ? 'Lütfen en az 3 karakterden oluşan adınızı ve soyadınızı giriniz.' : ''
      );

      const v2 = setFieldError(
        emailInput,
        'emailError',
        !emailRegex.test(emailVal) ? 'Lütfen geçerli bir e-posta adresi giriniz (örn: ad@studyo.com).' : ''
      );

      const v3 = setFieldError(
        subjectSelect,
        'topicError',
        !subjectVal ? 'Lütfen iletişime geçmek istediğiniz çalışma alanını seçiniz.' : ''
      );

      const v4 = setFieldError(
        messageInput,
        'messageError',
        msgVal.length < 15 ? 'Lütfen proje veya iş birliği detayını en az 15 karakterle açıklayınız.' : ''
      );

      if (v1 && v2 && v3 && v4) {
        feedbackBox.className = 'form-feedback success';
        feedbackBox.textContent = '';
        const strongTitle = document.createElement('strong');
        strongTitle.textContent = `Teşekkürler ${nameVal}! `;
        const bodyText = document.createTextNode(
          'Mesajınız doğrulandı ve başarıyla iletildi. En kısa sürede e-posta üzerinden dönüş yapılacaktır.'
        );
        feedbackBox.appendChild(strongTitle);
        feedbackBox.appendChild(bodyText);
        contactForm.reset();
      } else {
        feedbackBox.className = 'form-feedback error';
        feedbackBox.textContent = 'Lütfen formdaki işaretli alanları kontrol ederek tekrar deneyiniz.';
      }
    });
  }
});
