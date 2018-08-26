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

  it('it should concatenate multiple number button clicks', function(){
    calculator.numberClick(1);
    calculator.numberClick(3);
    assert.strictEqual(calculator.runningTotal, 13);

  })

  it('it should chain multiple operations together', function(){
    calculator.runningTotal = 2;
    calculator.operatorClick('+');
    calculator.operatorClick('+');
    calculator.operatorClick('+');
    assert.strictEqual(calculator.runningTotal, 8);

})

  it('it should clear the running total without affecting the calculation', function(){
    calculator.runningTotal = 0;
    calculator.operatorClick('+');
    calculator.numberClick(3);
    calculator.operatorClick('=');
    calculator.operatorClick('+');
    calculator.numberClick(5);
    calculator.clearClick()
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 3);

  })

});
