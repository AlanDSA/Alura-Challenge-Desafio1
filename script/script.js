function criptografar(){
    var texto =document.getElementById("textoSaida").value;
    var textoCriptografado=btoa(texto)
    document.getElementById("textoSaida").value =textoCriptografado
}
function descriptografar(){
    var textoCriptografado =document.getElementById("textoSaida").value;
    var textoDescriptografado= atob(textoCriptografado)
    document.getElementById("textoSaida").value =textoDescriptografado;
}
function validarCaixaTexto(element) {
    element.value = element.value.replace(/[^a-z]/g, '');
  }