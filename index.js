/**
 * Node Cli Handle Error.
 */
const sym = require('log-symbols');
const chalk = require('chalk');
const red = chalk.bold.red;
const yellow = chalk.bold.yellow;

/**
 * @param {String} heading
 * @param {Error} err
 * @param {Boolean} displayError
 * @param {Boolean} exit
 */
module.exports = (heading = `ERROR: `, err, displayError = true, exit = true) => {
	if (err) {
		console.log();
		if (displayError) {
			console.log(`${sym.error} ${red(heading)}`);
			console.log(`${sym.error} ${red(`ERROR →`)} ${err.name}`);
			console.log(`${sym.info} ${red(`REASON →`)} ${err.message}`);
			console.log(`${sym.info} ${red(`ERROR STACK ↓ \n`)} ${err.stack}\n`);
		} else {
			console.log(`${sym.warn} ${yellow(heading)}`);
		}
		if (exit) {
			process.exit(0);
		} else {
			return false;
		}
	}
};
