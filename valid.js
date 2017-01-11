$(document).ready(function(){ 
  //Toma la información de la forma cuando presione submit
  $("#target").on("submit",function(event) {
    event.preventDefault();
    validEmail();
    validPassword();
  });
});

// Metodo que valida el email
function validEmail() {
    // Se declara la variable email que toma el valor email de la forma
    var email = $('#email_id').val();
    // Se delcara la variable de la expresion regular con la que se va a comparar
    var reg_email = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/;
    // .match es un metodo que se aplica al email y lo compara on la expresion regular, cuando no hace match regresa null sino regresa un arreglo con el email
    if (email.match(reg_email) == null) { 
      var email_error = "Debes escribir una dirección de email valida"
      // con append mandas la informacion al id selecionado
      $("#display_error").append(email_error);
    }
    
}

// Metodo que valida el password
function validPassword(){
  // Se declara la variable del password
  var password = $('#password_id').val();
  // comprueba que la extensión del password sea de 8 caracteres
  if (password.length < 8) {
    // si no se cumple la condicion manda el error
    var lenght_error = "El password debe contener al menos 8 caracteres"
    $("#display_psw_error").append(lenght_error);
    }
  // comprueba que contenga mayusculas 
   if (password.match(/[A-Z]/) == null){
      var caps_error = "El password debe contener al menos una mayuscula"
      $("#display_caps_error").append(caps_error);
    }
    // comprueba que contenga al menos un dígito
    if (password.match(/\d/) ==  null){
      var num_error = "El password debe contener al menos un carácter numérico"
      $("#display_num_error").append(num_error);
   }
}

