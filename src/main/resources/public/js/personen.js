function getJson(file) {
    return file.json();
}

function fileToText(myjson) {
    var tablebody = document.getElementById("tablebody");
    for (var i of myjson.personen) {
        if (i.salutation != null ) {
            tablebody.insertAdjacentHTML("beforeend",
            `<tr id="edit${i.id}">` +
                `<td> ${i.id} </td>` +
                `<td class='pic'> ${getIcon(i.salutation)} </td>` + 
                `<td> ${i.salutation} </td>` +
                `<td> ${i.firstname} </td>` +
                `<td> ${i.lastname} </td>` +
                `<td> ${i.birthdate} </td>` +
                `<td> ${i.version} </td>` +
                `<td>` +
                    `<button type='button' onclick='deletePerson(${i.id})'><img class='icon' src='images/delete.png' alt='Delete'></button>` + 
                    `<button type='button' onclick='edit(${i.id})'><img class='icon' src='images/Edit.svg' alt='Edit'></button>` +
                `</td>` + 
            `</tr>`);
        }
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

function onInputClick(event) {
    event.preventDefault();             // verhindet den Standart aufruf. (POST/GET)
    console.log("click onInputClick");  

    var salutation = document.getElementById("salutation").value;
        console.log(salutation);
    var firstname = document.getElementById("firstname").value;
        console.log(firstname);
    var lastname = document.getElementById("lastname").value;
        console.log(lastname);
    var birthdate = document.getElementById("birthdate").value;
        console.log(birthdate);

    var jsondata =`{ "salutation": "${salutation}", "firstname": "${firstname}", "lastname": "${lastname}", "birthdate": "${birthdate}" } `;
    console.log(jsondata);
    writeJsondata(jsondata);
}

function writeJsondata(jsondata) {
    console.log("start writeJsondata");
    fetch("/json/person", {
        method: 'POST', 
        body: jsondata,
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(refreshTable)
    .then(addPerson);
}

function deletePerson(id) {
    console.log(`Start delete ${id}`);
    var url = `/json/persondel/${id}`
    fetch(url, {
        method: "DELETE",
    })
    .then(refreshTable);
}

function edit(id) {
    console.log(`Start edit ${id}`);
    fetch(`json/person/${id}`)
        .then(getJson)
        .then(modify);
}

function modify(myjson) {
    var editid = document.getElementById(`edit${myjson.id}`);
    var id = myjson.id;
    var version = myjson.version;
    editid.innerHTML = "";
    editid.insertAdjacentHTML("beforeend",
        `<form>` +
            `<td> ${myjson.id} </td>` +
            `<td class='pic'> ${getIcon(myjson.salutation)} </td>` + 
            `<td id="salutInsert"></td>` + 
            `<td><input type='text' id='firstname' name='firstname' value='${myjson.firstname}'></td>` + 
            `<td><input type='text' id='lastname' name='lastname' value='${myjson.lastname}'></td>` +
            `<td><input type='date' id='birthdate' name='birthdate' value='${myjson.birthdate}'></td>` +
            `<td> ${myjson.version} </td>` +
            `<td>` +
                `<button id='update' type='submit' onclick='update(${id}, ${version})' value='${myjson.id}'>Person aktualisieren</button>` +
                `<button type='button' onclick='abort()'><img class='icon' src='images/abort.png' alt='Abort'></button>` +
            `</td>` +
        `</form>`
    );
    salutation(myjson.salutation);
}

function salutation(salutation) {

    var selectedFrau = (salutation==="Frau")?"selected": "";
    var selectedHerr = (salutation==="Herr")?"selected": "";
    var selectedDivers = (salutation==="Divers")?"selected": "";
    var selectedNN = (salutation==="NN")?"selected": "";

    document.getElementById("salutInsert").insertAdjacentHTML("afterbegin",
        `<select name='salutation' id='salutation'>` +
            `<option value="Frau" ${selectedFrau}>Frau</option>` +
            `<option value="Herr" ${selectedHerr}>Herr</option>` +
            `<option value="Divers" ${selectedDivers}>Divers</option>` +
            `<option value="NN" ${selectedNN}>NN</option>` +
        `</select>`
    );
}

function update(id, version) {
    console.log("Start update")

    var salutation = document.getElementById("salutation").value;
        console.log(salutation);
    var firstname = document.getElementById("firstname").value;
        console.log(firstname);
    var lastname = document.getElementById("lastname").value;
        console.log(lastname);
    var birthdate = document.getElementById("birthdate").value;
        console.log(birthdate);

    var jsondata =`{ "id": ${id}, "salutation": "${salutation}", "firstname": "${firstname}", "lastname": "${lastname}", "birthdate": "${birthdate}", "version": ${version} } `;
    console.log(jsondata);

    fetch(`/json/update/person`, {
        method: 'PUT', 
        body: jsondata,
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(refreshTable)
}

function refreshTable() {
    document.getElementById("tablebody").innerHTML = "";
    fetch("/json/persons/all")
        .then(getJson)
        .then(fileToText);
}

function filter() {
    document.getElementById("tablehead").insertAdjacentHTML("beforeend", 
        `<tr>` +
            `<th></th>` +
            `<th></th>` +
            `<th></th>` +
            `<th></th>` +
            `<th></th>` +
            `<th></th>` +
            `<th></th>` +
            `<th>` +
                `<button>Filter setzen</button>` +
                `<button type='button' onclick='abortFilter()'><img class='icon' src='images/abort.png' alt='Abort'></button>` +
            `</th>` +
        `</tr>`
    )
    document.getElementById("filter").style.display = "none";
}

function tablehead() {
    document.getElementById("tablehead").insertAdjacentHTML("afterbegin",
        `<tr>` +
            `<th>ID</th>` +
            `<th></th>` +
            `<th>Anrede</th>` +
            `<th>Vorname</th>` +
            `<th>Nachname</th>` +
            `<th>Geburtsdatum</th>` +
            `<th class="editshow">Version</th>` +
            `<th class="editshow"><button id="filter" type="button" onclick="filter()">Filter</button></th>` +
        `</tr>`
    )
}

function abort() {
    refreshTable();
}

function abortFilter() {
    document.getElementById("tablehead").innerHTML = "";
    tablehead();
}

function addPerson() {
    document.getElementById("tablefoot").innerHTML = "";
    document.getElementById("tablefoot").insertAdjacentHTML("afterbegin",
        `<tr>` + 
            `<form>` +
                `<td></td>` +
                `<td></td>` +
                `<td><select name='salutation' id='salutation'>` +
                    `<option value="Frau">Frau</option>` +
                    `<option value="Herr">Herr</option>` +
                    `<option value="Divers">Divers</option>` +
                    `<option value="NN" selected>NN</option>` +
                `</select></td>` +
                `<td><input type='text' id='firstname' name='firstname'></td>` +
                `<td><input type='text' id='lastname' name='lastname'></td>` +
                `<td><input type='date' id='birthdate' name='birthdate'></td>` +
                `<td></td>` +
                `<td>` +
                    `<button id='submit' type='submit' value="Submit" onclick="inInputClick()">Person hinzufügen</button>` +
                    `<button type='button' onclick='abortAddPerson()'><img class='icon' src='images/abort.png' alt='Abort'></button>` +
                `</td>` +
            `</form>` +
        `</tr>`
    )
}

function abortAddPerson() {
    document.getElementById("tablefoot").innerHTML = "";
}

function editshow(show) {
    document.getElementsByClassName("editshow").style.display = "none";
}

tablehead();
refreshTable();

document.getElementById("refresh").addEventListener("click", refreshTable);

document.getElementById("addPerson").addEventListener("click", addPerson);

document.getElementById("editshow").addEventListener("click", editshow);
