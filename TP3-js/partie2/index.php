<!DOCTYPE html>

<html>

<head>
    <title>JS</title>
    <script rel="script" type="text/javascript" src="node_modules/jquery/dist/jquery.js"></script>
</head>

<body>

<h2>Ajout avec JS</h2>

<form>
    <label for="ville">Ville à visiter : </label> <input type="text" name="villeDestination" id="villeDestination" placeholder="Nom de la ville" />
    <input type="button" value="Valider la destination" id="validerFormDestination" />
</form>

<h2>Ajout avec JQuery</h2>

<form>
    <label for="ville">Ville à visiter : </label> <input type="text" name="villeDestination" id="villeDestination-JQuery" placeholder="Nom de la ville" />
    <input type="button" value="Valider la destination" id="validerFormDestination-JQuery" />
</form>

<br>
<hr>

<div id="alert"></div>

<script rel="script" type="text/javascript" src="script.js"></script>
<script rel="script" type="text/javascript" src="script-jquery.js"></script>
</body>

</html>