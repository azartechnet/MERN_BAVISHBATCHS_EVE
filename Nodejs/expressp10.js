const express = require('express');
const app = express();
const PORT = 3001;

app.all('/user', function (req, res) {
	console.log('USER API CALLED');
});

app.listen(PORT, function (err) {
	if (err) console.log(err);
	console.log("Server listening on PORT ", PORT);
});