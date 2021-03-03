import { expect } from 'chai';
import FizzBuzz from '../index';

describe('FizzBuzz', () => {
  context('Core rulles game', () => {
    it('should return "Fizz" when multiple of 3', () => {
      expect(FizzBuzz(3)).to.be.equal('Fizz');
      expect(FizzBuzz(6)).to.be.equal('Fizz');
      expect(FizzBuzz(9)).to.be.equal('Fizz');
    });
    it('should return "Buzz" when multiple of 5', () => {
      expect(FizzBuzz(5)).to.be.equal('Buzz');
      expect(FizzBuzz(10)).to.be.equal('Buzz');
    });
    it('should return "FizzBuzz" when multiple of 3 and multiple of 5', () => {
      expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
      expect(FizzBuzz(30)).to.be.equal('FizzBuzz');
      expect(FizzBuzz(45)).to.be.equal('FizzBuzz');
    });
    it('should return the number when non-multiple', () => {
      expect(FizzBuzz(1)).to.be.equal(1);
      expect(FizzBuzz(2)).to.be.equal(2);
      expect(FizzBuzz(4)).to.be.equal(4);
    });
    it('should return 0 when 0', () => {
      expect(FizzBuzz(0)).to.be.equal(0);
    });
  });
});
