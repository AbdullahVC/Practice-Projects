"use strict";
function add(a, b) {
    return a + b;
}
function log(message) {
    console.log(message);
}
function logAndThrow(errorMessage) {
    console.log(errorMessage);
    throw new Error(errorMessage);
}
