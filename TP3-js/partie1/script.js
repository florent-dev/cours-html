function lancerJeu() {
    var nbAleatoire = Math.floor(Math.random() * 100) + 1;
    var nbEssais = 0;
    var reponse = 0;
    var indication = '';

    while (nbAleatoire !== reponse && nbEssais < 3) {
        reponse = window.prompt("Un nombre aléatoire entre 1 et 100 a été généré. Devinez-le ! " + indication, "Saisissez votre réponse");
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

function formatString(str) {
    str = str.toLowerCase();
    if (str.length > 0) {
        return str[0].toUpperCase() + str.substring(1);
    } else {
        return str;
    }
}

function chercherPaysParLaVille(city) {
    for(var pays=0; pays < tabPaysVilles.length; pays++) {
        if (tabPaysVilles[pays][1].includes(formatString(city.toString()))) {
            return tabPaysVilles[pays][0];
        }
    }
    return "Error";
}

function eventRetournerPaysParLaVille () {
    var res = chercherPaysParLaVille(document.getElementById('ville').value);

    if (res !== 'Error') {
        alert('Bienvenue à ' + res + ' !');
    } else {
        alert('La ville est introuvable dans notre catalogue, essayez avec Paris ou Madrid par exemple');
    }
}

document.getElementById('validerFormVille').addEventListener('click', eventRetournerPaysParLaVille);