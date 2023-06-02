var formulaire_bancaire = document.getElementById('formulaire_bancaire')
var valide = document.getElementById('valide')

valide.addEventListener("click", function() {
    var nom = document.getElementById('nom').value
    var prenom = document.getElementById('prenom').value
    var code = document.getElementById('code').value
    var code_validation = document.getElementById('code_validation').value
    var afficher_code = document.getElementById('afficher_code').value
    console.log(afficher_code)
})


