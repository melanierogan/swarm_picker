const express = require('express');
const exphbs = require('express-handlebars');
const env = require('dotenv').config();
const swarmThings = require('../server/controllers/get-swarm-list-controller');
const createApp = () => {
	const app = express();

	const handlebarsInstance = exphbs.create({
		extname: '.html',
		defaultLayout: 'main',
	});

	app.engine('html', handlebarsInstance.engine);
	app.use(express.static('public'));
	app.set('view engine', '.html');
	app.get('/', swarmThings);
	return app;
};
const port = process.env.PORT || 3000;
const app = createApp();
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = createApp;
