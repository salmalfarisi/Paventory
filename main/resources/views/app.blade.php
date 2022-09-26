<!DOCTYPE html>
<html>
	<head>
		<title>Paventory</title>
		<link rel="apple-touch-icon" sizes="57x57" href="{{ asset('icon/apple-icon-57x57.png') }}">
		<link rel="apple-touch-icon" sizes="60x60" href="{{ asset('icon/apple-icon-60x60.png') }}">
		<link rel="apple-touch-icon" sizes="72x72" href="{{ asset('icon/apple-icon-72x72.png') }}">
		<link rel="apple-touch-icon" sizes="76x76" href="{{ asset('icon/apple-icon-76x76.png') }}">
		<link rel="apple-touch-icon" sizes="114x114" href="{{ asset('icon/apple-icon-114x114.png') }}">
		<link rel="apple-touch-icon" sizes="120x120" href="{{ asset('icon/apple-icon-120x120.png') }}">
		<link rel="apple-touch-icon" sizes="144x144" href="{{ asset('icon/apple-icon-144x144.png') }}">
		<link rel="apple-touch-icon" sizes="152x152" href="{{ asset('icon/apple-icon-152x152.png') }}">
		<link rel="apple-touch-icon" sizes="180x180" href="{{ asset('icon/apple-icon-180x180.png') }}">
		<link rel="icon" type="image/png" sizes="192x192"  href="{{ asset('icon/android-icon-192x192.png') }}">
		<link rel="icon" type="image/png" sizes="32x32" href="{{ asset('icon/favicon-32x32.png') }}">
		<link rel="icon" type="image/png" sizes="96x96" href="{{ asset('icon/favicon-96x96.png') }}">
		<link rel="icon" type="image/png" sizes="16x16" href="{{ asset('icon/favicon-16x16.png') }}">
		<link rel="manifest" href="{{ asset('icon/manifest.json') }}">
		<meta name="msapplication-TileColor" content="#ffffff">
		<meta name="msapplication-TileImage" content="{{ asset('icon/ms-icon-144x144.png') }}">
		<meta name="theme-color" content="#ffffff">
		<link rel="stylesheet" href="{{ asset('css/app.css') }}">
		<script src="https://kit.fontawesome.com/620b950742.js" crossorigin="anonymous"></script>
	</head>
	<body>
		<div id="app"></div>
		<script src="{{ mix('js/app.js') }}" type="text/javascript"></script>
		<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
		<script>
		$(".custom-file-input").on("change", function() {
		  var fileName = $(this).val().split("\\").pop();
		  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
		});
		</script>
	</body>
</html>