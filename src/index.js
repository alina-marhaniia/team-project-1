// opening modal "about"
(() => {
  const refs = {
    openModalBtnAbout: document.querySelector('[about-modal-open]'),
    closeModalBtnAbout: document.querySelector('[about-modal-close]'),
    modalAbout: document.querySelector('[about-modal]'),
  };

  refs.openModalBtnAbout.addEventListener('click', toggleModal);
  refs.closeModalBtnAbout.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modalAbout.classList.toggle('is-hidden');
  }
})();

// opening modal "locations"
(() => {
  const refs = {
    openModalBtnLocations: document.querySelector('[locations-modal-open]'),
    closeModalBtnLocations: document.querySelector('[locations-modal-close]'),
    modalLocations: document.querySelector('[locations-modal]'),
  };

  refs.openModalBtnLocations.addEventListener('click', toggleModal);
  refs.closeModalBtnLocations.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modalLocations.classList.toggle('is-hidden');
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
