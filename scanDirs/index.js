const getSubs = require('./getSubs');

let dirs = ['./'];
let mfiles = [];

function scanDirs(filetype, excludeDirs=[]){
	excludeDirs.push('./node_modules/');
	while(dirs.length>0){
		const scanDir = dirs.shift();
		let { subdirs, subfiles } = getSubs(scanDir, filetype);

		dirs = dirs.concat(subdirs);

		for(let exdir of excludeDirs){
			for(let dir of dirs){
				if (dir.includes(exdir)) {
					const index = dirs.indexOf(dir);
					dirs.splice(index,1);
				}
			}
		}

		mfiles = mfiles.concat(subfiles);
	}

	return mfiles;
}

module.exports = scanDirs;