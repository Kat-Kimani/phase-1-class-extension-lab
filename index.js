// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides
    }
    get countSides() {
        return this.sides.length

    }

    get perimeter() {
        let sum = 0
        for (let i = 0; i < this.sides.length; i++) {
            sum += this.sides[i]
        }
        return sum
    }
}

class Triangle extends Polygon {
    
    get isValid() {
        if (this.sides.length !== 3) {
            return false;
        }
        const [a, b, c] = this.sides;
        return a + b > c && a + c > b && b + c > a;

      }

    }


class Square extends Polygon {
    get isValid() {
        if (this.sides.length=== 4 && (new Set(this.sides).size === 1)){
            return true
        } else {

            return false
        }
    }

    get area(){
        return this.sides[0] ** 2  
    }
}


