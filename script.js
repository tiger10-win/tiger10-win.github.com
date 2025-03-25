function verifierAge() {
    let age = prompt("Quel âge avez-vous ?");
    age = parseInt(age, 10);
    if (isNaN(age)) {
        alert("Veuillez entrer un âge valide.");
    } else if (age < 18) {
        alert("Vous êtes mineur.");
    } else {
        alert("Vous êtes majeur.");
    }
}
verifierAge();

function verifierPairImpair() {
    let nombre = prompt("Entrez un nombre :");
    nombre = parseInt(nombre, 10);
    if (nombre % 2 === 0) {
        alert("Le nombre est pair.");
    }
    else {
        alert("Le nombre est impair.");
    }
}
verifierPairImpair();

function AfficherNomMois() {
    let mois = prompt("Entrez le numéro du mois (1 à 12) :");
    mois = parseInt(mois, 10);
    const nomsDesMois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    if (isNaN(mois) || mois < 1 || mois > 12) {
       alert("Veuillez entrer un nombre entre 1 et 12.");
    } else {
        alert("Le mois est " + nomsDesMois[mois - 1] + ".");
    }
}
AfficherNomMois();

