//Imported all of the classes
const { Shape, Triangle, Square, Circle } = require("./shapes.js");

describe("Shape", () => {

    //A test created to make sure triangle returns a specific output
    describe("Triangle", () => {
        it("Calls the render function and outputs a triangle", () => {
            myTriangle = {
                text: "CAR",
                textColor: "white",
                color: "blue"
            }
            const shape = new Triangle(myTriangle.text, myTriangle.textColor, myTriangle.color);
            const expectedVal = `<svg width="300" height="200"><polygon points="150, 18 244, 182 56, 182" fill="blue" /><text x="150" y="130" font-size="40" text-anchor="middle" fill="white">CAR</text></svg>`;
            expect(shape.render()).toEqual(expectedVal);
        });
    });

        //A test created to make sure circle returns a specific output
        describe("Circle", () => {
            it("Calls the render function and outputs a circle", () => {
                myCircle = {
                    text: "WOW",
                    textColor: "red",
                    color: "white"
                }
                const shape = new Circle(myCircle.text, myCircle.textColor, myCircle.color);
                const expectedVal = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="white" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">WOW</text></svg>`
                expect(shape.render()).toEqual(expectedVal);
            });
        });

        //A test created to make sure square returns a specific output
        describe("Square", () => {
            it("Calls the render function and outputs a square", () => {
                mySquare = {
                    text: "BAT",
                    textColor: "blue",
                    color: "grey"
                }
                const shape = new Square(mySquare.text, mySquare.textColor, mySquare.color);
                const expectedVal = `<svg width="300" height="200"><rect width="300" height="200" fill="grey" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">BAT</text></svg>`
                expect(shape.render()).toEqual(expectedVal);
            });

        });
    });


