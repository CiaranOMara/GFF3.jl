var documenterSearchIndex = {"docs":
[{"location":"#GFF3.jl-1","page":"Home","title":"GFF3.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"(Image: Project Status: WIP – Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.) (Image: Latest Release) (Image: MIT license) (Image: Stable documentation) (Image: Latest documentation) (Image: Join the chat at https://gitter.im/BioJulia/GFF3.jl)","category":"page"},{"location":"#","page":"Home","title":"Home","text":"This project follows the semver pro forma and uses the git-flow branching model.","category":"page"},{"location":"#Description-1","page":"Home","title":"Description","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"GFF3 provides I/O and utilities for the GFF3 file format.","category":"page"},{"location":"#Installation-1","page":"Home","title":"Installation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"GFF3 is made available to install through BioJulia's package registry. By default, Julia's package manager only uses the \"General\" package registry. Your Julia configuration needs to include the BioJulia registry to be able to install the latest version of GFF3.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"To add the BioJulia registry from the Julia REPL, press ] to enter pkg mode, then enter the following command:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"registry add https://github.com/BioJulia/BioJuliaRegistry.git","category":"page"},{"location":"#","page":"Home","title":"Home","text":"After adding the registry to your configuration, you can install GFF3 while in pkg mode with the following:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"add GFF3","category":"page"},{"location":"#","page":"Home","title":"Home","text":"If you are interested in the cutting edge of the development, please check out the develop branch to try new features before release.","category":"page"},{"location":"#Testing-1","page":"Home","title":"Testing","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"GFF3 is tested against Julia 1.X on Linux, OS X, and Windows.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Latest build status:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"(Image: Unit tests) (Image: Documentation) (Image: codecov)","category":"page"},{"location":"#Contributing-1","page":"Home","title":"Contributing","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"We appreciate contributions from users including reporting bugs, fixing issues, improving performance and adding new features.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Take a look at the contributing files detailed contributor and maintainer guidelines, and code of conduct.","category":"page"},{"location":"#Financial-contributions-1","page":"Home","title":"Financial contributions","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"We also welcome financial contributions in full transparency on our open collective. Anyone can file an expense. If the expense makes sense for the development the core contributors and the person who filed the expense will be reimbursed.","category":"page"},{"location":"#Backers-and-Sponsors-1","page":"Home","title":"Backers & Sponsors","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Thank you to all our backers and sponsors!","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Love our work and community? Become a backer.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"(Image: backers)","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Does your company use BioJulia? Help keep BioJulia feature rich and healthy by sponsoring the project. Your logo will show up here with a link to your website.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"(Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: ) (Image: )","category":"page"},{"location":"#Questions?-1","page":"Home","title":"Questions?","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"If you have a question about contributing or using BioJulia software, come on over and chat to us on Gitter, or you can try the Bio category of the Julia discourse site.","category":"page"},{"location":"man/api/#API-Reference-1","page":"API Reference","title":"API Reference","text":"","category":"section"},{"location":"man/api/#Public-1","page":"API Reference","title":"Public","text":"","category":"section"},{"location":"man/api/#","page":"API Reference","title":"API Reference","text":"Modules = [GFF3]\nPrivate = false","category":"page"},{"location":"man/api/#Internal-1","page":"API Reference","title":"Internal","text":"","category":"section"},{"location":"man/api/#","page":"API Reference","title":"API Reference","text":"Modules = [GFF3]\nPublic = false","category":"page"},{"location":"man/api/#GFF3.Reader-Tuple{IO}","page":"API Reference","title":"GFF3.Reader","text":"GFF3.Reader(input::IO;\n            index=nothing,\n            save_directives::Bool=false,\n            skip_features::Bool=false,\n            skip_directives::Bool=true,\n            skip_comments::Bool=true)\n\nGFF3.Reader(input::AbstractString;\n            index=:auto,\n            save_directives::Bool=false,\n            skip_features::Bool=false,\n            skip_directives::Bool=true,\n            skip_comments::Bool=true)\n\nCreate a reader for data in GFF3 format.\n\nThe first argument specifies the data source. When it is a filepath that ends with .bgz, it is considered to be block compression file format (BGZF) and the function will try to find a tabix index file (<filename>.tbi) and read it if any. See http://www.htslib.org/doc/tabix.html for bgzip and tabix tools.\n\nArguments\n\ninput: data source (IO object or filepath)\nindex: path to a tabix file\nsave_directives: flag to save directive records (which can be accessed with GFF3.directives)\nskip_features: flag to skip feature records\nskip_directives: flag to skip directive records\nskip_comments:  flag to skip comment records\n\n\n\n\n\n","category":"method"},{"location":"man/api/#GFF3.Record-Tuple{AbstractString}","page":"API Reference","title":"GFF3.Record","text":"GFF3.Record(str::AbstractString)\n\nCreate a GFF3 record object from str. This function verifies and indexes fields for accessors.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#GFF3.Record-Tuple{Array{UInt8,1}}","page":"API Reference","title":"GFF3.Record","text":"GFF3.Record(data::Vector{UInt8})\n\nCreate a GFF3 record object from data. This function verifies and indexes fields for accessors. Note that the ownership of data is transferred to a new record object.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#GFF3.Record-Tuple{}","page":"API Reference","title":"GFF3.Record","text":"GFF3.Record()\n\nCreate an unfilled GFF3 record.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#GFF3.Writer","page":"API Reference","title":"GFF3.Writer","text":"GFF3.Writer(output::IO)\n\nCreate a data writer of the GFF3 file format.\n\nArguments:\n\noutput: data sink\n\n\n\n\n\n","category":"type"},{"location":"man/api/#GFF3.attributes-Tuple{GFF3.Record,String}","page":"API Reference","title":"GFF3.attributes","text":"attributes(record::Record, key::String)::Vector{String}\n\nGet the attributes of record with key.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#GFF3.attributes-Tuple{GFF3.Record}","page":"API Reference","title":"GFF3.attributes","text":"attributes(record::Record)::Vector{Pair{String,Vector{String}}}\n\nGet the attributes of record.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#GFF3.content-Tuple{GFF3.Record}","page":"API Reference","title":"GFF3.content","text":"content(record::Record)::String\n\nGet the content of record. Leading '#' letters are removed.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#GFF3.directives-Tuple{GFF3.Reader}","page":"API Reference","title":"GFF3.directives","text":"Return all directives that preceded the last GFF entry parsed as an array of strings.\n\nDirectives at the end of the file can be accessed by calling close(reader) and then directives(reader).\n\n\n\n\n\n","category":"method"},{"location":"man/api/#GFF3.featuretype-Tuple{GFF3.Record}","page":"API Reference","title":"GFF3.featuretype","text":"featuretype(record::Record)::String\n\nGet the type of record.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#GFF3.getfasta-Tuple{GFF3.Reader}","page":"API Reference","title":"GFF3.getfasta","text":"Return a FASTA.Reader initialized to parse trailing FASTA data.\n\nThrows an exception if there is no trailing FASTA, which can be checked using hasfasta.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#GFF3.hasfasta-Tuple{GFF3.Reader}","page":"API Reference","title":"GFF3.hasfasta","text":"Return true if the GFF3 stream is at its end and there is trailing FASTA data.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#GFF3.iscomment-Tuple{GFF3.Record}","page":"API Reference","title":"GFF3.iscomment","text":"iscomment(record::Record)::Bool\n\nTest if record is a comment record.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#GFF3.isdirective-Tuple{GFF3.Record}","page":"API Reference","title":"GFF3.isdirective","text":"isdirective(record::Record)::Bool\n\nTest if record is a directive record.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#GFF3.isfeature-Tuple{GFF3.Record}","page":"API Reference","title":"GFF3.isfeature","text":"isfeature(record::Record)::Bool\n\nTest if record is a feature record.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#GFF3.phase-Tuple{GFF3.Record}","page":"API Reference","title":"GFF3.phase","text":"phase(record::Record)::Int\n\nGet the phase of record.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#GFF3.score-Tuple{GFF3.Record}","page":"API Reference","title":"GFF3.score","text":"score(record::Record)::Float64\n\nGet the score of record.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#GFF3.seqend-Tuple{GFF3.Record}","page":"API Reference","title":"GFF3.seqend","text":"seqend(record::Record)::Int\n\nGet the end coordinate of record.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#GFF3.seqid-Tuple{GFF3.Record}","page":"API Reference","title":"GFF3.seqid","text":"seqid(record::Record)::String\n\nGet the sequence ID of record.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#GFF3.seqstart-Tuple{GFF3.Record}","page":"API Reference","title":"GFF3.seqstart","text":"seqstart(record::Record)::Int\n\nGet the start coordinate of record.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#GFF3.source-Tuple{GFF3.Record}","page":"API Reference","title":"GFF3.source","text":"source(record::Record)::String\n\nGet the source of record.\n\n\n\n\n\n","category":"method"},{"location":"man/api/#GFF3.strand-Tuple{GFF3.Record}","page":"API Reference","title":"GFF3.strand","text":"strand(record::Record)::GenomicFeatures.Strand\n\nGet the strand of record.\n\n\n\n\n\n","category":"method"},{"location":"man/gff3/#GFF3-1","page":"GFF3","title":"GFF3","text":"","category":"section"},{"location":"man/gff3/#","page":"GFF3","title":"GFF3","text":"GFF3 is a text-based file format for representing genomic annotations. The major difference from BED is that GFF3 is more structured and can include sequences in the FASTA file format.","category":"page"},{"location":"man/gff3/#","page":"GFF3","title":"GFF3","text":"I/O tools for GFF3 are provided by the GFF3 module, which exports following three types:","category":"page"},{"location":"man/gff3/#","page":"GFF3","title":"GFF3","text":"Reader type: GFF3.Reader\nWriter type: GFF3.Writer\nElement type: GFF3.Record","category":"page"},{"location":"man/gff3/#","page":"GFF3","title":"GFF3","text":"A GFF3 file may contain directives and/or comments in addition to genomic features. These lines are skipped by default but you can control the behavior by passing keyword arguments to GFF3.Reader. See the docstring for details.","category":"page"},{"location":"man/gff3/#Examples-1","page":"GFF3","title":"Examples","text":"","category":"section"},{"location":"man/gff3/#","page":"GFF3","title":"GFF3","text":"Here is a common workflow to iterate over all records in a GFF3 file:","category":"page"},{"location":"man/gff3/#","page":"GFF3","title":"GFF3","text":"# Import the GFF3 module.\nusing GFF3\n\n# Open a GFF3 file.\nreader = open(GFF3.Reader, \"data.gff3\")\n\n# Iterate over records.\nfor record in reader\n    # Do something on record (see Accessors section).\n    seqid = GFF3.seqid(record)\n    # ...\nend\n\n# Finally, close the reader\nclose(reader)","category":"page"},{"location":"man/gff3/#","page":"GFF3","title":"GFF3","text":"If you are interested in directives (which starts with '#') in addition to genomic features, you need to pass skip_directives=false when initializing a GFF3 constructor:","category":"page"},{"location":"man/gff3/#","page":"GFF3","title":"GFF3","text":"# Set skip_directives to true (this is set to false by default).\nreader = GFF3.Reader(open(\"data.gff3\"), skip_directives=false)\nfor record in record\n    # Branch by record type.\n    if GFF3.isfeature(record)\n        # ...\n    elseif GFF3.isdirective(record)\n        # ...\n    else\n        # This never happens.\n        assert(false)\n    end\nend\nclose(reader)","category":"page"},{"location":"man/gff3/#","page":"GFF3","title":"GFF3","text":"GFF3.jl supports tabix to retrieve records overlapping with a specific interval. First you need to create a block compression file from a GFF3 file using bgzip and then index it using tabix.","category":"page"},{"location":"man/gff3/#","page":"GFF3","title":"GFF3","text":"cat data.gff3 | grep -v \"^#\" | sort -k1,1 -k4,4n | bgzip >data.gff3.bgz\ntabix data.gff3.bgz  # this creates data.gff3.bgz.tbi","category":"page"},{"location":"man/gff3/#","page":"GFF3","title":"GFF3","text":"Then you can read the block compression file as follows:","category":"page"},{"location":"man/gff3/#","page":"GFF3","title":"GFF3","text":"# Read the block compression gzip file.\nreader = GFF3.Reader(\"data.gff3.bgz\")\nfor record in eachoverlap(reader, Interval(\"chr1\", 250_000, 300_000))\n    # Each record overlap the query interval.\n    # ...\nend","category":"page"}]
}
