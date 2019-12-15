var URL = document.URL;
var splittedURL = URL.split('/');
var page = (splittedURL[splittedURL.length-1]).slice(0, -5);

var navHTML = `
<nav>
    <a href="index.html">
        <div class="menu-item ${ (page === 'index') ? 'active' : '' }">
            Avelia
        </div>
    </a>

    <div class="menu-item ${ (page === 'menu') ? 'active' : '' }">
        Menu
        <ul>
            <li><a href="#">Connexion</a></li>
            <li><a href="#">Recherche</a></li>
            <li><a href="#">Réservations</a></li>
            <li><a href="#">Promotion</a></li>
        </ul>
    </div>

    <div class="menu-item ${ (page === 'services') ? 'active' : '' }">
        Services
        <ul>
            <li><a href="#">Information</a></li>
            <li><a href="#">Location</a></li>
            <li><a href="#">Assistance</a></li>
            <li><a href="#">Promotion</a></li>
        </ul>
    </div>
 
    <a href="destinations.html">
        <div class="menu-item ${ (page === 'destinations') ? 'active' : '' }">Destinations</div>
    </a>
 
    <a href="voyage-virtuel-audio.html">
        <div class="menu-item ${ (page === 'voyage-virtuel-audio') ? 'active' : '' }">Voyage virtuel : Audio</div>
    </a>
 
    <a href="voyage-virtuel-video.html">
        <div class="menu-item ${ (page === 'voyage-virtuel-video') ? 'active' : '' }">Voyage virtuel : Vidéo</div>
    </a>

    <a href="contact.html">
        <div class="menu-item ${ (page === 'contact') ? 'active' : '' }">
            Contact
        </div>
    </a>

</nav>
`;

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

document.getElementsByTagName('header').item(0).innerHTML = navHTML;
document.getElementsByTagName('footer').item(0).innerHTML = footerHTML;
