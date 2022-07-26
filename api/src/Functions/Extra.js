const { Events, Users } = require('../db.js');
const { eventsApi, userApi } = require('../LocalApi');
const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST);

const uploadDataBase = async (req, res) => {
	try {
		await Events.bulkCreate(eventsApi);
		await Users.bulkCreate(userApi);
		console.log('Data Base Uploaded');
	} catch (error) {
		console.log('Data Base NOT Uploaded');

		console.log('🐲🐲🐲 error:\n', error.stack);

	}
};

const StripePayment = async (req, res) => {
	let { amount, id } = req.body;
	try {
		const payment = await stripe.paymentIntents.create({
			amount,
			currency: 'USD',
			description: 'Spatula company',
			payment_method: id,
			confirm: true,
		});
		console.log('🐲🐲🐲 / file: Extra.js / line 26 / payment:\n', payment);
		res.json({
			message: 'Payment successful',
			success: true,
		});
	} catch (error) {
		console.log('🐲🐲🐲 / file: Extra.js / line 32 / error:\n', error.stack);
		res.json({
			message: 'Payment failed',
			success: false,
		});
	}
};

module.exports = {
	uploadDataBase,
	StripePayment,
};
