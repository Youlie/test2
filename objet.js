// DECLARER UNE FONCTION EN JS
function afficheDetails(someone){
    console.log("la personne dans la variable someone est " + someone.getMonNom());
    console.log("elle est agée de " + someone.getMonAge() + " ans");
}
var autreFonction = function(param){
    console.log("je suis aussi une fonction qui a un paramètre et il vaut "+ param);
}

var personne1= {
    prenom: "David",
    nom: "Bowie",
    age: 70, 
    getMonNom: function(){
        return this.prenom + " "+ this.nom;
    }
}
var personne2= {
    prenom: "Iggy",
    nom: "Pop",
    age: 74,
    getMonNom: function(){
        return this.prenom + " "+ this.nom;
    }
}

var fonctionDage =function() {return this.age};
personne1.getMonAge =fonctionDage;
personne2.getMonAge =fonctionDage;

afficheDetails(personne1);
afficheDetails(personne2);
autreFonction("Truc");