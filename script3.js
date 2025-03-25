function afficherResultat(message) {
    const resultatsDiv = document.getElementById("resultats");
    const pre = document.createElement("pre");
    pre.textContent = message;
    resultatsDiv.appendChild(pre);
}

function afficherNombresPremiers() {
    let resultat = "";
    for (let i = 2; i <= 100; i++) {
        let estPremier = true;
        for (let J = 2; J <= Math.sqrt(i); J++) {
            if (i % J === 0) {
                estPremier = false;
                break;
            }
        }
        if (estPremier) {
            resultat += i + " ";
        }
    }
    afficherResultat("Nombres premiers entre 1 et 100 : " + resultat);
}
afficherNombresPremiers();

function afficherFacteurs() {
    let nombre = parseInt(prompt("Entrez un nombre pour trouver ses facteurs :"), 10);
    if (isNaN(nombre) || nombre <= 0) {
        alert("Veuillez entrer un nombre valide.");
        return;
    }
    let result = "";
    for (let i = 1; i <= nombre; i++) {
        if (nombre % i === 0) {
            result += i + " ";
        }
    }
    afficherResultat("Les facteurs de " + nombre + " sont : " + result);
}
afficherFacteurs();

function calculerMoyenne() {
    let somme = 0;
    let count = 0;
    let nombre;
    do {
        nombre = prompt("Entrez un nombre positif (ou un nombre négatif pour arrêter) :");
        parseInt(0, 10)
        if (nombre >= 0) {
            somme += nombre;
            count++;
        }
    } while (nombre >= 0);
    if (count > 0) {
        let moyenne = somme / count;
        afficherResultat("La moyenne des nombres positifs saisis est : " + moyenne);
    } else {
        afficherResultat("Aucun nombre positif n'a été saisi.");
    }
}
calculerMoyenne();

function afficherMotifTriangulaire() {
    let hauteur = parseInt(prompt("Entrez la hauteur du motif triangulaire :"), 10);
    if (isNaN(hauteur) || hauteur <= 0) {
        alert("Veuillez entrer une hauteur valide.");
        return;
    }
    let result = "";
    for (let i = 1; i <= hauteur; i++) {
        let espaces = " ".repeat(hauteur - i);
        let etoiles = "*".repeat(i * 2 - 1);
        result += espaces + etoiles + "\n";
    }
    afficherResultat("Motif triangulaire :\n" + result);
}
afficherMotifTriangulaire();