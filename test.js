const handleError = require("./index.js");

const err = new Error([`Something went wrong!`]);
handleError(`Got an error`, err);
