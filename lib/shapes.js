class Shape {
    constructor(text, textColor, color) {
        this.text = text;
        this.textColor = textColor;
        this.color = color;
    }
}

class Triangle extends Shape {
    constructor(text, textColor, color) {
        super(text, textColor, color);
    }

    
    //Triangle settings
    render() {
        //Jest doesn't read the spaces in template literals properly so i had to format it this way
        var shapeOutput = `<svg width="300" height="200"><polygon points="150, 18 244, 182 56, 182" fill="${this.color}" /><text x="150" y="130" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
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


//Exporting the function generateShapes
// module.exports = generateShapes;
//Exporting the class Shape
module.exports = {Shape, Triangle, Square, Circle};
