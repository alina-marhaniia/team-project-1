(() => {
  var refsCreame = {
    openModalBtnProductsCreame: document.querySelector(
      '[data-products-info-modal-open-creame]'
    ),
    closeModalBtnProductsCreame: document.querySelector(
      '[data-products-info-modal-close]'
    ),
    modalProductsCreame: document.querySelector('[data-products-info-modal]'),
  };
  var refsCoffe = {
    openModalBtnProductsCoffe: document.querySelector(
      '[data-products-info-modal-open-coffe]'
    ),
    closeModalBtnProductsCoffe: document.querySelector(
      '[data-products-info-modal-close]'
    ),
    modalProductsCoffe: document.querySelector('[data-products-info-modal]'),
  };
  var refsMilkshake = {
    openModalBtnProductsMilkshake: document.querySelector(
      '[data-products-info-modal-open-milkshakes]'
    ),
    closeModalBtnProductsMilkshake: document.querySelector(
      '[data-products-info-modal-close]'
    ),
    modalProductsMilkshake: document.querySelector('[data-products-info-modal]'),
  };

  refsCreame.openModalBtnProductsCreame.addEventListener('click', toggleModal);
  refsCreame.closeModalBtnProductsCreame.addEventListener('click', toggleModal);

  refsCoffe.openModalBtnProductsCoffe.addEventListener('click', toggleModal);
  refsCoffe.closeModalBtnProductsCoffe.addEventListener('click', toggleModal);

  refsMilkshake.openModalBtnProductsMilkshake.addEventListener('click', toggleModal);
  refsMilkshake.closeModalBtnProductsMilkshake.addEventListener('click', toggleModal);

  function toggleModal() {
    refsCreame.modalProductsCreame.classList.toggle('is-hidden');
    refsCoffe.modalProductsCoffe.classList.toggle('is-hidden');
    refsMilkshake.modalProductsMilkshake.classList.toggle('is-hidden');

  }
  
})();
