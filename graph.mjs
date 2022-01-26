class BaseShape {
    constructor (colorName = 'black'){
        this.colorName = colorName
    }
    }

class Circle extends BaseShape {
    constructor (colorName = 'black', x0 = 0, y0 = 0, r = 1){
        this.colorName = colorName
        super(colorName)
        this.x0 = x0
        this.y0 = y0
        this.r = r
    }
    print (){
    console.log(`Circle {x0 = ${this.x0}, y0 = ${this.y0}, r = ${this.r}}`)
}
}

class Rectangle extends BaseShape {
    constructor (colorName = 'black', x0 = 0, y0 = 0, width = 1, height = 1){
        this.colorName = colorName
        super(colorName)
        this.x0 = x0
        this.y0 = y0
        this.width = width
        this.height = height
    }
    print (){
        console.log(`Rectangle {x0 = ${this.x0}, y0 = ${this.y0}, width = ${this.width}, height = ${this.height}}`)
    }
    }

    class Triangle extends BaseShape {
    constructor (colorName = 'black', x0 = 0, y0 = 0, side1 = 1, side2 = 1, side3 = 1){
        this.colorName = colorName
        super(colorName)
        this.x0 = x0
        this.y0 = y0
        this.side1 = side1
        this.side2 = side2
        this.side3 = side3
    }
    print (){
        console.log(`Triangle {x0 = ${this.x0}, y0 = ${this.y0}, side1 = ${this.side1}, side2 = ${this.side2}, side3 = ${this.side3}}`)
    }
    }

    class Ellipse extends BaseShape {
    constructor (colorName = 'black', x0 = 0, y0 = 0, width = 1, height = 2){
        this.colorName = colorName
        super(colorName)
        this.x0 = x0
        this.y0 = y0
        this.width = width
        this.height = height
    }
    print (){
    console.log(`Ellipse {x0 = ${this.x0}, y0 = ${this.y0}, width = ${this.width}, height = ${this.height}}`)
}
}


    export {Circle, Rectangle, Triangle, Ellipse}
    export default demo

