// mathUtils.js

/**
 * Check if a number is even.
 * @param {number} num - The number to check.
 * @returns {boolean} - True if the number is even, false otherwise.
 */
export function isEven(num) {
    return num % 2 === 0;
}

/**
 * Check if a number is odd.
 * @param {number} num - The number to check.
 * @returns {boolean} - True if the number is odd, false otherwise.
 */
export function isOdd(num) {
    return num % 2 !== 0;
}

/**
 * Find the minimum value in an array.
 * @param {Array<number>} arr - The array to search.
 * @returns {number|null} - The minimum value, or null if input is invalid.
 */
export function min(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    return arr.reduce((min, val) => (val < min ? val : min), arr[0]);
}

/**
 * Find the maximum value in an array.
 * @param {Array<number>} arr - The array to search.
 * @returns {number|null} - The maximum value, or null if input is invalid.
 */
export function max(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    return arr.reduce((max, val) => (val > max ? val : max), arr[0]);
}

/**
 * Calculate the sum of an array of numbers.
 * @param {Array<number>} arr - The array to sum.
 * @returns {number|null} - The sum, or null if input is invalid.
 */
export function sum(arr) {
    if (!Array.isArray(arr)) return null;
    return arr.reduce((total, num) => total + num, 0);
}

/**
 * Calculate the average of an array of numbers.
 * @param {Array<number>} arr - The array to average.
 * @returns {number|null} - The average, or null if input is invalid.
 */
export function average(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    return sum(arr) / arr.length;
}

/**
 * Check if a number is prime.
 * @param {number} num - The number to check.
 * @returns {boolean} - True if the number is prime, false otherwise.
 */
export function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

/**
 * Generate Fibonacci sequence up to n numbers.
 * @param {number} n - The number of Fibonacci numbers to generate.
 * @returns {Array<number>} - An array containing the Fibonacci sequence.
 */
export function fibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}

/**
 * Calculate the factorial of a number.
 * @param {number} n - The number to calculate the factorial of.
 * @returns {number|string} - The factorial, or an error message for negative input.
 */
export function factorial(n) {
    if (n < 0) return "Error: Negative input";
    return n === 0 ? 1 : n * factorial(n - 1);
}

/**
 * Check if a number is within a specified range (inclusive).
 * @param {number} num - The number to check.
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {boolean} - True if the number is within range, false otherwise.
 */
export function inRange(num, min, max) {
    return num >= min && num <= max;
}

/**
 * Calculate the standard deviation of an array of numbers.
 * @param {Array<number>} arr - The array to calculate the standard deviation for.
 * @returns {number|null} - The standard deviation, or null if input is invalid.
 */
export function standardDeviation(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    const avg = average(arr);
    const variance = average(arr.map((num) => Math.pow(num - avg, 2)));
    return Math.sqrt(variance);
}

/**
 * Find unique values in an array.
 * @param {Array<any>} arr - The array to find unique values in.
 * @returns {Array<any>} - An array of unique values.
 */
export function unique(arr) {
    if (!Array.isArray(arr)) return null;
    return [...new Set(arr)];
}

/**
 * Calculate the product of an array of numbers.
 * @param {Array<number>} arr - The array to multiply.
 * @returns {number|null} - The product, or null if input is invalid.
 */
export function product(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    return arr.reduce((total, num) => total * num, 1);
}

/**
 * Generate a random integer between a minimum and maximum value.
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} - A random integer between min and max.
 */
export function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Convert radians to degrees.
 * @param {number} radians - The angle in radians.
 * @returns {number} - The angle in degrees.
 */
export function radiansToDegrees(radians) {
    return radians * (180 / Math.PI);
}

/**
 * Convert degrees to radians.
 * @param {number} degrees - The angle in degrees.
 * @returns {number} - The angle in radians.
 */
export function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

/**
 * Clamp a number within a specified range.
 * @param {number} num - The number to clamp.
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} - The clamped value.
 */
export function clamp(num, min, max) {
    return Math.max(min, Math.min(num, max));
}

/**
 * Format a number with commas as thousand separators.
 * @param {number} num - The number to format.
 * @returns {string} - The formatted number as a string.
 */
export function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * Calculate exponential growth.
 * @param {number} initial - The initial amount.
 * @param {number} rate - The growth rate (as a decimal).
 * @param {number} time - The time period.
 * @returns {number} - The amount after growth.
 */
export function exponentialGrowth(initial, rate, time) {
    return initial * Math.pow(1 + rate, time);
}

/**
 * Calculate logarithmic growth.
 * @param {number} initial - The initial amount.
 * @param {number} rate - The growth rate.
 * @param {number} time - The time period.
 * @returns {number} - The amount after growth.
 */
export function logarithmicGrowth(initial, rate, time) {
    return initial * Math.log(rate * time + 1);
}

/**
 * Safely parse a string to a number.
 * @param {string} str - The string to parse.
 * @returns {number|null} - The parsed number, or null if parsing fails.
 */
export function parseNumber(str) {
    const num = Number(str);
    return isNaN(num) ? null : num;
}

/**
 * Calculate the median of an array of numbers.
 * @param {Array<number>} arr - The array to calculate the median for.
 * @returns {number|null} - The median, or null if input is invalid.
 */
export function median(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    const sorted = arr.slice().sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 !== 0
        ? sorted[mid]
        : (sorted[mid - 1] + sorted[mid]) / 2;
}

/**
 * Find the mode(s) of an array of numbers.
 * @param {Array<number>} arr - The array to find the mode of.
 * @returns {Array<number>} - An array of the mode(s).
 */
export function mode(arr) {
    const frequency = {};
    arr.forEach((num) => {
        frequency[num] = (frequency[num] || 0) + 1;
    });
    const maxFreq = Math.max(...Object.values(frequency));
    return Object.keys(frequency)
        .filter((num) => frequency[num] === maxFreq)
        .map(Number);
}

/**
 * Calculate the range of an array of numbers.
 * @param {Array<number>} arr - The array to calculate the range for.
 * @returns {number|null} - The range, or null if input is invalid.
 */
export function range(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    return max(arr) - min(arr);
}

/**
 * Convert a percentage to a decimal.
 * @param {number} percent - The percentage to convert.
 * @returns {number} - The decimal representation.
 */
export function percentToDecimal(percent) {
    return percent / 100;
}

/**
 * Convert a decimal to a percentage.
 * @param {number} decimal - The decimal to convert.
 * @returns {number} - The percentage representation.
 */
export function decimalToPercent(decimal) {
    return decimal * 100;
}

/**
 * Calculate the power of a number raised to an exponent.
 * @param {number} base - The base number.
 * @param {number} exponent - The exponent.
 * @returns {number} - The result of base raised to the exponent.
 */
export function power(base, exponent) {
    return Math.pow(base, exponent);
}

/**
 * Calculate the absolute value of a number.
 * @param {number} num - The number to calculate the absolute value of.
 * @returns {number} - The absolute value.
 */
export function absolute(num) {
    return Math.abs(num);
}

/**
 * Find the greatest common divisor (GCD) of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The GCD of a and b.
 */
export function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

/**
 * Find the least common multiple (LCM) of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} - The LCM of a and b.
 */
export function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

/**
 * Calculate the area of a rectangle.
 * @param {number} length - The length of the rectangle.
 * @param {number} width - The width of the rectangle.
 * @returns {number} - The area of the rectangle.
 */
export function rectangleArea(length, width) {
    return length * width;
}

/**
 * Calculate the area of a circle.
 * @param {number} radius - The radius of the circle.
 * @returns {number} - The area of the circle.
 */
export function circleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}

/**
 * Calculate the circumference of a circle.
 * @param {number} radius - The radius of the circle.
 * @returns {number} - The circumference of the circle.
 */
export function circleCircumference(radius) {
    return 2 * Math.PI * radius;
}

/**
 * Calculate the perimeter of a rectangle.
 * @param {number} length - The length of the rectangle.
 * @param {number} width - The width of the rectangle.
 * @returns {number} - The perimeter of the rectangle.
 */
export function rectanglePerimeter(length, width) {
    return 2 * (length + width);
}

/**
 * Calculate the area of a triangle.
 * @param {number} base - The base of the triangle.
 * @param {number} height - The height of the triangle.
 * @returns {number} - The area of the triangle.
 */
export function triangleArea(base, height) {
    return (base * height) / 2;
}
