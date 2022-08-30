import About, { add } from "./About";

describe('About Component', () => {  
  it('should be available', () => {
    expect(About).toBeDefined();
  });

  it('should add two numbers properly', () => {
    // sometimes multiple expectations are needed
    expect(add(10, 20)).toEqual(30);
    expect(add(5, 2)).toEqual(7);
  });
})
  