const jestTest = require("./app")

const app = require("./app")
test ("jestTest function to check on Jest", () =>{
    expect (jestTest(2,2)).toBe(4);
})

// @ponicode
describe("app", () => {
    test("0", () => {
        let callFunction = () => {
            app(0.0, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            app(-1, 0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            app(410, 10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            app(550, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            app("bar", 0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            app(NaN, NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})
