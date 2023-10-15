var valide = document.getElementById('valide');
var listeMembre = [];

valide.addEventListener("click", function() {
    var listeActuel = {};

    class insertionMembre {
        constructor(code, code_validation, prenom, nom, solde) {
            this.code = code;
            this.code_validation = code_validation;
            this.prenom = prenom;
            this.nom = nom;
            this.solde = solde;
            this.formulaire = document.getElementById('formulaire_bancaire');
            this.formulaire.addEventListener('submit', this.valider.bind(this));
        }

        valider(event) {
            if (this.code !== this.code_validation) {
                event.preventDefault();
                console.log('Le mot de passe est incorrect.');
                return;
            }
        }
        ajouteMembre(liste){
            liste.push({[nom] : this.nom})
        }
    }

    var code = document.getElementById('code').value;
    var code_validation = document.getElementById('code_validation').value;
    var prenom = document.getElementById('prenom').value;
    var nom = document.getElementById('nom').value;
    var solde = 0;

    var verification = new insertionMembre(code, code_validation, prenom, nom, solde);
    verification.ajouteMembre(listeMembre)
});

var afficher_code = document.getElementById('afficher_code');
var code_validation = document.getElementById('code_validation');

afficher_code.addEventListener('change', function() {
    if (afficher_code.checked) {
        code_validation.setAttribute('type', 'text');
    } else {
        code_validation.setAttribute('type', 'password');
    }
});