export default function validate(input) {
	let {
		Name,
		img1,
		img2,
		img3,
		img4,
		carrousel,
		Price,
		City,
		Location,
		Category,
		date,
		Hour,
		Quantity,
		Detail,
		AgeRestriction,
	} = input;
	let errors = {};
	let today = new Date().toISOString().slice(0, 16); // En las dos fechas usamos el horario universal, sino hay una diferencia de 3hs
	const dateInput = date && new Date(date).toISOString().slice(0, 16);
	//console.log(date.length)

	errors.check = 'failed';

	if (!Name) {
		errors.Name = 'Name is required.';
	} else if (Name.length !== 0) {
		if (!/^[A-Z]+[A-Za-z0-9\s]+$/g.test(Name) || Name.length > 25) {
			errors.Name = 'First letter must be uppercase and do not start with a number';
		}
	}

	if (dateInput < today) {
		errors.date = 'Invalid date';
	}if( !dateInput ) {
		errors.date = 'Something is missing';
	}
	console.log('🐲🐲🐲 / file: Validations.jsx / line 139 / img1', img1);

	if (!img1) {
		errors.img1 = 'At least one picture is required.';
	} else if (img1 && !/[a-z0-9-.]+\.[a-z]{2,4}\/?([^\s<>#%",{}\\|^[\]`]+)?$/.test(img1)) {
		errors.img1 = 'Invalid URL';
	}

	if (img2) {
		if (img2 && !/[a-z0-9-.]+\.[a-z]{2,4}\/?([^\s<>#%",{}\\|^[\]`]+)?$/.test(img2)) {
			errors.img2 = 'Invalid URL';
		}
	}

	if (img3) {
		if (img3 && !/[a-z0-9-.]+\.[a-z]{2,4}\/?([^\s<>#%",{}\\|^[\]`]+)?$/.test(img3)) {
			errors.img3 = 'Invalid URL';
		}
	}

	if (img4) {
		if (img4 && !/[a-z0-9-.]+\.[a-z]{2,4}\/?([^\s<>#%",{}\\|^[\]`]+)?$/.test(img4)) {
			errors.img4 = 'Invalid URL';
		}
	}

	if (carrousel) {
		if (carrousel && !/[a-z0-9-.]+\.[a-z]{2,4}\/?([^\s<>#%",{}\\|^[\]`]+)?$/.test(carrousel)) {
			errors.carrousel = 'Invalid URL';
		}
	}

	if (Price < 0 || Price.length > 10) {
		errors.Price = 'Insert a positive numbers with less than 11 Digits.';
	} else if (Price > 0 && Quantity <= 0) {
		errors.Quantity = 'When Price > 0, you must also insert a Quantity > 0';
	}
	if (Quantity < 0 || Quantity.length > 10) {
		errors.Quantity = 'Insert a positive numbers with less than 11 Digits.';
	} else if (Quantity > 0 && Price <= 0) {
		errors.Price = 'When Quantity > 0, you must also insert a Price > 0';
	}
	if (AgeRestriction < 0 || AgeRestriction >= 100) {
		errors.AgeRestriction = 'Only insert positive numbers or less than 100.';
	}
	if (!Location) {
		errors.Location = 'Location is required.';
	} 
	// else if (Location.length !== 0) {
	// 	if (!/^[A-Z]+[A-Za-z0-9\s]+$/g.test(Location) || Location.length > 25) {
	// 		errors.Location = 'First letter must be uppercase and do not start with a number';
	// 	}
	// }
	if (!City) {
		errors.City = 'At least one city is required.';
	}
	if (!Category) {
		errors.Category = 'At least one category is required.';
	}
	if (!date) {
		errors.date = 'Date or time are missing';
	}

	if (!Detail) {
		errors.Detail = 'Event detail required';
	}

	if (!Hour) {
		errors.Hour = 'An hour is required.';
	}
	/*if (price_max.length === 0) {
		errors.price_max = 'Height max is required.';
	} else if (price_max.length !== 0) {
		if (
			!price_max ||
			!/^[1-9]\d*(\.\d+)?$/.test(price_max) ||
			parseInt(price_max) <= parseInt(price)
		) {
			errors.price_max =
				'You can only put numbers that are different from zero. The maximum value cannot be less than the minimum.';
		}
	}

	if (promotion.length > 1000) {
		errors.promotion = 'The maximum characters are 250.';
	}

	if (permitted.length > 1000) {
		errors.permitted = 'The maximum characters are 250.';
	}

	if (notPermitted.length > 1000) {
		errors.notPermitted = 'The maximum characters are 250.';
	} */
	if (
		!errors.Name &&
		!errors.date &&
		!errors.img1 &&
		!errors.carrousel &&
		!errors.City &&
		!errors.Location &&
		!errors.Category &&
		!errors.Price &&
		!errors.Quantity &&
		!errors.Detail
	) {
		errors.check = 'approved';
	}
	return errors;
}
