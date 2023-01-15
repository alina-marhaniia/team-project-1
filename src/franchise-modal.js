(() => {
  const refs = {
    openModalBtnFranchise: document.querySelector('[franchise-modal-open]'),
    closeModalBtnFranchise: document.querySelector('[franchise-modal-close]'),
    modalFranchise: document.querySelector('[franchise-modal]'),
  };

  refs.openModalBtnFranchise.addEventListener('click', toggleModal);
  refs.closeModalBtnFranchise.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modalFranchise.classList.toggle('franchise__is-hidden');
  }
})();
