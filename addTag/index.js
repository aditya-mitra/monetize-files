const fs = require('fs');

function addTag(files, wallet){
	if (files.length===0)
		return;

	for(let file of files){
		console.log(`\n\nWriting in file : ${file}`);

		const stream = fs.readFileSync(file, { encoding: 'utf-8'});

		const modifiedStream = addMetaTag(stream, wallet);

		if (modifiedStream) {
			fs.writeFileSync(file, modifiedStream, { encoding: 'utf-8'});
			console.log('...done');
		}
	}
}

function addMetaTag(stream, wallet){
	const tag1 = `meta name="monetization"`;
	const tag2 = `meta name='monetization'`;
	const tag = `<head><meta name="monetization" content="${wallet}"></head>`;

	if (stream.includes(tag1) || stream.includes(tag2)) {
		console.log('Wallet already present!');
		return null;
	}

	const modifiedStream = tag+"\n"+stream;
	return modifiedStream;

}

module.exports = addTag;