export default function validate(input) {
	let { Name, img1, img2, img3, img4, Price, City, Location, Category, Date, Hour } = input;
	let errors = {};
	errors.check = 'failed';

	if (!Name) {
		errors.Name = 'Name is required.';
	} else if (Name.length !== 0) {
		if (!/^[A-Z]+[A-Za-z0-9\s]+$/g.test(Name) || Name.length > 25) {
			errors.Name =
				"The first letter must be uppercase and don't start with a number and don´t pass 25 characters.";
		}
	}

	if (!img1) {
		errors.img1 = 'At least one picture is required.';
	} else if (img1 && !/[a-z0-9-.]+\.[a-z]{2,4}\/?([^\s<>#%",{}\\|^[\]`]+)?$/.test(img1)) {
		errors.img1 = 'It must be a valid "URL" or be empty.';
	}

	if (img2) {
		if (img2 && !/[a-z0-9-.]+\.[a-z]{2,4}\/?([^\s<>#%",{}\\|^[\]`]+)?$/.test(img2)) {
			errors.img2 = 'It must be a valid "URL" or be empty.';
		}
	}

	if (img3) {
		if (img3 && !/[a-z0-9-.]+\.[a-z]{2,4}\/?([^\s<>#%",{}\\|^[\]`]+)?$/.test(img3)) {
			errors.img3 = 'It must be a valid "URL" or be empty.';
		}
	}

	if (img4) {
		if (img4 && !/[a-z0-9-.]+\.[a-z]{2,4}\/?([^\s<>#%",{}\\|^[\]`]+)?$/.test(img4)) {
			errors.img4 = 'It must be a valid "URL" or be empty.';
		}
	}
	if (Price < 0) {
		errors.Price = 'You can only use positive numbers.';
	}

	if (!Location) {
		errors.Location = 'Location is required.';
	} else if (Location.length !== 0) {
		if (!/^[A-Z]+[A-Za-z0-9\s]+$/g.test(Location) || Location.length > 25) {
			errors.Location =
				"The first letter must be uppercase and don't start with a number and don't pass 25 characters.";
		}
	}
	if (!City) {
		errors.City = 'At least one City is required.';
	}
	if (!Category) {
		errors.Category = 'At least one Category is required.';
	}
	if (!Date) {
		errors.Date = 'A Date is required.';
	}
	if (!Hour) {
		errors.Hour = 'An Hour is required.';
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
		!errors.img1 &&
		!errors.City &&
		!errors.Location &&
		!errors.Category &&
		!errors.Price
	) {
		errors.check = 'approved';
	}
	return errors;
}
