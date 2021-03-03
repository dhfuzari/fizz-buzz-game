import FizzBuzzMessage from './fizzBuzzMessages';

const fizzBuzzMessage = FizzBuzzMessage();

const FizzBuzz = (number) => {
  if (number === 0) return 0;
  if (number % 3 === 0 && number % 5 === 0) return fizzBuzzMessage.fizzBuzz;
  if (number % 3 === 0) return fizzBuzzMessage.fizz;
  if (number % 5 === 0) return fizzBuzzMessage.buzz;
  return number;
};

export default FizzBuzz;
