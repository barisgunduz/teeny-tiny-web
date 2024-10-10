// dateUtils.js

/**
 * Get the current date and time.
 * @returns {Date} - The current date and time.
 */
export function getCurrentDateTime() {
    return new Date();
}

/**
 * Format a date as a string in 'YYYY-MM-DD' format.
 * @param {Date} date - The date to format.
 * @returns {string} - The formatted date string.
 */
export function formatDate(date) {
    if (!(date instanceof Date)) return null;
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

/**
 * Format a date as a string in 'DD-MM-YYYY' format.
 * @param {Date} date - The date to format.
 * @returns {string} - The formatted date string.
 */
export function formatDateDDMMYYYY(date) {
    if (!(date instanceof Date)) return null;
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

/**
 * Format a date as a string in 'MM-DD-YYYY' format.
 * @param {Date} date - The date to format.
 * @returns {string} - The formatted date string.
 */
export function formatDateMMDDYYYY(date) {
    if (!(date instanceof Date)) return null;
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
}

/**
 * Parse a date string in 'YYYY-MM-DD' format and return a Date object.
 * @param {string} dateString - The date string to parse.
 * @returns {Date|null} - The parsed Date object, or null if invalid.
 */
export function parseDate(dateString) {
    const date = new Date(dateString);
    return isNaN(date) ? null : date;
}

/**
 * Parse a date string in 'DD-MM-YYYY' format and return a Date object.
 * @param {string} dateString - The date string to parse.
 * @returns {Date|null} - The parsed Date object, or null if invalid.
 */
export function parseDateDDMMYYYY(dateString) {
    const [day, month, year] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    return isNaN(date) ? null : date;
}

/**
 * Parse a date string in 'MM-DD-YYYY' format and return a Date object.
 * @param {string} dateString - The date string to parse.
 * @returns {Date|null} - The parsed Date object, or null if invalid.
 */
export function parseDateMMDDYYYY(dateString) {
    const [month, day, year] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    return isNaN(date) ? null : date;
}

/**
 * Calculate the difference in days between two dates.
 * @param {Date} date1 - The first date.
 * @param {Date} date2 - The second date.
 * @returns {number|null} - The difference in days, or null if invalid.
 */
export function differenceInDays(date1, date2) {
    if (!(date1 instanceof Date) || !(date2 instanceof Date)) return null;
    const timeDiff = Math.abs(date2 - date1);
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
}

/**
 * Add a specified number of days to a date.
 * @param {Date} date - The original date.
 * @param {number} days - The number of days to add.
 * @returns {Date|null} - The new date, or null if invalid.
 */
export function addDays(date, days) {
    if (!(date instanceof Date)) return null;
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
}

/**
 * Subtract a specified number of days from a date.
 * @param {Date} date - The original date.
 * @param {number} days - The number of days to subtract.
 * @returns {Date|null} - The new date, or null if invalid.
 */
export function subtractDays(date, days) {
    return addDays(date, -days);
}

/**
 * Get the first day of the month for a given date.
 * @param {Date} date - The date to analyze.
 * @returns {Date|null} - The first day of the month, or null if invalid.
 */
export function firstDayOfMonth(date) {
    if (!(date instanceof Date)) return null;
    return new Date(date.getFullYear(), date.getMonth(), 1);
}

/**
 * Get the last day of the month for a given date.
 * @param {Date} date - The date to analyze.
 * @returns {Date|null} - The last day of the month, or null if invalid.
 */
export function lastDayOfMonth(date) {
    if (!(date instanceof Date)) return null;
    const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return lastDate;
}

/**
 * Check if a year is a leap year.
 * @param {number} year - The year to check.
 * @returns {boolean} - True if the year is a leap year, false otherwise.
 */
export function isLeapYear(year) {
    if (typeof year !== 'number') return false;
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

/**
 * Get the number of days in a specific month and year.
 * @param {number} month - The month (0-11).
 * @param {number} year - The year.
 * @returns {number|null} - The number of days in the month, or null if invalid.
 */
export function daysInMonth(month, year) {
    if (typeof month !== 'number' || typeof year !== 'number') return null;
    return new Date(year, month + 1, 0).getDate();
}

/**
 * Check if a date falls on a weekend.
 * @param {Date} date - The date to check.
 * @returns {boolean|null} - True if the date is a weekend, false otherwise, or null if invalid.
 */
export function isWeekend(date) {
    if (!(date instanceof Date)) return null;
    const day = date.getDay();
    return day === 0 || day === 6; // Sunday is 0, Saturday is 6
}

/**
 * Get the week number of the year for a given date.
 * @param {Date} date - The date to analyze.
 * @returns {number|null} - The week number, or null if invalid.
 */
export function weekNumber(date) {
    if (!(date instanceof Date)) return null;
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const days = Math.floor((date - firstDayOfYear) / (1000 * 60 * 60 * 24));
    return Math.ceil((days + firstDayOfYear.getDay() + 1) / 7);
}

/**
 * Convert a date to a human-readable format (e.g., "January 1, 2023").
 * @param {Date} date - The date to format.
 * @returns {string|null} - The formatted date string, or null if invalid.
 */
export function humanReadableDate(date) {
    if (!(date instanceof Date)) return null;
    return date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
}

/**
 * Get the timestamp (in milliseconds) for a given date.
 * @param {Date} date - The date to get the timestamp for.
 * @returns {number|null} - The timestamp, or null if invalid.
 */
export function getTimestamp(date) {
    if (!(date instanceof Date)) return null;
    return date.getTime();
}

/**
 * Check if a date is in the past.
 * @param {Date} date - The date to check.
 * @returns {boolean|null} - True if the date is in the past, false otherwise, or null if invalid.
 */
export function isPast(date) {
    if (!(date instanceof Date)) return null;
    return date < new Date();
}

/**
 * Check if a date is in the future.
 * @param {Date} date - The date to check.
 * @returns {boolean|null} - True if the date is in the future, false otherwise, or null if invalid.
 */
export function isFuture(date) {
    if (!(date instanceof Date)) return null;
    return date > new Date();
}

/**
 * Get an array of all the days in a month.
 * @param {number} month - The month (0-11).
 * @param {number} year - The year.
 * @returns {Array<Date>|null} - An array of Date objects, or null if invalid.
 */
export function daysInMonthArray(month, year) {
    if (typeof month !== 'number' || typeof year !== 'number') return null;
    const days = [];
    const numDays = daysInMonth(month, year);
    for (let i = 1; i <= numDays; i++) {
        days.push(new Date(year, month, i));
    }
    return days;
}

/**
 * Get the quarter of the year for a given date.
 * @param {Date} date - The date to analyze.
 * @returns {number|null} - The quarter (1-4), or null if invalid.
 */
export function getQuarter(date) {
    if (!(date instanceof Date)) return null;
    return Math.floor(date.getMonth() / 3) + 1;
}

/**
 * Get the start of the week for a given date (Sunday).
 * @param {Date} date - The date to analyze.
 * @returns {Date|null} - The start of the week, or null if invalid.
 */
export function startOfWeek(date) {
    if (!(date instanceof Date)) return null;
    const start = new Date(date);
    start.setDate(date.getDate() - date.getDay());
    return start;
}

/**
 * Get the end of the week for a given date (Saturday).
 * @param {Date} date - The date to analyze.
 * @returns {Date|null} - The end of the week, or null if invalid.
 */
export function endOfWeek(date) {
    if (!(date instanceof Date)) return null;
    const end = new Date(date);
    end.setDate(date.getDate() + (6 - date.getDay()));
    return end;
}
