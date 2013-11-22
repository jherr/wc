const fs = require('fs');
const wc = require('./lib/wc.js');

var args = process.argv;
args.shift();
args.shift();

if ( args.length == 0 ) {
	wc( "", process.stdin );
} else {
	args.forEach(function(val, index, array) {
		wc( val, fs.createReadStream( val ), function() {} );
	});
}
