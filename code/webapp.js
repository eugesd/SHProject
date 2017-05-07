/* Web App */

/* Constants */
	const myroot = document.getElementById('root');
	const e = React.createElement;

/* Functions */
	// Service Worker
		function checkServiceWorker() {
			let path = './sw.js';
			let msgRegistered = "Service Worker Registered";
			let msgFailed = "Service Worker Failed to Register";

			if('serviceWorker' in navigator) {
				navigator.serviceWorker
				.register(path, {scope: './'})
				.then(function(registration){
					console.log(msgRegistered, registration);
				})
				.catch(function(err){
					console.log(msgFailed, err);
				});
			}
		}
		
/* App */
	function App() {
		checkServiceWorker();
	
		//let app = e(PersonalApp, null);
		ReactDOM.render( app, myroot );
	}
/* Run */
	$(document).ready( function() {
		App();
	});
/* END */