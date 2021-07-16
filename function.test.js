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

test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

test('There is no I in team', () => {
  expect('team').not.toMatch(/i/i);
});

test('Admin should be in usernames', () => {
  usernames = ['john', 'karen', 'admin'];
  expect(usernames).toContain('admin');
});