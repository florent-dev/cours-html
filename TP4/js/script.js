/***************************** Destinations *****************************/

// Notre classe
class Destination {
    constructor(nom, image, description, prix) {
        this.nom = nom;
        this.image = image;
        this.description = description;
        this.prix = prix;
    }
}

var destinations = [
    new Destination("Espagne", "images/espagne.jpg", "Circuit plage, hôte 4*, Lorem ipsus machin truc chouette", 400),
    new Destination("Canada", "images/canada.jpg", "Circuit montagne, hôte 4*, Lorem ipsus machin truc chouette", 754),
    new Destination("Brésil", "images/brésil.jpg", "Circuit nature, hôte 4*, Lorem ipsus machin truc chouette", 639),
    new Destination("Italie", "images/italie.jpg", "Circuit antique, hôte 4*, Lorem ipsus machin truc chouette", 320),
];

for (var dIndex = 0; dIndex < destinations.length; dIndex++) {
    insertRowInDestinationsList(dIndex);
}

function insertRowInDestinationsList(dIndex) {
    var destination = destinations[dIndex];

    var row = '<div class="col-sm-6 col-md-4 mb-3" id="destination-' + dIndex + '"><div class="card">' +
    '<img src="' + destination.image + '" class="card-img-top" alt="' + destination.nom + '">' +
    '<div class="card-body"><h5 class="card-title">' + destination.nom + '</h5>' +
    '<h6 class="card-subtitle mb-2 text-muted">' + destination.prix + ' €</h6>' +
    '<p class="card-text">' + destination.description + '</p>' +
    '<a href="#" class="btn btn-sm btn-outline-info mr-1 mb-1 d-none" name="decouvrir" onclick="decouvrirDestination(' + dIndex + ')">Découvrir</a>' +
    '<a href="#" class="btn btn-sm btn-outline-info mr-1 mb-1 d-none" name="modifier" onclick="modifierDestination(' + dIndex + ')">Modifier</a>' +
    '<a href="#" class="btn btn-sm btn-outline-danger mb-1 d-none" name="supprimer" onclick="supprimerDestination(' + dIndex + ')">Supprimer</a>' +
    '</div></div>';

    $('#destinations-list div.col-sm-6:last-child').after(row);
}

/***************************** Menu *****************************/

$('header').html(
    '<nav class="navbar navbar-expand-lg navbar-light">' +
    '        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">' +
    '            <span class="navbar-toggler-icon"></span>' +
    '        </button>' +
    '        <div class="collapse navbar-collapse" id="navbarNavDropdown">' +
    '            <ul class="navbar-nav mr-auto"></ul>' +
    '            <ul class="navbar-nav float-right">' +
    '                <form class="form-inline my-2 my-lg-0 d-none" id="gestionSession">' +
    '                    <button class="btn btn-success my-2 my-sm-0" type="button" data-toggle="modal" data-target="#connexionModal">Connexion</button>' +
    '                </form>' +
    '            </ul>' +
    '        </div>' +
    '    </nav>'
);

// Notre classe
class Page {
    constructor(nom, lien, sousmenus) {
        this.nom = nom;
        this.lien = lien;
        this.sousmenus = sousmenus;
    }
}

var pages = [
    new Page("Avelia", "index.html", null),
    new Page("Menu", "#", [
        new Page("Connexion", "#", null),
        new Page("Recherche", "#", null),
        new Page("Réservations", "#", null),
        new Page("Promotion", "#", null),
    ]),
    new Page("Services", "#", [
        new Page("Information", "#", null),
        new Page("Location", "#", null),
        new Page("Assistance", "#", null),
        new Page("Promotion", "#", null),
    ]),
    new Page("Destinations", "destinations.html", null),
    new Page("Voyage virtuel : Audio", "voyage-virtuel-audio.html", null),
    new Page("Voyage virtuel : Vidéo", "voyage-virtuel-video.html", null),
    new Page("Contact", "contact.html", null),
];

pages.forEach(function (page) {
    insertPageInMenu(page);
});

function insertPageInMenu(page) {
    var div = '';

    if (null !== page.sousmenus) {

        div = '<li class="nav-item dropdown">' +
              '<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
              page.nom +
              '</a>' +
              '<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">';

        // Pour les sous-menus
        page.sousmenus.forEach(function (sousmenu) {
            div = div + '<a class="dropdown-item" href="' + sousmenu.lien + '">' + sousmenu.nom + '</a>'
        });
        
        div = div + '</div></li>';
    } else {
        div = '<li class="nav-item"><a class="nav-link" href="' + page.lien + '">' + page.nom + '</a></li>';
    }

    div = div + '</li>';

    $('.navbar-nav:first-child').append(div);
}

/********************** Pieds de page **********************/
var footerHTML = `
<div class="social-medias">
    <span>
        <a href="#" class="fa fa-twitter social-twitter"></a>
    </span>
    <span>
        <a href="#" class="fa fa-linkedin social-linkedin"></a>
    </span>
    <span>
        <a href="#" class="fa fa-facebook social-facebook"></a>
    </span>
    <span>
        <a href="#" class="fa fa-instagram social-instagram"></a>
    </span>
    <span>
        <a href="#" class="fa fa-pinterest social-pinterest"></a>
    </span>
    <span>
        <a href="#" class="fa fa-youtube social-youtube"></a>
    </span>
</div>
`;

$('footer').html(footerHTML);


/****************** Insertion de la modal de connexion ******************/
$('footer').after('<!-- Modal -->' +
    '<div class="modal fade" id="connexionModal" tabindex="-1" role="dialog" aria-labelledby="connexionModal" aria-hidden="true">' +
    '  <div class="modal-dialog" role="document">' +
    '    <div class="modal-content">' +
    '      <div class="modal-header">' +
    '        <h5 class="modal-title" id="connexionModalTitle">Connexion</h5>' +
    '        <button type="button" class="close" data-dismiss="modal" aria-label="Fermer">' +
    '          <span aria-hidden="true">&times;</span>' +
    '        </button>' +
    '      </div>' +
    '      <div class="modal-body">' +
    '        <input type="text" class="form-control mb-2" id="connexion-login" placeholder="Identifiant" />' +
    '        <input type="password" class="form-control" id="connexion-pw" placeholder="Mot de passe" />' +
    '        <p class="alert-danger mt-4 rounded p-2 d-none" id="connexionModalAlert"></p>' +
    '      </div>' +
    '      <div class="modal-footer">' +
    '        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>' +
    '        <button type="button" class="btn btn-primary" onclick="connexion()">Valider</button>' +
    '      </div>' +
    '    </div>' +
    '  </div>' +
    '</div>');

/****************** Insertion de la modal avec contenu paramètrable ******************/
$('footer').after('<!-- Modal -->' +
    '<div class="modal fade" id="globalModal" tabindex="-1" role="dialog" aria-labelledby="globalModal" aria-hidden="true">' +
    '  <div class="modal-dialog" role="document">' +
    '    <div class="modal-content">' +
    '      <div class="modal-header">' +
    '        <h5 class="modal-title ml3" id="globalModalTitle">Informations</h5>' +
    '        <button type="button" class="close" data-dismiss="modal" aria-label="Fermer">' +
    '          <span aria-hidden="true">&times;</span>' +
    '        </button>' +
    '      </div>' +
    '      <div class="modal-body" id="globalModalBody">' +
    '      </div>' +
    '      <div class="modal-footer">' +
    '        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>' +
    '      </div>' +
    '    </div>' +
    '  </div>' +
    '</div>');

/********************** Gestion des destinations **********************/

function decouvrirDestination(id) {
    var destination = destinations[id];
    $('#globalModalTitle').html("Partez pour la destination... " + destination.nom);
    $('#globalModalBody').html("<span id='ml3'><b>Description :</b> " + destination.description + "<br><b>Prix :</b> " + destination.prix + " €</span>");
    $('#globalModal').modal('toggle');

    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml3');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: true})
        .add({
            targets: '.ml3 .letter',
            opacity: [0,1],
            easing: "easeInOutQuad",
            duration: 100,
            delay: (el, i) => 150 * (i+1)
        }).add({
        targets: '.ml3',
        opacity: 0,
        duration: 200,
        easing: "easeOutExpo",
        delay: 200
    });
}

$('#ajouterDestination').on('click', function (event) {
    var formulaire = $('#editeurCreationDestination');
    var nouvelleDestination = new Destination(
        formulaire.find('input[name=destination_nom]').val(),
        formulaire.find('input[name=destination_image]').val(),
        formulaire.find('input[name=destination_offre]').val(),
        formulaire.find('input[name=destination_prix]').val(),
    );
    destinations.push(nouvelleDestination);
    insertRowInDestinationsList(destinations.length-1);
});

function modifierDestination(id) {
    var destination = destinations[id];

    var editeur = $('#editeurModificationDestination');
    editeur.find('input[name=destination_nom]').val(destination.nom);
    editeur.find('input[name=destination_image]').val(destination.image);
    editeur.find('input[name=destination_offre]').val(destination.description);
    editeur.find('input[name=destination_prix]').val(destination.prix);
    editeur.find('input[name=destination_id]').val(id);

    $('#destination-'+id).after(editeur);
    editeur.removeClass('d-none').show();
}

function validerModifierDestination() {
    var editeur = $('#editeurModificationDestination');
    var id = editeur.find('input[name=destination_id]').val();
    var destination = destinations[id];

    // Update de l'objet
    destination.nom = editeur.find('input[name=destination_nom]').val();
    destination.image = editeur.find('input[name=destination_image]').val();
    destination.description = editeur.find('input[name=destination_offre]').val();
    destination.prix = editeur.find('input[name=destination_prix]').val();

    // Update des champs de la ligne
    var row = $('div#destination-' + id);
    row.find('h5').html(destination.nom);
    row.find('img').attr('src', destination.image);
    row.find('p').html(destination.description);
    row.find('h6').html(destination.prix + ' €');

    annulerModifierDestination();
}

function annulerModifierDestination() {
    $('#editeurModificationDestination').hide();
}

function supprimerDestination(id) {
    $('#destination-' + id).hide();
}

/********************** Gestion de la session **********************/

var username = null;

// L'action se connecter
function connexion() {
    $.ajax({
        url: 'ajax/session.php',
        type: 'POST',
        dataType: 'html',
        data: {
            'login': $('#connexion-login').val(),
            'password': $('#connexion-pw').val(),
        },
        success: function (result, statut) {
            if (result !== 'ERR_CONNEXION') {
                updatePageConnecte(result);
                $('#connexionModal').modal('toggle');
            } else {
                $('#connexionModalAlert').html("Échec de la connexion").removeClass('d-none');
            }
        }
    });
}

// L'action se déconnecter
function deconnexion() {
    $.ajax({
        url: 'ajax/session.php',
        type: 'POST',
        dataType: 'html',
        data: {
            'deconnexion': true
        },
        success: function (result, statut) {
            updatePageDeconnecte();
        }
    });
}

// A chaque chargement de page, on récupère la session si elle existe
function connexionPageInitiee() {
    $.ajax({
        url: 'ajax/session.php',
        type: 'POST',
        dataType: 'html',
        data: {},
        success: function (result, statut) {
            if (result !== 'ERR_CONNEXION' && result !== '') {
                updatePageConnecte(result);
            }
            $('#gestionSession').removeClass('d-none');
        }
    });
}

function updatePageConnecte(login) {
    username = login;
    var text = username + '<button class="btn btn-info btn-deconnexion my-2 my-sm-0 ml-3" type="button" onclick="deconnexion()">Déconnexion</button>';
    $('#gestionSession').html(text);
    $('a[name=decouvrir]').removeClass('d-none');

    if (username === 'admin') {
        $('#editeurCreationDestination').removeClass('d-none');
        $('a[name=modifier]').removeClass('d-none');
        $('a[name=supprimer]').removeClass('d-none');
    }
}

function updatePageDeconnecte() {
    username = null;
    $('#gestionSession').html('<button class="btn btn-success my-2 my-sm-0" type="button" data-toggle="modal" data-target="#connexionModal">Connexion</button>');
    $('#editeurCreationDestination').addClass('d-none');
    $('a[name=decouvrir]').addClass('d-none');
    $('a[name=modifier]').addClass('d-none');
    $('a[name=supprimer]').addClass('d-none');
}

connexionPageInitiee();