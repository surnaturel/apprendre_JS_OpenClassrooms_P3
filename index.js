class Chien{
    constructor(nom, race){
        this.nom = nom,
        this.race = race
    }

    aboyer(){
        if(this.nom && this.race){
            console.log("HOHOHO")
        }
    }
}

var dougue = new Chien('douge', 'Gerger allemand')

dougue.aboyer()


class Etudiant{
    constructor(nom, prenom, note = []){
        this.nom = nom,
         this.prenom = prenom,
         this.note = note
    }
    ajouterNote(note){

    }
    calculerMoyenns(){

    }
    afiicherMoyenne(){
        
    }
}