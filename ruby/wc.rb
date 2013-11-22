def wc( fname, fhandle )
	lines = bytes = words = 0
	fhandle.each { |l|
		bytes += l.length
		words += l.chomp.split(/\s+/).reject { |w| w.length == 0 }.length
		lines += 1
	}
	print "%s\t%d\t%d\t%d\n" % [ fname, lines, words, bytes ]
end

if ( ARGV.length == 0 )
	wc( '', STDIN )
else
	ARGV.each { |fn| wc( fn, File.open( fn ) ) }
end
