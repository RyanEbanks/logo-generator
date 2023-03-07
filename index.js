//Importing require to use the prompts
const inquirer = require("inquirer");
//Importing fs to write to file
const fs = require("fs");
//Importing the shapes.js file to use its content
const {Shape, Triangle, Square, Circle} = require("./lib/shapes");

const questions = ["Enter text for the SVG (No more than 3 characters): ", "Enter the color of your text (hexadecimals allowed): ", "Enter the shape for your logo: ",
"Enter the color of your shape (hexadecimals allowed): "];

function writeToFile(filename, data) {
    fs.writeFile(filename, data, (error, data) => {
        if(error) {
            console.log(error);
        }
        console.log(data);
    });
}

function start() {
    inquirer.prompt([{
        type: "input",
        name: "logoText",
        message: questions[0],
        validate: (input) => {
            if(input.length > 3) {
                console.log("\nPlease enter 3 characters or less!");
                return false;
            } if(!input) {
                console.log("\nPlease enter characters");
                return false;
            }
            return true;
        }
    },
    {
        type: "input",
        name: "textColor",
        message: questions[1]
    //     validate: (colorInput) => {
    //         if(colorInput) {
    //             let regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    //             if(regex.test(colorInput) || colorChecker(colorInput)) {
    //                 return true;
    //             } else {
    //                 console.log("\n Please enter an actual color or hexa equivalent.");
    //                 return false;
    //         }
    //     } if(!colorInput) {
    //         return false;
    //     }
    // }
    },
    {
        type: "rawlist",
        name: "logoShape",
        message: questions[2],
        choices: ["triangle", "circle", "square"]
    },
    {
        type: "input",
        name: "logoColor",
        message: questions[3]
    }
    ]).then((res) => {
        console.log("Logo Shape from the index page: " + res.logoShape);
        const createShapes = generateShapes(res);
        //write to file to create an svg using the name of the shape.
        writeToFile(`${res.logoShape}.svg`, createShapes);
    });
}

function generateShapes(answer) {
    const generateTriangle = new Triangle(answer.logoText, answer.textColor, answer.logoColor);
    const generateCircle = new Circle(answer.logoText, answer.textColor, answer.logoColor);
    const generateSquare = new Square(answer.logoText, answer.textColor, answer.logoColor);

//Need to add condition to only accept 3 characters from input logoText (prob if statement)
    if (answer.logoShape === "triangle") {
        var shape = generateTriangle.render();
        console.log("The generated render: " + shape);
    } else if (answer.logoShape === "circle") {
        var shape = generateCircle.render();
        console.log("The generated render: " + shape);
    } else if (answer.logoShape === "square") {
        var shape = generateSquare.render();
        console.log("The generated render: " + shape);
    }
    return shape;
}

//Function to test for a valid color
function colorChecker(grabColor){
 const colorToConvert = grabColor;

}
//Calling the function to run
start();