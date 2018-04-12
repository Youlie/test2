function Personne (inPrenom, inNom){
    this.nom=inNom;
    this.prenom=inPrenom;
    this.getNom = function(){
        return this.prenom + " " + this.nom;
    }
}

// créer une classe Client héritant de la classe Personne
function Client (zeNom,zePrenom,ptFidelites){
    Personne.call (this,zeNom,zePrenom);
    this.soldeFidelite = ptFidelites;
    this.refuseDemarchage = function() {console.log("Non merci, je ne suis pas interesse")}
}

var p1 = new Personne ("Regina", "Phalange");
var p2 = new Client ("Chandler", "Bings");
Personne.prototype.disBonjour =function(){console.log("Bonjour je suis "+ this.getNom())}

p1.disBonjour();
p2.refuseDemarchage();