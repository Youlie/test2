// var maChaine = "Bienvenue à Montpellier";

// console.log(maChaine.length);

// var longueurDeMaChaine = maChaine.length;
// var nombreDeCaracteresE = 0;

// var k=1;
// while  ((k<longueurDeMaChaine) && (nombreDeCaracteresE<3)){
//     console.log("je regarde le caractère " + maChaine[k]);
//     if (maChaine[k]==="e"){
//         nombreDeCaracteresE += 1;
//         console.log("c'est un E !!");
//     }
//     k++;
// }

// if (nombreDeCaracteresE==3){
//     console.log("j'ai trouvé trois e en seulement " +k+ " caracteres");
// } else {
//     console.log("j'ai atteint la fin de ma chain sans trouver 3 e");
// }

//  console.log("j'ai trouvé " + nombreDeCaracteresE + " caractères e dans la chaine");
    
// LES TABLEAUX 

var monTableau = [5,6,"sept",421];

// 1er cas : on veut compter le nombre de chaine du tableaux 
// et le nombre d'entier (valeur numérique)
var entier=0;
var chaineCaractère=0;
for (var i=0; i<monTableau.length; i++) {
    if (typeof(monTableau[i])=="number"){
        entier++;
    }  
    else if (typeof(monTableau[i])=="string"){
        chaineCaractère++;
    }
}
console.log("le nombre d'entier est de "+entier+" et le nombre de caractères est de "+chaineCaractère);

//2ème cas : on veut dire si le tableau contient une chaine
var entier=0;
var chaineCaractère=0;
var chaineTrouvee=false;
var longueur=monTableau.length;
var k=0;

for (var k =0; (!chaineTrouvee) && (k<longueur);k++){
    if (typeof(monTableau[k])=="string"){
        chaineTrouvee=true;
    }
}
if (chaineTrouvee){
    console.log("j'ai trouvé une chaine au bout de "+k+" itérations");
}else {
    console.log("il n'y a pas de chaines de caractères");
}
