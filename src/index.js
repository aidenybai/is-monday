module.exports = (timeZoneOffset = 0) => {
  const date = new Date();
  date.setUTCHours(timeZoneOffset);
	return date.getDay() === 1;
};