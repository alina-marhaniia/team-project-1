function checkParamsBuynow() {
    var BuynowName = $('#Buynow_name').val();
    var BuynowPhone = $('#Buynow_tel').val();
     
    if(BuynowName.length != 0 &&  BuynowPhone.length != 0) {
        $('#Buynow_submit').removeAttr('disabled');
    } else {
        $('#Buynow_submit').attr('disabled', 'disabled');
    }
}