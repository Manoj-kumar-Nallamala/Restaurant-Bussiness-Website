function validateFirstName(){
    var fn=document.getElementsByClassName('fname')[0].value;
    let final = new Boolean(true);
    var regname = /^[A-Za-z]{1,}$/
                if(fn == ""){
                    document.getElementsByClassName('fname')[0].style.borderColor = "red";
                    alert('Please Enter First Name');
                    final = false;
    }else{
        document.getElementsByClassName('fname')[0].style.borderColor = "green";
    }
    if (!(regname.test(document.getElementsByClassName("fname")[0].value))) {
        document.getElementsByClassName('fname')[0].style.borderColor = "red";
        alert("First Name Contains Numbers!");
        final = false;
    }   
    else if( final){
        document.getElementsByClassName('fname')[0].style.borderColor = "green";
    }
    return final;
}
function validateLastName(){
    var ln=document.getElementsByClassName('lname')[0].value;
    let final = new Boolean(true);
    var regname = /^[A-Za-z]{1,}$/
                if(ln == ""){
                    document.getElementsByClassName('lname')[0].style.borderColor = "red";
                    alert('Please Enter Last Name');
                    final = false;
    }else if(final){
        document.getElementsByClassName('lname')[0].style.borderColor = "green";
    }
    if (!(regname.test(document.getElementsByClassName("lname")[0].value))) {
        document.getElementsByClassName('lname')[0].style.borderColor = "red";
        alert("Last Name Contains Numbers!");
        final = false;
    }   
    else if(final) {
        document.getElementsByClassName('lname')[0].style.borderColor = "green";
    }
    return final;
}
function validatePhoneNumber(){
    let final = new Boolean(true);
    var input_str=document.getElementsByClassName("pnum")[0].value;
    var re=/^\((\d{3})\)[- ](\d{3})[- ](\d{4})$/;
    if(input_str == ""){
        document.getElementsByClassName('pnum')[0].style.borderColor = "red";
        alert("Phone number is empty");
        final = false;
    }
    else if(final) {
        document.getElementsByClassName('pnum')[0].style.borderColor = "green";
    }
    if(!re.test(input_str)){
        document.getElementsByClassName('pnum')[0].style.borderColor = "red";
        alert("Phone number format is invalid. Please enter number in (###)-###-####");
        final = false;
    }
    else if(final) {
        document.getElementsByClassName('pnum')[0].style.borderColor = "green";
    }
    return final;
}
function validateEmail(){
    let final = new Boolean(true);
    var re = /\w(\w|[!#$%&'*\+\/=?^_`{|}~])+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+/;
    var input_str=document.getElementsByClassName("email")[0].value;
    if(input_str == ""){
        document.getElementsByClassName('email')[0].style.borderColor = "red";
        alert("Email is empty");
        final = false;
    }
    else if(final) {
        document.getElementsByClassName('email')[0].style.borderColor = "green";
    }
    if(!re.test(input_str)){
        document.getElementsByClassName('email')[0].style.borderColor = "red";
        alert("Email format is invalid.");
        final = false;
    }
    else if(final) {
        document.getElementsByClassName('email')[0].style.borderColor = "green";
    }
    return final;
}

function validatePassword(){
    let final = new Boolean(true);
    var regpwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var input_str=document.getElementsByClassName("pwd")[0].value;
    if(input_str == ""){
        document.getElementsByClassName('pwd')[0].style.borderColor = "red";
        alert("Password is empty");
        final = false;
    }
    else if(final) {
        document.getElementsByClassName('pwd')[0].style.borderColor = "green";
    }
    if(!(regpwd.test(input_str))){
        document.getElementsByClassName('pwd')[0].style.borderColor = "red";
        alert("Password format is invalid.");
        final = false;
    }
    else if(final) {
        document.getElementsByClassName('pwd')[0].style.borderColor = "green";
    }
    return final;
}
function validateAddress(){
    let final = new Boolean(true);
    var regadd = /^[a-zA-Z0-9\s,.'#-]{7,}$/;
    var input_str=document.getElementsByClassName("add")[0].value;
    
    if(!(regadd.test(input_str))){
        alert("Address format is invalid");
        final = false;
    }
    return final;
}

function validateTextArea(){
    let final = new Boolean(true);
    var regadd = /^[a-zA-Z0-9\s,.'#-]{7,}$/;
    var input_str=document.getElementsByClassName("tarea")[0].value;
    
    if(input_str.length>48){
        alert("Must for order fields is greater than 30 Characters");
        final = false;
    }
    return final;
}

function showMessage() {
    var validationFailed = new Boolean(false);
    let firstName = validateFirstName();
    let lastName = validateLastName();
    let phoneNumber = validatePhoneNumber();
    let email = validateEmail();
    let pwd = validatePassword();
    let add=validateAddress();
    let tarea=validateTextArea();
    if( firstName && lastName && phoneNumber && email && pwd && add && tarea){
        alert("Order Placed!!");
    }
   
}

$(function(){

    //initially all dropdowns are hidden
    $('#dropdownHolder select').hide();
    $('input:checkbox').click(function(){
        var isOnCall = $('.OnCall:checked').length,
            anyOther = $('.other:checked').length;
        $('#dropdownHolder select').hide();
        if (isOnCall > 0 &&  anyOther > 0){
        $('#dropdown3').show();
        }
        else if (isOnCall == 0 &&  anyOther > 0){
        $('#dropdown1').show();
        }
        else if (isOnCall > 0 &&  anyOther == 0){
        $('#dropdown2').show();
        }
        
    })
        

});