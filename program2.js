/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {


    
    
        const romanMap = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        };
    
        let total = 0; 
        const length = s.length;
    
        for (let i = 0; i < length; i++) {
            
            const currentVal = romanMap[s[i]];
            
            
            if (i < length - 1 && currentVal < romanMap[s[i + 1]]) {
                
                total -= currentVal;
            } else {
                
                total += currentVal;
            }
        }
    
        return total;

    
    
    


    
};


module.exports={romanToInt}