function afficherResultat(message) {
    const resultatsDiv = document.getElementById("resultats");
    const p = document.createElement("p");
    p.textContent = message;
    resultatsDiv.appendChild(p);
}

// Programme 1: Utilise une boucle for pour afficher les nombres de 1 à 10
function afficherNombres() {
    let result = "";
    for (let i = 1; i <= 10; i++) {
        result += i + " ";
    }
    afficherResultat("Nombres de 1 à 10 : " + result);
}
afficherNombres();

// Programme 2: Utilise une boucle while pour calculer la somme des entiers de 1 à 100
function calculerSomme() {
    let somme = 0;
    let i = 1;
    while (i <= 100) {
        somme += i;
        i++;
    }
    afficherResultat("La somme des entiers de 1 à 100 est : " + somme);
}
calculerSomme();

// Programme 3: Utilise une boucle do-while pour demander à l'utilisateur de deviner un nombre secret entre 1 et 100
function devinerNombreSecret() {
    const nombreSecret = Math.floor(Math.random() * 100) + 1;
    let supposition;
    do {
        supposition = parseInt(prompt("Devinez le nombre secret (entre 1 et 100) :"), 10);
        if (supposition < nombreSecret) {
            alert("Le nombre secret est plus grand.");
        } else if (supposition > nombreSecret) {
            alert("Le nombre secret est plus petit.");
        } else {
            alert("Félicitations ! Vous avez deviné le nombre secret.");
        }
    } while (supposition !== nombreSecret);
}
devinerNombreSecret();

// Programme 4: Génère et affiche les premiers N termes de la séquence de Fibonacci
function afficherFibonacci() {
    let n = parseInt(prompt("Entrez un nombre de termes de la séquence de Fibonacci à générer :"), 10);
    if (isNaN(n) || n <= 0) {
        alert("Veuillez entrer un nombre valide.");
        return;
    }
    let fibonacci = [0, 1];
    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    afficherResultat("Les premiers " + n + " termes de la séquence de Fibonacci sont : " + fibonacci.slice(0, n).join(", "));
}
afficherFibonacci();