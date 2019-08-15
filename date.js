function isValidDate(val) {
	if (val instanceof Date === true) {
		return true;
	} else {
		return false;
	}
}

function getDayOfTheMonth(val) {
	let date = new Date(val);
	return date.getDate();
}

//Above returns the date eg. the 14th
