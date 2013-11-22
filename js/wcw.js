const wc = require('./lib/wc.js');
const fs = require('fs');

process.on('message', function(m) {
	wc( m.name, fs.createReadStream( m.name ), function() {
		process.send('complete');
	} );
});
