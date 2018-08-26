var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('it should continually update the running total displayed on screen in response to subsequent clicks', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number6')).click();
  element(by.css('#number1')).click();
  element(by.css('#number6')).click();
  element(by.css('#number1')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('6161')
})

it('it should display the result of the operation upon click', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number7')).click();
  element(by.css('#operator_add')).click();
  element(by.css('#number6')).click();
  element(by.css('#operator_add')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('26')
});

it('it should let the user chain operations', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number6')).click();
  element(by.css('#operator_add')).click();
  element(by.css('#operator_add')).click();
  element(by.css('#operator_add')).click();
  element(by.css('#operator_add')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('96')
});

it('it should give expected output for a range of numbers__very_large', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number6')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#operator_multiply')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('7.958661109946401e+24')
})


  it('it should give expected output for a range of numbers__Negative', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number6')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number2')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-18')
  })
//
//   it('it should give expected output for a range of numbers__decimals', function(){
//     running_total = element(by.css('#running_total'))
//     element(by.css('#number2')).click();
//     element(by.css('#operator_divide')).click();
//     element(by.css('#number3')).click();
//     element(by.css('#operator_equals')).click();
//     expect(running_total.getAttribute('value')).to.eventually.equal('0.6666666666666666')
//   })
//
//   it('it should give expected output for a range of numbers__decimals', function(){
//     running_total = element(by.css('#running_total'))
//     element(by.css('#number2')).click();
//     element(by.css('#operator_divide')).click();
//     element(by.css('#number0')).click();
//     element(by.css('#operator_equals')).click();
//     expect(running_total.getAttribute('value')).to.eventually.equal('NaN')
//   })

});
