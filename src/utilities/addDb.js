const addTtime = (breakTime) => {
	let time = {breakTime};

	localStorage.setItem('break-time', JSON.stringify(time));
};
const getLocalTime = () => {
	let time = {};
	const storeTime = localStorage.getItem('break-time');
	if (storeTime) {
		time = JSON.parse(storeTime);
	}
	return time;
};
export {addTtime, getLocalTime};
