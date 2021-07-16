const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4)
});

test('Adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5)
});

test('Should be falsy', () => {
  expect(functions.checkValue(undefined)).toBeFalsy()
});

test('User should be Pau Garcia object', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Pau', 
    lastName: 'Garcia'
  })
});