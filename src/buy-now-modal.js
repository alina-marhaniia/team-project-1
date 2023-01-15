(() => {
  const refs = {
    openModalBtnBuynow: document.querySelector('[buy-now-modal-open]'),
    closeModalBtnBuynow: document.querySelector('[buy-now-modal-close]'),
    modalBuynow: document.querySelector('[buy-now-modal]'),
  };

  refs.openModalBtnBuynow.addEventListener('click', toggleModal);
  refs.closeModalBtnBuynow.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modalBuynow.classList.toggle('buy-now__is-hidden');
  }
})();
