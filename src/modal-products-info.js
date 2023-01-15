(() => {
  const refs = {
    openModalBtnBuynow: document.querySelector(
      '[data-products-info-modal-open]'
    ),
    closeModalBtnBuynow: document.querySelector(
      '[data-products-info-modal-close]'
    ),
    modalBuynow: document.querySelector('[data-products-info-modal]'),
  };

  refs.openModalBtnBuynow.addEventListener('click', toggleModal);
  refs.closeModalBtnBuynow.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modalBuynow.classList.toggle('is-hidden');
  }
})();
