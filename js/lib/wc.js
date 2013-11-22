var util = require('util');

module.exports = function ( fname, fhandle, completed ) {
	var lines = 0;
	var words = 0;
	var bytes = 0;
	var lastws = false;
	fhandle.on('data',function(buf) {
		buf.toString().split('').forEach(function(val, index, array) {
			if ( val == "\n" ) lines += 1;
			if ( val == " " || val == "\t" ) {
				if ( lastws == false ) words += 1;
				lastws = true;
			} else lastws = false;
			bytes += 1;
		} );
	} );
	fhandle.on('end',function() {
		console.log( util.format( "%s\t%d\t%d\t%d", fname, lines, words, bytes ) );
		completed();
	});
}
