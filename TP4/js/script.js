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
    '<a href="#" class="btn btn-primary">Découvrir</a>' +
    '<a href="#" class="btn btn-primary" onclick="modifierDestination(' + dIndex + ')">Modifier</a>' +
    '<a href="#" class="btn btn-primary" onclick="supprimerDestination(' + dIndex + ')">Supprimer</a>' +
    '</div></div>';

    $('#destinations-list div.col-sm-6:last-child').after(row);
}

/***************************** Menu *****************************/

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
    '<div class="modal fade" id="connexionModal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">' +
    '  <div class="modal-dialog" role="document">' +
    '    <div class="modal-content">' +
    '      <div class="modal-header">' +
    '        <h5 class="modal-title" id="modalLabel">Connexion</h5>' +
    '        <button type="button" class="close" data-dismiss="modal" aria-label="Fermer">' +
    '          <span aria-hidden="true">&times;</span>' +
    '        </button>' +
    '      </div>' +
    '      <div class="modal-body">' +
    '        <input type="text" class="btn" id="connexion-login" placeholder="Identifiant" />' +
    '        <input type="password" class="btn" id="connexion-pw" placeholder="Mot de passe" />' +
    '      </div>' +
    '      <div class="modal-footer">' +
    '        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>' +
    '        <button type="button" class="btn btn-primary" onclick="connexion()">Valider</button>' +
    '      </div>' +
    '    </div>' +
    '  </div>' +
    '</div>');

/********************** Gestion des destinations **********************/

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

function supprimerDestination(id) {
    $('#destination-' + id).hide();
}

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

/********************** Gestion de la session **********************/
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
            }
        }
    });
}

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

function updatePageConnecte(username) {
    $('#gestionSession').html(username);
    $('#editeurCreationDestination').removeClass('d-none');
}

connexionPageInitiee();