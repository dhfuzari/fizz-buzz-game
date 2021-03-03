import { expect } from 'chai';
import FizzBuzzMessages from '../fizzBuzzMessages';

describe('FizzBuzzMessage function', () => {
  context('Possible returning values', () => {
    const fizzBuzzMessages = FizzBuzzMessages();
    it('should return a FizzBuzzMessages object', () => {
      expect(fizzBuzzMessages).to.include.all.keys('fizz', 'buzz', 'fizzBuzz');
    });
    it('should have the value "fizz", "buzz" and "FizzBuzz"', () => {
      expect(fizzBuzzMessages.fizz).to.be.equal('Fizz');
      expect(fizzBuzzMessages.buzz).to.be.equal('Buzz');
      expect(fizzBuzzMessages.fizzBuzz).to.be.equal('FizzBuzz');
    });
  });
});
