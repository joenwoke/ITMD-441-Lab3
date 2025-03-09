// Joseph Nwoke
// ITMD 441-01 Undergraduate Student

//Exercise #1
function minMaxAverage(numbers) {
	const totalNumbers = numbers.length;
	const minValue = Math.min(...numbers);
	const maxValue = Math.max(...numbers);
	const average = numbers.reduce((acc, num) => acc + num, 0) /totalNumbers;
	
	const result = "Total Numbers: " + totalNumbers + ", Min Value: " + minValue + ", Max Value: " + maxValue + ", Average: " + average;
	console.log(result);
}

//Test cases for Exercise #1
minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]);
minMaxAverage([3, 40, 2, 4]);
minMaxAverage([100, 17, 77, 68, 50]);

//Exercise #2
function countVowels(word) {
	const vowels  = "aeiou";
	let count = 0;
	
	//for loop to check each character
	for (let char of word) {
		if (vowels.includes(char)) {
			count++;
		}
	}
}