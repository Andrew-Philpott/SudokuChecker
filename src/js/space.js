export class Space {
    constructor(x, y, value) {
        this.x = x;
        this.y = y;
        this.value = value;
    }

    getSpaceCoordinates() {
      return [this.x, this.y];
    }
    
    getSpaceValue() {
      return this.value;
    }
}