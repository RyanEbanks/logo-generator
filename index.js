//Importing require to use the prompts
const inquirer = require("inquirer");
//Importing fs to write to file
const fs = require("fs");
//Importing the shapes.js file to use its content
const generateShapes = require("./lib/shapes");

const questions = ["Enter text for the SVG (No more than 3 characters): ", "Enter the color of your text (hexadecimals allowed): ", "Enter the shape for your logo: ",
"Enter the shapes color (hexadecimals allowed): "];

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
        message: questions[0]
    },
    {
        type: "input",
        name: "textColor",
        message: questions[1]
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

//Calling the function to run
start();