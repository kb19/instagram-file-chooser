<?php

require_once 'lib/instagram.php';

$client_id = 'da3f06fe4a264c8e9076eaf157798950';
$client_secret = 'd8e6c9dfee1f4225a87030e0d0b5fb05';
$redirect_uri = 'http://www.instagramuploader.dev/redirect.php';

$uploader = new InstagramUploader($client_id, $client_secret, $redirect_uri, $_GET['code']);
$uploader->init();

