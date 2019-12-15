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
    insertRowInDestinationsTable(dIndex);
}

function insertRowInDestinationsTable(dIndex) {
    var destination = destinations[dIndex];
    var row = '<tr id="destination-' + dIndex + '">' +
    '<td>' + destination.nom + '</td>' +
    '<td><img src="' + destination.image + '"  alt="' + destination.nom + '"/></td>' +
    '<td><summary>' + destination.description + '</summary></td>' +
    '<td>' + destination.prix + ' € <input type="button" value="découvrir" /></td>' +
    '<td>' +
        '<input onclick="modifierDestination(' + dIndex + ')" type="button" value="Modifier" />' +
        '<input onclick="supprimerDestination(' + dIndex + ')" type="button" value="Supprimer" />' +
    '</td>' +
    '</tr>';

    $('#destinations tr:last-child').after(row);
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
    var div = '<li class="menu-item"><a href="' + page.lien + '">' + page.nom + '</a>';
    
    if (null !== page.sousmenus) {
        div = div + '<ul>';
        
        // Pour les sous-menus
        page.sousmenus.forEach(function (sousmenu) {
            div = div + '<li><a href="' + sousmenu.lien + '">' + sousmenu.nom + '</a></li>'
        });
        
        div = div + '</ul>';
    }

    div = div + '</li>';

    $('nav').append(div);
}

/********************** Gestion des destinations **********************/

$('#ajouterDestination').on('click', function (event) {
    var formulaire = $('#formulaireNouvelleDestination');
    var nouvelleDestination = new Destination(
        formulaire.find('input[name=destination_nom]').val(),
        formulaire.find('input[name=destination_image]').val(),
        formulaire.find('input[name=destination_offre]').val(),
        formulaire.find('input[name=destination_prix]').val(),
    );
    destinations.push(nouvelleDestination);
    insertRowInDestinationsTable(destinations.length-1);
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
    editeur.show();
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
    var row = $('tr#destination-' + id);
    row.find('td').eq(0).html(destination.nom);
    row.find('td').eq(1).find('img').attr('src', destination.image);
    row.find('td').eq(2).html(destination.description);
    row.find('td').eq(3).html(destination.prix);

    annulerModifierDestination();
}

function annulerModifierDestination() {
    $('#editeurModificationDestination').hide();
}