
function somme(){

    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) + Number(b);
    document.getElementById("resultat").value = c;
}
function soustraction(){

    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) - Number(b);
    document.getElementById("resultat").value = c;
}
function multiplication(){

    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) * Number(b);
    document.getElementById("resultat").value = c;
}
function division(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) / Number(b);
    document.getElementById("resultat").value = c;
}
function parité(){
    var x = document.getElementById("t1").value;
    if (x % 2 == 0)
    document.getElementById("pair").value = "Paire";

else{
    document.getElementById("pair").value = "Impaire";
}
}
function permuter(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = a;
    a = b;
    b = c;
    document.getElementById("t1").value = a;
    document.getElementById("t2").value = b;
}
function reset() {
    document.getElementById("t1").value = "";
    document.getElementById("t2").value = "";
    document.getElementById("resultat").value = "";
    document.getElementById("pair").value = "";
}
function afficherDateHeure() {
    var date = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var dateString = date.toLocaleDateString('fr-FR', options);
    var timeString = date.toLocaleTimeString('fr-FR');
    document.getElementById("dateHeure").value = dateString + " " + timeString;
}
function carré(){
    var a = document.getElementById("t1").value;
    var b = a * a;
    document.getElementById("resultat").value = b;
}