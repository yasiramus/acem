import { zoo } from './zoo.js';

describe('zoo', () => {
  it('should work', () => {
    expect(zoo()).toMatch(/^\[ZOO\] .+ says .+!$/);
  });
});
