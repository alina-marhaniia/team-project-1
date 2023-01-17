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

  // var refsBuyNow = {
  //   openModalBtnBuyNow: document.querySelector(
  //     '[buy-now-modal-open]'
  //   ),
  //   closeModalBtnBuyNow: document.querySelector(
  //     '[buy-now-modal-close]'
  //   ),
  //   modalBuyNow: document.querySelector('[buy-now-modal]'),
  // };

  // var refsBuyNowMob = {
  //   openModalBtnBuyNowMob: document.querySelector(
  //     '[Buynow-modal-open-mob]'
  //   ),
  //   closeModalBtnBuyNowMob: document.querySelector(
  //     '[buy-now-modal-close]'
  //   ),
  //   modalBuyNowMob: document.querySelector('[buy-now-modal]'),
  // };

  // refsBuyNow.openModalBtnBuyNow.addEventListener('click', toggleModal);
  // refsBuyNow.closeModalBtnBuyNow.addEventListener('click', toggleModal);

  // refsBuyNowMob.openModalBtnBuyNowMob.addEventListener('click', toggleModal);
  // refsBuyNowMob.closeModalBtnBuyNowMob.addEventListener('click', toggleModal);

  // function toggleModal() {
  //   refsBuyNow.modalBuyNow.classList.toggle('buy-now__is-hidden');
  //   refsBuyNowMob.modalBuyNowMob.classList.toggle('buy-now__is-hidden');
  // }

  
