const jestTest = require('./app');

test ("jestTest function to check on Jest", () =>{
    expect (jestTest(2,2)).toBe(4);
})