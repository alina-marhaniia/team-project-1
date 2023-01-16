function checkParamsProducts() {
    var ProductsName = $('#Products_name').val();
    var ProductsPhone = $('#Products_tel').val();
     
    if(ProductsName.length != 0 &&  ProductsPhone.length != 0) {
        $('#Products_submit').removeAttr('disabled');
    } else {
        $('#Products_submit').attr('disabled', 'disabled');
    }
}