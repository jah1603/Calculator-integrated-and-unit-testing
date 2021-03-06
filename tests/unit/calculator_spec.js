var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it should respond with 8 when the user adds 5 and 3 together', function(){
    calculator.previousTotal=5;
    calculator.add(3);
    assert.strictEqual(calculator.runningTotal, 8 );
  })

  it('it should respond with 6 when the user subtracts 9 from 15', function(){
    calculator.previousTotal = 15;
    calculator.subtract(9);
    assert.strictEqual(calculator.runningTotal, 6);
  })

  it('it should respond with 63 when the user multiplies 7 and 9 together', function(){
    calculator.previousTotal = 7;
    calculator.multiply(9)
    assert.strictEqual(calculator.runningTotal, 63);

  })

  it('it should respond with 2 when the user divides 84 by 42', function(){
    calculator.previousTotal = 84;
    calculator.divide(42)
    assert.strictEqual(calculator.runningTotal, 2);
  })

  it('it should be able to produce a concatenated number in response to sequential button presses', function(){
    calculator.numberClick(4);
    calculator.numberClick(3);
    assert.strictEqual(calculator.runningTotal, 43);

  })

  it('it should be able to chain multiple operations', function(){
    calculator.runningTotal = 3;
    calculator.operatorClick('+');
    calculator.operatorClick('+');
    calculator.operatorClick('+');
    calculator.operatorClick('+');
    assert.strictEqual(calculator.runningTotal, 24);

})

  it('it should clear running total without affecting operation at hand', function(){
    calculator.runningTotal = 5;
    calculator.operatorClick('+');
    calculator.numberClick(6);
    calculator.operatorClick('=');
    calculator.operatorClick('+');
    calculator.numberClick(3);
    calculator.clearClick()
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 11);

  })

});
