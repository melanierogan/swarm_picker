// const fetch = require('node-fetch');

// /*fetch('https://bertha.ig.ft.com/view/publish/gss/1thHNlUAXOtYtm14k0gZpfe19DPGdad-Lr7XvLdIgXuc/Sheet1')
//     .then(res => res.json())
//     .then(json => console.log(json));


// const swarmThings = fetch('https://bertha.ig.ft.com/view/publish/gss/1thHNlUAXOtYtm14k0gZpfe19DPGdad-Lr7XvLdIgXuc/Sheet1');

// swarmThings
// .then(data => data.json())
// */


// const swarmThings = () => {
//     const url = 'https://bertha.ig.ft.com/view/publish/gss/1thHNlUAXOtYtm14k0gZpfe19DPGdad-Lr7XvLdIgXuc/Sheet1'
    
//     fetch(url,{
//         method: 'GET',
//         body: JSON.stringify(data),
//         headers: {
//           'Content-Type': 'application/json'
//         });
//     try {
//         if (response.status === 200) {

//             return body.json;
            
//         };
//     } catch (err) {
//         throw new Error(err.message)
//     }
//     //console.log('bum it', swarmThings.data[0])
// };
// console.log(swarmThings)

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
			const responseBody = await response.json(); 
			const { 
				theme
			} = responseBody.theme
			
			// eslint-disable-next-line no-console
			console.log(responseBody[0].theme, 'call to API successful');
			
			res.render('home', {
				theme
			});          
		} 
	} catch (error) {
		// eslint-disable-next-line no-console
		console.log(error);
	}
};

swarmThings()

module.exports = swarmThings;