const { Langbase } = require('langbase');
const handleError = require("./index.js");

(async () => {
	try {
		const langbase = new Langbase({
			apiKey: process.env.LANGBASE_API_KEY
		});

		await langbase.pipe.run({
			name: 'ai-agent',
			messages: [
				{
					role: 'user',
					content: 'Who is an AI Engineer?',
				},
			],
		});
	} catch (err) {
		handleError('Langbase API Error', err);
	}
})();
