function calcul_moyenne(){
    var n1 = prompt("Entrez le premier nombre :");
    var n2 = prompt("Entrez le deuxième nombre :");
    var n3 = prompt("Entrez le troisième nombre :");
    var somme = Number(n1) + Number(n2) + Number(n3);

    document.write("La somme des trois nombres est : " + somme + "<br>");
    var moyenne = somme / 3;

    document.write("Voici la moyenne: " + moyenne + "<br>");

    if (moyenne < 10) {
        document.write("Redoublant");
    } else if(moyenne < 12 ) {
        document.write("Admis_Passable");
    }
    else if ( moyenne < 14) {
        document.write("Admis_Bien");
    }
    else if ( moyenne > 14){
        document.write("Félicitation");

    }
    else {
        document.write("error")
    }
}



function température() {
var température = prompt("Mettez une température : ");
if (température < 10) {
    document.write("Froid");

}
else if (température < 25){
    document.write("Normal");
}
else if (température >= 25){
    document.write("Chaud");
}


}


function Comparaison_nombre() {
var n1 = prompt("saisir un nombre: ");
var n2 = prompt("saisir un nombre");
 let résultat = "";
if (n2 == n1 ) {

    resultat = "valeurs égales"
}
else if (n1 > n2){
resultat = "le nombre le plus grand nombre:"+ n1 + "le plus petit est "+n2 ;

}
else if (n1<n2){
resultat = "le nombre le plus grand nombre:"+ n2 + "le plus petit est"+n1;

}
else{
    document.write ("erreur");
}
document.write (resultat);
}

function jeu(){
var chiffre = prompt("saisir un chiffre:");
var chiffreSecret = Math.floor(Math.random()*20)+1;

if (chiffre < chiffreSecret){
    document.write ("Votre chiffre est inférieur au chiffre secret !"
);}
else if  (chiffre > chiffreSecret){
document.write( "Votre chiffre est supérieur au chiffre secret !"
)}
else if (chiffre == chiffreSecret){
    document.write( "Félicitations ! Vous avez trouvé le chiffre : ");

}
else{
     document.write("error");
}
}
