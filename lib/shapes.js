class Shape {
    constructor(text, textColor, color) {
        this.text = text;
        this.textColor = textColor;
        this.color = color;
    }
}

class Triangle extends Shape {
    constructor(text, textColor, color, center) {
        super(text, textColor, color, center);
    }

    //Triangle settings
    render() {
        var shapeOutput = `
<svg width="300" height="200">
<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
<text x="150" y="130" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;
        return shapeOutput;
    }
}

class Circle extends Shape {
    constructor(text, textColor, color) {
        super(text, textColor, color);
    }

    //Not sure what to use center or any other of the coordinates for at the moment
    render() {
        //Circle settings
        var shapeOutput = `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="80" fill="${this.color}" />      
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;
        return shapeOutput;
    }
}

class Square extends Shape {
    constructor(text, textColor, color) {
        super(text, textColor, color);
    }

    //Square settings
    render() {
        var shapeOutput = `
<svg width="300" height="200">
<rect width="300" height="200" fill="${this.color}" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;
        return shapeOutput;
    }
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

module.exports = generateShapes;
