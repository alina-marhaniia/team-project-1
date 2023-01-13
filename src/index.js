// opening modal "about"
(() => {
  const refs = {
    openModalBtn: document.querySelector('[about-modal-open]'),
    closeModalBtn: document.querySelector('[about-modal-close]'),
    modal: document.querySelector('[about-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

// opening modal "locations"
(() => {
  const refs = {
    openModalBtn: document.querySelector('[locations-modal-open]'),
    closeModalBtn: document.querySelector('[locations-modal-close]'),
    modal: document.querySelector('[locations-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

// swiper-dots
new Swiper('.try-section-dots', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
});

// swiper-time
new Swiper('.try-section-time', {
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
});
