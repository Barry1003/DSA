"use strict";
const demoArray = [12, 5, 23, 7, 19, 45, 3, 18, 33, 27, 10, 41, 9, 2, 8];
// O(1) – Constant Time
// check if the number in the array is even or odd
const E_O = (arr) => {
    // return arr.map(num => num % 2 === 0 ? 'even' : 'odd');
    return arr.map(num => {
        if (num % 2 === 0) {
            return `${num} is odd`;
        }
        else {
            return `${num} is odd`;
        }
    });
};
//Return the last element from an array
const last_element = (arr) => {
    return arr.map(num => num[-1]);
};
//Find the maximum number in an unsorted array.
const max_num = (arr) => {
    let numz = arr[0];
    arr.forEach(num => {
        if (num > numz) {
            numz = num;
        }
    });
    return numz;
};
//Count how many times a specific value appears in an array
const find_rep = (arr, target) => {
    let count = 0;
    arr.forEach(num => {
        if (num === target) {
            count++;
        }
    });
    return count;
};
//O(log n) – Logarithmic Time
//Given a sorted array, find if a specific number exists using binary search.
const find_num = ((arr, target) => {
    arr.map((num) => {
        if (num === target) {
            return `${num} is in the array `;
        }
        else {
            return "value dodes not exist";
        }
    });
}
//error );
//error 
