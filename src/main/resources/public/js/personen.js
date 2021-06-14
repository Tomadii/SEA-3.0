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

function add() {
    document.getElementById("table")
    .insertAdjacentHTML("beforeend",
        "<form>" +
        "<label for='fname'>First name:</label><br>" + 
        "<input type='text' id='fname' name='fname'><br>" +
        "<label for='lname'>Last name:</label><br>" +
        "<input type='text' id='lname' name='lname'>" +
        "<label for='salut'>Salutation:</label><br>" +
        "<input type='text' id='salut' name='salut'><br>" +
        "<input type='submit' onclick='test()' value='Submit'>" +
        "</form>"
    )
}

function test() {
    alert("Test");
}

// function getQueryVariable(variable) {
// 	var query = window.location.search.substring(1);
// 	console.log("Query anzeigen: " + query);  //fname=FN&lname=LN&salut=ST
// 	var vars = query.split("&");              //  trennung nach &
// 	for (var i = 0; i < vars.length; i++) {   //  fname=FN    lname=LN   salut=ST
// 		var pair = vars[i].split("=");        //  trennung nach = 
// 		console.log("Vars i: " + vars[i]);    //  fname=FN    lname=LN   salut=ST
//  		console.log("pair: " + pair[0]);      // fname
// 	 	console.log("pair: " + pair[1]);      // FN
// 		if (pair[0] == variable) { return pair[1]; }
// 	}
// 	return (false);
// }

function onInputClick(event) {
    event.preventDefault();             // verhindet den Standart aufruf. (POST/GET)
    console.log("click onInputClick");  
    
    var anrede = document.getElementById("anrede").value;
        console.log(anrede);
    var vorname = document.getElementById("vorname").value;
        console.log(vorname);
    var nachname = document.getElementById("nachname").value;
        console.log(nachname);

    var jsondata =`{ "anrede": "${anrede}", "vorname": "${vorname}", "nachname": "${nachname}" } `;
    console.log(jsondata);

    fetch("http://localhost:8080/submitPerson.json", {
        method: 'POST', 
        body: jsondata,
        // headers: {
        //     'Content-Type': 'application/json',
        // }
    });
}

fetch("http://localhost:8080/personen.json")
    .then(getJson)
    .then(fileToText);


document.getElementById("test").addEventListener("click", test);

document.getElementById("submit").addEventListener("click", onInputClick);
