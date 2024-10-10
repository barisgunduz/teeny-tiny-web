// objectArrayUtils.js

/**
 * Check if an object is empty (has no properties).
 * @param {Object} obj - The object to check.
 * @returns {boolean} - True if the object is empty, false otherwise.
 */
export function isEmptyObject(obj) {
    return obj && Object.keys(obj).length === 0;
}

/**
 * Merge two objects into one.
 * @param {Object} target - The target object to merge into.
 * @param {Object} source - The source object to merge from.
 * @returns {Object} - The merged object.
 */
export function mergeObjects(target, source) {
    return Object.assign({}, target, source);
}

/**
 * Deep merge two objects.
 * @param {Object} target - The target object.
 * @param {Object} source - The source object.
 * @returns {Object} - The deep merged object.
 */
export function deepMerge(target, source) {
    for (const key in source) {
        if (source[key] instanceof Object && key in target) {
            target[key] = deepMerge(target[key], source[key]);
        } else {
            target[key] = source[key];
        }
    }
    return target;
}

/**
 * Clone an object.
 * @param {Object} obj - The object to clone.
 * @returns {Object} - The cloned object.
 */
export function cloneObject(obj) {
    return JSON.parse(JSON.stringify(obj));
}

/**
 * Find an object in an array by a specific key and value.
 * @param {Array} array - The array to search.
 * @param {string} key - The key to match.
 * @param {*} value - The value to match.
 * @returns {Object|null} - The found object, or null if not found.
 */
export function findInArray(array, key, value) {
    return array.find((item) => item[key] === value) || null;
}

/**
 * Remove an object from an array by a specific key and value.
 * @param {Array} array - The array to modify.
 * @param {string} key - The key to match.
 * @param {*} value - The value to match.
 * @returns {Array} - The modified array.
 */
export function removeFromArray(array, key, value) {
    return array.filter((item) => item[key] !== value);
}

/**
 * Get unique values from an array.
 * @param {Array} array - The array to filter.
 * @returns {Array} - An array of unique values.
 */
export function uniqueValues(array) {
    return [...new Set(array)];
}

/**
 * Flatten a nested array.
 * @param {Array} array - The nested array to flatten.
 * @returns {Array} - The flattened array.
 */
export function flattenArray(array) {
    return array.flat(Infinity);
}

/**
 * Sort an array of objects by a specific key.
 * @param {Array} array - The array to sort.
 * @param {string} key - The key to sort by.
 * @param {boolean} [ascending=true] - Sort order (true for ascending, false for descending).
 * @returns {Array} - The sorted array.
 */
export function sortByKey(array, key, ascending = true) {
    return array.sort((a, b) => {
        if (a[key] < b[key]) return ascending ? -1 : 1;
        if (a[key] > b[key]) return ascending ? 1 : -1;
        return 0;
    });
}

/**
 * Group an array of objects by a specific key.
 * @param {Array} array - The array to group.
 * @param {string} key - The key to group by.
 * @returns {Object} - An object with keys as the group values and arrays of objects as values.
 */
export function groupBy(array, key) {
    return array.reduce((result, current) => {
        (result[current[key]] = result[current[key]] || []).push(current);
        return result;
    }, {});
}

/**
 * Get the maximum value from an array of numbers.
 * @param {Array<number>} array - The array to analyze.
 * @returns {number|null} - The maximum value, or null if the array is empty.
 */
export function maxInArray(array) {
    return array.length ? Math.max(...array) : null;
}

/**
 * Get the minimum value from an array of numbers.
 * @param {Array<number>} array - The array to analyze.
 * @returns {number|null} - The minimum value, or null if the array is empty.
 */
export function minInArray(array) {
    return array.length ? Math.min(...array) : null;
}

/**
 * Calculate the average of an array of numbers.
 * @param {Array<number>} array - The array to analyze.
 * @returns {number|null} - The average value, or null if the array is empty.
 */
export function averageInArray(array) {
    return array.length
        ? array.reduce((a, b) => a + b, 0) / array.length
        : null;
}

/**
 * Remove duplicates from an array.
 * @param {Array} array - The array to filter.
 * @returns {Array} - An array with duplicates removed.
 */
export function removeDuplicates(array) {
    return [...new Set(array)];
}

/**
 * Get the keys of an object as an array.
 * @param {Object} obj - The object to analyze.
 * @returns {Array<string>} - An array of keys.
 */
export function getObjectKeys(obj) {
    return Object.keys(obj);
}

/**
 * Get the values of an object as an array.
 * @param {Object} obj - The object to analyze.
 * @returns {Array} - An array of values.
 */
export function getObjectValues(obj) {
    return Object.values(obj);
}

/**
 * Check if a value is an array.
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is an array, false otherwise.
 */
export function isArray(value) {
    return Array.isArray(value);
}

/**
 * Check if a value is an object.
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is an object, false otherwise.
 */
export function isObject(value) {
    return value !== null && typeof value === "object" && !Array.isArray(value);
}

/**
 * Deep clone an array or object.
 * @param {Array|Object} data - The data to clone.
 * @returns {Array|Object} - The deep cloned data.
 */
export function deepClone(data) {
    return JSON.parse(JSON.stringify(data));
}

/**
 * Find the index of an object in an array by a specific key and value.
 * @param {Array} array - The array to search.
 * @param {string} key - The key to match.
 * @param {*} value - The value to match.
 * @returns {number} - The index of the found object, or -1 if not found.
 */
export function indexOfInArray(array, key, value) {
    return array.findIndex((item) => item[key] === value);
}

/**
 * Shuffle an array.
 * @param {Array} array - The array to shuffle.
 * @returns {Array} - The shuffled array.
 */
export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
