// 'use strict';

//var head = document.getElementsByTagName("head");
document.getElementById("head").insertAdjacentHTML("beforeend",
    "<link rel='shortcut icon' type='image/x-icon' href='images/favicon.ico'>" +
    "<link rel='stylesheet' href='css/tomadi.css'>" 
)

var para = document.getElementById("id4711");
para.textContent = "Hier kommt ein Skript";
