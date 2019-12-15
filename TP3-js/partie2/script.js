tabPaysVilles = [
    [ 'France', ['Paris', 'Marseille', 'Lyon', 'Bordeaux'] ],
    [ 'USA', ['New York', 'Los Angeles', 'Washington', 'Hollywood'] ],
    [ 'Espagne', ['Madrid', 'Barcelone', 'Valence', 'Murcie'] ],
    [ 'Italie', ['Rome', 'Florence', 'Venise', 'Naples'] ]
];

listeVillesVisitees = [];

function chercherPaysParLaVille(city) {
    for(var pays=0; pays < tabPaysVilles.length; pays++) {
        if (tabPaysVilles[pays][1].includes(city.toString())) {
            return tabPaysVilles[pays][0];
        }
    }
    return "Error";
}

function villesAVisiter() {
    var html = '';
    for(var pays=0; pays < tabPaysVilles.length; pays++) {
        for (var ville=0; ville < tabPaysVilles[pays][1].length; ville++) {
            if (!listeVillesVisitees.includes(tabPaysVilles[pays][1][ville])) {
                html = html + '<li>' + tabPaysVilles[pays][1][ville] + '</li>';
            }
        }
    }
    return html;
}

function paysVisitesToHtml() {
    if (listeVillesVisitees.length === 0) {
        return '<i>Aucune ville pour le moment';
    }

    var html = listeVillesVisitees[0];

    for (var country = 1; country < listeVillesVisitees.length; country++) {
        html = html + ', ' + listeVillesVisitees[country];
    }

    return html;
}

function eventVisiterVille() {
    var ville = document.getElementById('villeDestination').value;
    var alertDiv = document.getElementById('alert');
    var alertMessage = '';

    if (!listeVillesVisitees.includes(ville)) {
        var pays = chercherPaysParLaVille(ville);

        if (pays === 'Error') {
            alertMessage = 'La ville ne peut être visitée, choisissez l\'une des villes proposées.';
        } else {
            listeVillesVisitees.push(ville);
            alertMessage = alertMessage + 'Bienvenue à/en ' + pays + ' !';
        }
    } else {
         alertMessage = 'Cette ville a déjà été visitée.';
    }

    alertMessage = alertMessage + '<hr>Vous pouvez également visiter les pays suivants : ' + villesAVisiter() +
    '<hr><b>Vous avez visité : ' + paysVisitesToHtml() + '</b>';

    alertDiv.innerHTML = alertMessage;
}

document.getElementById('validerFormDestination').addEventListener('click', eventVisiterVille);