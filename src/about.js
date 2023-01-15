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
