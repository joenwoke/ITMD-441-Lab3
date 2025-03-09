// Joseph Nwoke
// ITMD 441-01 Undergraduate Student

//Exercise #1
function minMaxAverage(numbers) {
	const totalNumbers = numbers.length;
	const minValue = Math.min(...numbers);
	const maxValue = Math.max(...numbers);
	const average = numbers.reduce((acc, num) => acc + num, 0) /totalNumbers;
}