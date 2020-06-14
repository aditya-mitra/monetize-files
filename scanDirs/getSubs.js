const fs = require('fs');


function getSubs(path, filetype){
	let subdirs=[], subfiles=[];
	
	const subs = fs.readdirSync(path, {withFileTypes:true});

	for(let sub of subs){
		if (sub.isDirectory())
			subdirs.push(path+sub.name+'/');
		else if(sub.name.split('.')[1]===filetype)
			subfiles.push(path+sub.name)
	}

	return { subdirs, subfiles };
}

module.exports = getSubs;