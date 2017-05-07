/* Service Worker */
	var cacheName = 'v1.0.0';
	var cacheFiles = [
		'./index.html',
		'./manifest.json',
		'./code/theme.css',
		'./code/myreactlib.js',
		'./code/webapp.js',
		'./content/images/logo.ico',
		'./content/files/resume.pdf'
	];
/* Install */
	self.addEventListener('install', function(event) {
		console.log("Installed");

		event.waitUntil(
			caches.open(cacheName).then(function(cache) {
				console.log("Caching cacheFiles");
				return cache.addAll(cacheFiles);
			})
		);
	});
/* Activate */
	self.addEventListener('activate', function(event) {
		console.log("Activated");

	});
/* Fetch */
	self.addEventListener('fetch', function(event) {
		console.log("Fetching", event.request.url);
	});

/* END */