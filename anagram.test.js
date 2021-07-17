const { TestWatcher } = require('jest');
const isAnagram = require('./anagram');

test('isAnagram function exists', () => {
  expect(typeof isAnagram).toEqual('function');
});

test('Cinema is an anagram of iceman', () => {
  expect(isAnagram('cinema', 'iceman')).toBeTruthy();
});

test('Dormitory id an anagram of dirty room##', () => {
  expect(isAnagram('Dormitory', 'dirty room##')).toBeTruthy();
});