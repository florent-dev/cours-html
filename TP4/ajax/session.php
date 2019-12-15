<?php

$login_normal = "user";
$login_admin = "admin";
$password = "ajax";

// On regarde si l'utilisateur est déjà connecté
session_start();
if ( isset($_SESSION['user']) ) {
    echo $_SESSION['user'];
    return;
}

// On obtient les données du formulaire de connexion
if ( isset($_POST['login']) && isset($_POST['password']) ) {
    if($_POST['login'] == $login_normal && $_POST['password'] == $password) {
        session_start();
        $_SESSION['user'] = $login_normal;
        return $_SESSION['user'];
    } else if ($_POST['login'] == $login_admin && $_POST['password'] == $password) {
        session_start();
        $_SESSION['user'] = $login_admin;
        return $_SESSION['user'];
	} else {
        echo 'ERR_CONNEXION';
    }
}