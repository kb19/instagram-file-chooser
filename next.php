<?php

include 'lib/instagram.php';

$url = $_GET['url'];
InstagramUploader::nextPage($url);
