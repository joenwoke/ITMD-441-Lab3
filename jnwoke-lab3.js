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
	const lowerCase = word.toLowerCase();
	
	//for loop to check each character
	for (let char of lowerCase) {
		if (vowels.includes(char)) {
			count++;
		}
	}
	console.log(word + ": " + count + " vowels");
}

//Test cases
countVowels("HapkidOe");
countVowels("Lawnmower");
countVowels("Arina");

//Exercise #3
function sortNumbers(arrayNumbers) {
	return arrayNumbers.sort((a, b) => a - b);
}
//Test cases
const firstArray = [21, 82, 600, 1];
const secondArray = [14, 21, 4, 59, 99, 5, 0];
const thirdArray = [9, 87, 556, 34, 23, 21];

//Print to console
console.log('Original Array:[' + firstArray + '] Sorted Array: [' + sortNumbers(firstArray) + "]");
console.log('Original Array:[' + secondArray + '] Sorted Array: [' + sortNumbers(secondArray) + "]");
console.log('Original Array:[' + thirdArray + '] Sorted Array: [' + sortNumbers(thirdArray) + "]");


//Exercise #4
function celsiusToFahrenheit(celsius) {
	let fahrenheit = (celsius * 9/5) + 32;
	return celsius.toFixed(1) + " Celsius = " + fahrenheit.toFixed(1) + " Fahrenheit";
}

//Test cases
console.log(celsiusToFahrenheit(13));
console.log(celsiusToFahrenheit(104));
console.log(celsiusToFahrenheit(2));