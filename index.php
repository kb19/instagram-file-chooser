<html>
<head>
	<script>
		$('#instagram-signin').on('click', function(){
			window.open('https://api.instagram.com/oauth/authorize/?client_id=da3f06fe4a264c8e9076eaf157798950&redirect_uri=http://www.instagramuploader.dev/redirect.php&response_type=code');
		});
	</script>
</head>
<body>
	<button id="instagram-signin">SIGN IN WITH INSTAGRAM</button>
</body>
</html>


