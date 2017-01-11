$(document).ready(function() { 
  $( "form" ).submit(function(event) {
    event.preventDefault();
    validEmail();
    validPassLenght();
    alphanumeric();
    uppercase();
    var value_email = $('#email_id').val();
    var value_password = $('#password_id').val();
    console.log(value_email);
    console.log(value_password);
 });

function validEmail() {
    var value_email = $('#email_id').val();
    var valid_email = /@/.test(value_email); 
    if ( valid_email == false ) {
      $('ul').append("<li>El mail no es valido. Intenta de nuevo!</li>");
    }
}
function validPassLenght() {
    var value_password = $('#password_id').val();
    var length_password = value_password.length;
    if ( length_password <= 8 ) {
      $('ul').append("<li>El password tiene que tener al menos 8 caracteres</li>");
    }
}
function alphanumeric() {
  var value_password = $('#password_id').val();
  var value_alphanumeric =  /[a-zA-Z]\d/.test(value_password); 
   if ( value_alphanumeric == false ) {
      $('ul').append("<li>El password tiene que tener al menos un valor numerico (0-9)</li>");
    }
}
function uppercase() {
  var value_password = $('#password_id').val();
  var value_oneupercase =  /[A-Z]/.test(value_password); 
   if ( value_oneupercase == false ) {
      $('ul').append("<li>El password tiene que tener al menos una mayuscula</li>");
    }
}


)};
