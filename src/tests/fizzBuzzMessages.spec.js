import { expect } from 'chai';
import FizzBuzzMessages from '../fizzBuzzMessages';

describe('FizzBuzzMessage function', () => {
  context('Possible returning values', () => {
    it('should return a FizzBuzzMessages object', () => {
      expect(FizzBuzzMessages()).to.include.all.keys('fizz', 'buzz', 'fizzBuzz');
    });
  });
});
