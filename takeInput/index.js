const yargs = require('yargs');

function takeInput(){

	const argv = yargs
					.option('wallet', {
						alias: 'w',
						description: 'payment pointer to your wallet',
						type: 'string'
					})
					.option('exclude', {
						alias: 'e',
						description: 'directories to exclude (separated by commas)',
						type: 'string'
					})
					.option('filetype', {
						alias: 'f',
						description: 'filetype where the meta tag should be added',
						type: 'string'
					})
					.alias('version','v')
					.alias('help','h')
					.argv;

	if (!('filetype' in argv)) {
		argv.filetype='html';
	}
	if ('wallet' in argv)
		return argv;
	else{
		console.log('Wallet pointer not found!\nType -h for more info')
		return null;
	}

}

module.exports = takeInput;