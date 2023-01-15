function checkParamsFranchise() {
    var FranchiseName = $('#franchise_name').val();
    var FranchiseEmail = $('#franchise_email').val();
    var FranchisePhone = $('#franchise_tel').val();
     
    if(FranchiseName.length != 0 && FranchiseEmail.length != 0 && FranchisePhone.length != 0) {
        $('#franchise-submit').removeAttr('disabled');
    } else {
        $('#franchise-submit').attr('disabled', 'disabled');
    }
}