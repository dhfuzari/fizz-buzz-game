import { expect } from 'chai';
import FizzBuzzMessages from '../fizzBuzzMessages';

describe('Foo function', () => {
  context('Possible returnin values', () => {
    it('should return a FizzBuzzMessages object', () => {
      expect(FizzBuzzMessages()).to.include.all.keys('fizz', 'buzz', 'fizzBuzz');
    });
  });
});
