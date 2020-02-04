import { Space } from './../src/js/space.js';

describe('Space', () => {
    let space;
  
    test('Should be able to make a space object', () => {
    let space = new Space();
      expect(space instanceof Space).toEqual(true);
    });

    test('Should be able to make a space object with x and y coordinates and a number value', () => {
    let xCoordinateValue = 5;
    let yCoordinateValue = 6;
    let valueOfSpace = 4;
    let space = new Space(xCoordinateValue, yCoordinateValue, valueOfSpace);
    //let space = new Space(xCoordinateValue, yCoordinateValue, valueOfSpace);
    let valueOfXCoordinateFromSpaceObject = space.x;
    let valueOfYCoordinateFromSpaceObject = space.y;
    let valueOfValueFromSpaceObject = space.value;

        expect(xCoordinateValue).toEqual(valueOfXCoordinateFromSpaceObject);
        expect(yCoordinateValue).toEqual(valueOfYCoordinateFromSpaceObject);
        expect(valueOfSpace).toEqual(valueOfValueFromSpaceObject);
    });
});