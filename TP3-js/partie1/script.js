function lancerJeu() {
    var nbAleatoire = Math.floor(Math.random() * 100) + 1;
    var nbEssais = 0;
    var reponse = 0;
    var indication = '';

    while (nbAleatoire !== reponse && nbEssais < 3) {
        reponse = window.prompt("Un nombre aléatoire entre 1 et 100 a été générez. Devinez-le !" + indication, "Saisissez votre réponse");
        reponse = parseInt(reponse);
        indication = (reponse > nbAleatoire) ? "Plus petit !" : "Plus grand !";
        nbEssais++;
    }

    (nbAleatoire === reponse) ? alert("Bien joué !") : alert("Perdu :(");
}

tabPaysVilles = [
    [ 'France', ['Paris', 'Marseille', 'Lyon', 'Bordeaux'] ],
    [ 'USA', ['New York', 'Los Angeles', 'Washington', 'Hollywood'] ],
    [ 'Espagne', ['Madrid', 'Barcelone', 'Valence', 'Murcie'] ],
    [ 'Italie', ['Rome', 'Florence', 'Venise', 'Naples'] ]
];

function chercherPaysParLaVille(city) {
    for(var pays=0; pays < tabPaysVilles.length; pays++) {
        if (tabPaysVilles[pays][1].includes(city.toString())) {
            return tabPaysVilles[pays][0];
        }
    }
    return "Error";
}

function eventRetournerPaysParLaVille () {
    var res = chercherPaysParLaVille(document.getElementById('ville').value);

    if (res !== 'Error') {
        alert('Bienvenue à ' + res + ' !');
    }
}

document.getElementById('validerFormVille').addEventListener('click', eventRetournerPaysParLaVille);