module.exports = function reverse (n) {
	const str = Math.abs(n).toString();
	let res = '';

	for (let i = str.length - 1; i >= 0; i--) {
		res += str[i];
	}

	return +res;
}
