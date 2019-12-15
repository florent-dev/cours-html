var URL = document.URL;
var splittedURL = URL.split('/');
var page = (splittedURL[splittedURL.length-1]).slice(0, -5);

var navHTML = `
<nav>
    <ul>
        <li class="menu-item ${ (page === 'index') ? 'active' : '' }">
            <a href="index.html">Avelia</a>
        </li>
    
        <li class="menu-item ${ (page === 'menu') ? 'active' : '' }">
            <a href="#">Menu</a>
            <ul>
                <li><a href="#">Connexion</a></li>
                <li><a href="#">Recherche</a></li>
                <li><a href="#">Réservations</a></li>
                <li><a href="#">Promotion</a></li>
            </ul>
        </li>
    
        <li class="menu-item ${ (page === 'services') ? 'active' : '' }">
            <a href="#">Services</a>
            <ul>
                <li><a href="#">Information</a></li>
                <li><a href="#">Location</a></li>
                <li><a href="#">Assistance</a></li>
                <li><a href="#">Promotion</a></li>
            </ul>
        </li>
        
        <li class="menu-item ${ (page === 'destinations') ? 'active' : '' }">
            <a href="destinations.html">Destinations</a>
        </li>
     
        
        <li class="menu-item ${ (page === 'voyage-virtuel-audio') ? 'active' : '' }">
            <a href="voyage-virtuel-audio.html">Voyage virtuel : Audio</a>
        </li>
     
        
        <li class="menu-item ${ (page === 'voyage-virtuel-video') ? 'active' : '' }">
            <a href="voyage-virtuel-video.html">Voyage virtuel : Vidéo</a>
        </li>
    
        <li class="menu-item ${ (page === 'contact') ? 'active' : '' }">
            <a href="contact.html">Contact</a>
        </li>
        
    </ul>

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
