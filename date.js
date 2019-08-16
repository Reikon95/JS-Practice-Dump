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
function getFormattedTime(date) {
	let hours = normaliseDateToken(date.getHours());
	let minutes = normaliseDateToken(date.getMinutes());
	let seconds = normaliseDateToken(date.getSeconds());
	return `${hours}:${minutes}:${seconds}`;
}

function normaliseDateToken(dateToken) {
	return dateToken < 10 ? `0${dateToken}` : `${dateToken}`;
}
