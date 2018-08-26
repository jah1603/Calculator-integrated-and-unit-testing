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

  it('it should subtract 4 from 7 and get 3', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.strictEqual(calculator.runningTotal, 3);
  })

  it('it should multiply 3 by 5 and get 15', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5)
    assert.strictEqual(calculator.runningTotal, 15);

  })

  it('it should divide 21 by 7 and get 3', function(){
    calculator.previousTotal = 21;
    calculator.divide(7)
    assert.strictEqual(calculator.runningTotal, 3);
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
