// 'use strict';

function getJson(file) {
    return file.json();
}

function fileToText(myjson) {
    var tabelle = document.getElementById("table");
    for (var i of myjson.personen) {
        tabelle.insertAdjacentHTML("beforeend",
        "<tr>" +
        "<td class='pic'>" + getIcon(i.anrede) + "</td>" + 
        "<td>" + i.anrede + "</td>" +
        "<td>" + i.vorname + "</td>" +
        "<td>" + i.nachname + "</td>" +
        "</tr>")
    }
}

function getIcon(anrede) {
    switch(anrede) {
        case "Herr":
            return "<img src='images/mann.png' alt='Mann'>";
        case "Frau":
            return "<img src='images/frau.webp' alt='Frau'>";
        case "Divers":
            return "<img src='images/divers.png' alt='Divers'>";
        default:
            return "";
    }
}

var cell = document.getElementById("id4712");
fetch("http://localhost:8080/personen.json")
    .then(getJson)
    .then(fileToText);
