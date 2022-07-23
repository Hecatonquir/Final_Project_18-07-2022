import React, { useState } from 'react';
import '../Styles/PaymentFormat.css';

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';

const CARD_OPTIONS = {
	iconStyle: 'solid',
	style: {
		base: {
			iconColor: '#c4f0ff',
			color: '#fff',
			fontWeight: 500,
			fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
			fontSize: '16px',
			fontSmoothing: 'antialiased',
			':-webkit-autofill': { color: '#fce883' },
			'::placeholder': { color: '#87bbfd' },
		},
		invalid: {
			iconColor: '#ffc7ee',
			color: '#ffc7ee',
		},
	},
};

export default function PaymentForm() {
	const [success, setSuccess] = useState(false);
	const stripe = useStripe();
	const elements = useElements();

	const handleSumbit = async (e) => {
		e.preventDefault();
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card: elements.getElement(CardElement),
		});

		if (!error) {
			try {
				const { id } = paymentMethod;
				const respone = await axios.post('http://localhost:3001/payment', {
					amount: 1000,
					id,
				});

				if (respone.data.success) {
					console.log('Successful Payment!');
					setSuccess(true);
				}
			} catch (error) {
				console.log('Error en el pago', error.stack);
			}
		} else {
			console.log('Error en el pago 2', error.message);
		}
	};

	return (
		<>
			<br />
			{!success ? (
				<form onSubmit={handleSumbit}>
					{/* SACAR EL CSS DE STRIPE DOCS */}
					<fieldset className='FormGroup' style={{ color: 'black' }}>
						<div className='FormRow' style={{ color: 'black' }}>
							<CardElement options={CARD_OPTIONS} style={{ color: 'black' }} />
						</div>
					</fieldset>
					<button>PAY!</button>
				</form>
			) : (
				<>
					<h2> You just bougth some Tickets! </h2>
				</>
			)}
		</>
	);
}
