function about(){
    window.location.hash = '#about';
}
function cast(){
    window.location.hash = '#characters';
}
function episodes(){
    window.location.hash = '#best-episodes';
}
function galery(){
    window.location = '#galery';
}
function extras(){
    window.location.hash = '#extras';
}
var state = 0;
function colorchange(){
    if (state == 0){
    document.getElementById("header").style.backgroundColor = "#000000";
    document.getElementById("dark-mode-button").style.backgroundColor = "#000000";
    document.getElementById("footer").style.backgroundColor = "#000000";
    document.getElementById("line").style.backgroundColor = "#909090";
    document.getElementById("s1").style.backgroundColor = "#000000";
    document.getElementById("container").style.backgroundColor = "#000000";
    document.getElementById("button-home").style.backgroundColor = "#000000";
    document.getElementById("button-home2").style.backgroundColor = "#000000";
    document.getElementById("button-home3").style.backgroundColor = "#000000";
    document.getElementById("button-home4").style.backgroundColor = "#000000";
    document.getElementById("button-home5").style.backgroundColor = "#000000";
    document.getElementById("button-home6").style.backgroundColor = "#000000"; 
    state = 1;
    var btnDark = document.getElementById('button-home6')
    btnDark.innerHTML=  '<i class="far fa-sun"></i>' 
    }
    else{
    document.getElementById("header").style.backgroundColor = "#993399";
    document.getElementById("dark-mode-button").style.backgroundColor = "#993399";
    document.getElementById("footer").style.backgroundColor = "#ca45ca";
    document.getElementById("line").style.backgroundColor = "#ffffff";
    document.getElementById("s1").style.backgroundColor = "#ca45ca";
    document.getElementById("container").style.backgroundColor = "#ca45ca";
    document.getElementById("button-home").style.backgroundColor = "#993399";
    document.getElementById("button-home2").style.backgroundColor = "#993399";
    document.getElementById("button-home3").style.backgroundColor = "#993399";
    document.getElementById("button-home4").style.backgroundColor = "#993399";
    document.getElementById("button-home5").style.backgroundColor = "#993399";
    document.getElementById("button-home6").style.backgroundColor = "#993399"; 
    state = 0;
    var btnDark = document.getElementById('button-home6')
    btnDark.innerHTML=  '<i class="far fa-moon"></i> ' 
    }
}

