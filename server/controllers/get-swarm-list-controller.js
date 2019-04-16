const fetch = require('node-fetch');

const swarmThings = async (req, res) => {
	
	try {
		const response = await fetch('https://bertha.ig.ft.com/view/publish/gss/1thHNlUAXOtYtm14k0gZpfe19DPGdad-Lr7XvLdIgXuc/Sheet1', { method: 'GET', headers: {
			'Content-type': 'application/json',
		},
		});

		if (response.status === 404) {
			throw new Error('unauthorised');
		}

		if (response.status >= 500) {
			throw new Error('internal error');
		}
		
		if (response.status === 200) {
			const json = await response.json(); 

			const debug = JSON.stringify(json)
			res.render('home', { themes: json, debug: debug })        
		} 
	} catch (error) {
		// eslint-disable-next-line no-console
		console.log(error);
	}
};

module.exports = swarmThings;