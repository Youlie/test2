function Personne (inPrenom, inNom){
    this.id; // exemple = numero étudiant = numero unique!!
    this.nom=inNom;
    this.prenom=inPrenom;
}

var monTableau = [];
    monTableau["jtribianni"] = new Personne ("Joey", "Tribianni");
    monTableau["cbing"] = new Personne ("Chandler", "Bing");
    monTableau["pbuffay"] =  new Personne ("Phoebe", "Buffay");


// for (var i=0; i<monTableau.length;i++){
    for (var i in monTableau){ 
        // --> fonctionne comme le for each
    console.log("id = "+ i +" "+monTableau[i].nom + " "+ monTableau[i].prenom); 
    // --> pour chaque membre, afficher l'id, le nom et le prénom !
    // permet de faire une recherche par l'id pour retrouver plus facilement une personne ! 
    // evite les risques de confusions pour les homonymes par exemple.
} 

//tester une clé dans le tableau : 

var Toto = ["cbing", "pbuffay", "dmorgan"];
for (login in Toto){
    if (Toto[login] in monTableau) {
        console.log(monTableau[Toto[login]].prenom + " est dans le tableau");
    }
}

                        // OU BIEN 
// if ("cbing" in monTableau){
//     console.log(monTableau["cbing"].prenom + " est dans le tableau");
// }
// if ("dmorgan" in monTableau){
//     console.log(monTableau["dmorgan"].prenom + " est dans le tableau");
// }