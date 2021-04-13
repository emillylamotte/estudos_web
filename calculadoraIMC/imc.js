function calculaIMC(){
    document.getElementById("altura").style.borderColor = "#ffffff";
    document.getElementById("altura").style.backgroundColor = "#ffffff";
    document.getElementById("peso").style.borderColor = "#ffffff";
    document.getElementById("peso").style.backgroundColor = "#ffffff";
    if(document.getElementById("peso").value == ""){
      document.getElementById("resultado").innerHTML= ("Inserir o peso é obrigatório!! ");
      document.getElementById("peso").style.borderColor = "red";
      document.getElementById("peso").style.backgroundColor = "#ffe5e5";
      document.getElementById("peso").focus();
      return false;
    }
    if(document.getElementById("altura").value == ""){
      document.getElementById("resultado").innerHTML= ("Inserir a altura é obrigatório!! ");
      document.getElementById("altura").style.borderColor = "red";
      document.getElementById("altura").style.backgroundColor = "#ffe5e5";
      document.getElementById("altura").focus();
      return false;
    }
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var resultado = (peso/(altura*altura));
    var imc = resultado.toFixed(2);
    var indicador;   
    if (imc <= 18.5){
      indicador = (" abaixo do peso 🤔");
    }else if (imc <= 24.9){
      indicador = (" com peso saudável 😃");
    }else if (imc <= 29.9){
      indicador = (" com sobrepeso");
    }else if (imc <= 39.9){
      indicador = (" obeso ☹️");
    }else {
      indicador = ("com obesidade mórbida ☹️");
    }
    document.getElementById("resultado").innerHTML= ("Seu IMC é: "+ imc +","+"você está "+ indicador);
    return true;
  }
  