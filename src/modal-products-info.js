(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-products-info-modal-open]'),
    closeModalBtn: document.querySelector('[data-products-info-modal-close]'),
    modal: document.querySelector('[data-products-info-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
