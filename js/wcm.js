const wc = require('./lib/wc.js');
const computecluster = require('compute-cluster');

var cc = new computecluster({module: './wcw.js'});

var args = process.argv;
args.shift();
args.shift();

if ( args.length == 0 ) {
	wc( "", process.stdin );
} else {
	var toRun = args.length;
	args.forEach(function(val, index, array) {
		cc.enqueue({name:val}, function(err, r) {
			if (--toRun === 0) cc.exit();
		});
	});
}
