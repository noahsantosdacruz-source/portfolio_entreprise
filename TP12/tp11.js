function calcul_moyenne(){
    var n1 = prompt("Entrez le premier nombre :");
    var n2 = prompt("Entrez le deuxième nombre :");
    var n3 = prompt("Entrez le troisième nombre :");
    var somme = Number(n1) + Number(n2) + Number(n3);

    document.write("La somme des trois nombres est : " + somme + "<br>");
    var moyenne = somme / 3;

    document.write("Voici la moyenne: " + moyenne + "<br>");

    if (moyenne >= 10) {
        document.write("Félicitations bg, t'es le meilleur !<br>");
    } else {
        document.write("Dommage, tu peux mieux faire !<br>");
    }
}

function test_age(){
    var age = prompt("Quel âge as-tu ?");
    if (age < 18){
        document.write("Vous êtes mineur(e).<br>");
        document.bgColor="red";
        document.fgColor = "white";
    }
    else{
        document.write("Vous êtes majeur(e).<br>");
        document.bgColor="green";
        document.fgColor = "white";
    } }
   
function test_name() {
    var nom = prompt("Quel est ton nom ?");
    var prénom = prompt ("Quel est ton prénom");
    document.write('<div style="margin:auto; widht = 300px; border:2px solid blue;">');
    document.write("Bonjour " + nom + " !<br>");
    document.write("Bonjour " + prénom + "!<br>");
    document.write("Salut mon amis:" +" "+ nom +" "+ prénom );
    document.write("</div>")
    document.fgColor = "white";
    document.bgColor = "black";
    
    if (nom.toLowerCase() === "SANTOS"  || prénom.toLowerCase() === "CRUZ"){

        document.write ("Bienvenue au MVP");
    }
    
}

function test_color(){
    let couleur = prompt("Donner une couleur")
    if (couleur == "rouge"   || couleur == "red") {
        document.body.style.backgroundColor = "red";

    }
     else if (couleur == "bleu"   || couleur == "blue") {
        document.body.style.backgroundColor = "blue";
}

 else if (couleur == "vert"   || couleur == "green") {
        document.body.style.backgroundColor = "green";
}
 else if (couleur == "rose"   || couleur == "pink") {
        document.body.style.backgroundColor = "pink";
}
else{
    document.write("Non Comprise")
}
}