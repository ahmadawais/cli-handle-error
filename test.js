const handleError = require('./index.js');

try {
	throw new Error('Test error');
} catch (err) {
	// Should show the error heading, name, reason, and stack.
	handleError('Test Error', err);
}
