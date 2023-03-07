//Imported all of the classes
const {Shape, Triangle, Square, Circle} = require("./shapes.js");

describe("Shape", () => {

    //A test created to make sure triangle returns a specific output
    describe("Triangle", () => {
        it("Calls the render function and outputs a triangle", () => {
            myData = {
                text : "CAR",
                textColor : "white",
                color : "blue"
            }
            const shape = new Triangle(myData.text, myData.textColor, myData.color);
            const expectedVal = `<svg width="300" height="200"><polygon points="150, 18 244, 182 56, 182" fill="blue" /><text x="150" y="130" font-size="40" text-anchor="middle" fill="white">CAR</text></svg>`;
            expect(shape.render()).toEqual(expectedVal);
        });
    });
});