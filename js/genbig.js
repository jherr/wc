var numbers = [];
for( var i = 1; i < 1000000; i++ ) {
	numbers.push( i );
	if ( i % 10 == 0 ) {
		console.log( numbers.join(' ') );
		numbers = [];
	}
}