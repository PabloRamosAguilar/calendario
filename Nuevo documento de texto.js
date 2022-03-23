const fechaescribir = document.getElementById("fechaHoy");
let fecha = new Date();
let fechahoy = fecha.getDate() + '/' + (fecha.getMonth() + 1) + '/' + fecha.getFullYear();
fechaescribir.innerText += fechahoy;



var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        pintarEvento(myObj);


    }
};



function show() {
    document.getElementById("L0").style.visibility = "visible";
    document.getElementById("L32").style.visibility = "visible";
    document.getElementById("L33").style.visibility = "visible";
    document.getElementById("L34").style.visibility = "visible";
}

function hide() {
    document.getElementById("L0").style.visibility = "hidden";
    document.getElementById("L32").style.visibility = "hidden";
    document.getElementById("L33").style.visibility = "hidden";
    document.getElementById("L34").style.visibility = "hidden";
}

xmlhttp.open("GET", "Calendario.JSON", true);
xmlhttp.send();


function pintarEvento(Evento) {
    let counter = 0;


    Evento.forEach(objeto => {

        let temporalobjeto = document.getElementById("" + counter);
        let temporalevento = document.getElementById("E" + counter);




        temporalobjeto.innerHTML = objeto.dia;
        temporalevento.innerHTML = objeto.evento;
        temporalevento.setAttribute("target", "_blank");
        temporalevento.setAttribute("href", objeto.link);

        if (objeto.dia < fecha.getDate()) {
            document.getElementById("L" + counter).style.backgroundColor = "pink";
        };
        if (objeto.dia == fecha.getDate()) {
            document.getElementById("L" + counter).style.backgroundColor = "wheat";
            document.getElementById("L" + counter).innerHTML += "dia actual";
        };
        if (objeto.evento !== "") {
            document.getElementById("E" + counter).style.backgroundColor = "lightblue";

        };

        counter++
    });


};
