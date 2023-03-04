class Shape {
    constructor(text, textColor, color) {
        this.text = text;
        this.textColor = textColor;
        this.color = color;
    }
}

class Circle extends Shape {
    constructor(text, textColor, color) {
        super(text, textColor, color);
    }

    //Not sure what to use center or any other of the coordinates for at the moment
    render() {
        var shapeOutput = `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="80" fill="${this.color}" />      
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;
        return shapeOutput;
    }
}

class Triangle extends Shape {
    constructor(text, textColor, color, center, points) {
        super(text, textColor, color, center);
        this.points = points;
    }
}

class Square extends Shape {
    constructor(text, textColor, color, center, x, y, rx, ry) {
        super(text, textColor, color, center);
        this.x = x;
        this.rx = rx;
        this.ry = ry;
        this.y = y;
    }
}


function generateShapes(answer) {
const generateCircle = new Circle(answer.logoText, answer.textColor, answer.logoColor);

if(answer.logoShape === "circle") {
    var shape = generateCircle.render();
    console.log("The generated render: " + shape);
}
    return shape;
}

module.exports = generateShapes;
