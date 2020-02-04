import { Space } from './../src/js/space.js';

describe('Space', () => {
    let space;
  
    test('Should be able to make a space object', () => {
    let space = new Space();
      expect(space instanceof Space).toEqual(true);
    });
});