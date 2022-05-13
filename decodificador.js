// Selecionando as caixas de texto(textarea)
const mensagemSecreta = document.querySelector("#mensagemSecreta");
const mensagemPronta = document.querySelector("#mensagemPronta");

//Criando a criptografia

function btnEncriptar() {
    const textoEncriptado = encriptar(mensagemSecreta.value)
    mensagemPronta.value =  textoEncriptado
    mensagemPronta.style.backgroundImage = "none"
}

function encriptar(stringEncriptada) {
let matrizCodigo = [["e","enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
stringEncriptada = stringEncriptada.toLowerCase();

for ( let i=0; i < matrizCodigo.length; i++) {
    if(stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])  
    }
}

return stringEncriptada;
}

// desfazendo a Criptografia

 function btnDescriptar() {
   let mensagemVazia = mensagemPronta.value


  if (!mensagemVazia){
    const textoDescriptado = descriptar(mensagemSecreta.value);
    mensagemPronta.value = textoDescriptado; 
    mensagemPronta.style.backgroundImage = "none"
  } else {
      const textoDescriptado = descriptar(mensagemPronta.value);
    mensagemPronta.value = textoDescriptado; 
  } 
  
}

 function descriptar(stringDescriptada) {
   let substituicao = [["enter", "e"], ["imes","i"], ["ai", "a"],["ober", "o"], ["ufat","u"]];
  

  for ( let i =0; i < substituicao.length; i++) {
    if (stringDescriptada.includes(substituicao[i][0])) {
      stringDescriptada = stringDescriptada.replaceAll(substituicao[i][0], substituicao[i][1])
    }
  }
  return stringDescriptada;
}
 
 

//  copiando o texto 
 function btnCopiar() {

  var textoCopiado = document.getElementById("mensagemPronta").value;
  navigator.clipboard.writeText(textoCopiado);
  alert("Texto copiado");
}

// limpando o conteúdo das caixas de texto
function btnLimpar() {
  document.getElementById("mensagemSecreta").value = ""; 
  document.getElementById("mensagemPronta").value = "";
  mensagemPronta.style.backgroundImage = "url('ilustração.png')";
}

// bloqueando a digitação de caracteres especiais e letras maiusculas

const textoPermitido = document.querySelector("#mensagemSecreta");
textoPermitido.addEventListener("keypress", function(e) {

 if (!verificar(e)) {
    e.preventDefault();
 }
});

function verificar (e) {
  const char = String.fromCharCode(e.keyCode);
  const textoPermitido = '[a-z-0-9]';

  if(char.match(textoPermitido)) {
    return true;
  }

}

  