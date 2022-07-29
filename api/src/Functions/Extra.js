const { Events, Users } = require('../db.js');
const { eventsApi, userApi } = require('../LocalApi');

require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST);
const { v4: uuidv4 } = require('uuid'); // uuidv4();⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

const uploadDataBase = async (req, res) => {
	try {
		/* ESTO HAY QUE CAMBIAR POR UN FIND OR CREATE */
		await Events.bulkCreate(eventsApi);
		await Users.bulkCreate(userApi);
		console.log('Data Base Uploaded');
	} catch (error) {
		console.log('Data Base NOT Uploaded');
		console.log('🐲🐲🐲 error:\n', error.stack);
	}
};

const stripeFunction = async (req, res) => {
	const { totalAmount, token } = req.body;
	console.log('🐲🐲🐲 / file: 0-Routes.js / line 19 / req', req.body);
	let error;
	let status;

	try {
		const customer = await stripe.customers.create({
			email: token.email,
			source: token.id,
		});

		const idempotency_key = uuidv4();

		const charge = await stripe.charges.create(
			{
				amount: totalAmount * 100,
				currency: 'ars',
				customer: customer.id,
				receipt_email: token.email,
				description: 'Purchased som ticket events from Main Stage',
				/* shipping: {
				name: token.card.name,
				address: {
					line1: token.card.address_line1,
					line2: token.card.address_line2,
					city: token.card.address_city,
					country: token.card.address_country,
					postal_code: token.card.address_zip
				}
			} */
			},
			{
				idempotency_key,
			}
		);
		console.log('Charge:', { charge });
		status = 'success';

		res.send({ status });
	} catch (error) {
		console.error('Error:', error);
		status = 'failure';
		res.send({ status });
	}
};

module.exports = {
	uploadDataBase,
	stripeFunction,
};
