<?php

require_once 'lib/instagram.php';

$client_id = 'GET VALUE FROM INSTAGRAM API';
$client_secret = 'GET VALUE FROM INSTAGRAM API';
$redirect_uri = 'GET VALUE FROM INSTAGRAM API';

$uploader = new InstagramUploader($client_id, $client_secret, $redirect_uri, $_GET['code']);
$uploader->init();

