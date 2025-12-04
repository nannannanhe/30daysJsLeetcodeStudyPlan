/**
 * Problem: https://leetcode.com/problems/counter/description/?envType=study-plan-v2&envId=30-days-of-javascript
 * 
 * Closure keeps the variable n alive and mutable across calls.
 * The state (n) lives in the closure, not on the function object.
*/

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    
    return function() {
        return n++
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */