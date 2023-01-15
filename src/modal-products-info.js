(() => {
  const refs = {
    openModalBtnProducts: document.querySelector(
      '[data-products-info-modal-open]'
    ),
    closeModalBtnProducts: document.querySelector(
      '[data-products-info-modal-close]'
    ),
    modalProducts: document.querySelector('[data-products-info-modal]'),
  };

  refs.openModalBtnProducts.addEventListener('click', toggleModal);
  refs.closeModalBtnProducts.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modalProducts.classList.toggle('is-hidden');
  }
})();
