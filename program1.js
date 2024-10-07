/**
 * @param {string} s
 * @return {boolean}
 * * **/
var isValid = function(s) {
    const stack = [];
    const matchingBrackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char in matchingBrackets) {
            // Pop the top element from the stack, or use '#' if stack is empty
            const topElement = stack.length > 0 ? stack.pop() : '#';
            if (topElement !== matchingBrackets[char]) {
                return false;
            }
        } else {
            // Push opening brackets onto the stack
            stack.push(char);
        }
    }

    // Stack should be empty if all parentheses are valid
    return stack.length === 0;
};

module.exports = { isValid };


     
    
    
   



    

module.exports = { isValid };


