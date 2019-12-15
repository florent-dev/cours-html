// Refonte des éléments nécessaires en JQuery

function eventVisiterVille() {
    var ville = $('#villeDestination').val();
    var alertDiv = $('#alert');
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

    alertDiv.html(alertMessage);
}

$('#validerFormDestination').click(eventVisiterVille);