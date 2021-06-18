function getJson(file) {
    return file.json();
}

function fileToText(myjson) {
    var tablebody = document.getElementById("tablebody");
    for (var i of myjson.personen) {
        tablebody.insertAdjacentHTML("beforeend",
        "<tr>" +
        "<td class='edit'><button id='test' type='button' onclick='test()'><img src='images/delete.png' alt='delete'></button></td>" + 
        "<td class='pic'>" + getIcon(i.anrede) + "</td>" + 
        "<td>" + i.id + "</td>" +
        "<td>" + i.anrede + "</td>" +
        "<td>" + i.vorname + "</td>" +
        "<td>" + i.nachname + "</td>" +
        "</tr>");
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
    writeJsondata(jsondata);
    refreshTable();
}

function writeJsondata(jsondata) {
    console.log("start writeJsondata");
    fetch("/json/person", {
        method: 'POST', 
        body: jsondata,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

function addTestdaten() {
    var jsondata1 =`{ "anrede": "Herr", "vorname": "Kristian", "nachname": "Stoll" }`;
    var jsondata2 =`{ "anrede": "Frau", "vorname": "Carola", "nachname": "Graf" }`;
    var jsondata3 =`{ "anrede": "Divers", "vorname": "Tanja", "nachname": "Schmitz" }`;
    writeJsondata(jsondata1)
    .then(writeJsondata(jsondata2)
    .then(writeJsondata(jsondata3)
    .then(refreshTable())));
}

function del() {
    fetch("/json/persondel/5", {
        method: "DELETE",
    })
    refreshTable();
}

function refreshTable() {
    document.getElementById("tablebody").innerHTML = "";
    fetch("/json/persons/all")
        .then(getJson)
        .then(fileToText);
}

refreshTable();

// document.getElementById("test").addEventListener("click", test);

document.getElementById("submit").addEventListener("click", onInputClick);

document.getElementById("testdaten").addEventListener("click", addTestdaten);

document.getElementById("del").addEventListener("click", del);
