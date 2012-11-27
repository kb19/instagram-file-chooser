<!--
    This page is directly rendered by PHP. It's easier here to just use
    file_get_contents (vs rendering the whole page via mustache).
-->

<?php
    echo file_get_contents('templates/header.html');
?>

<div class="container">

    <!-- Main hero unit for a primary marketing message or call to action -->
    <div class="hero-unit">
        <h2>Instagram Image Chooser</h2>
        <p>This is a template app for allowing users to select an instagram photo to upload.</p>
        <p><a class="instagram-signin btn btn-primary btn-large">Sign in With Instagram</a></p>
    </div>

    <!-- Example row of columns -->
    <div class="row">
        <div class="span4 offset4">
            <h2>SELECTED IMAGE</h2>
            <img class="instagram-img" src="http://placehold.it/370x370"/>
       </div>
    </div>

<?php
    echo file_get_contents('templates/footer.html');
?>

