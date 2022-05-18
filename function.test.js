
const stringLength = require('./stringlength')
test('count string length', () =>{
    expect(stringLength('richard')).toBe(7)
})

 const reverseString = require('./reverseSrting')
 test('reverse string backward', ()=> {
     expect(reverseString('richard')).toBe('drahcir')
 })

 const capitalizedString = require('./capitalized')
 test('capitalizec first letter', () => {
     expect(capitalizedString('richard friday')).toBe('Richard friday')
 })

 const calculation = require('./calculation')
 describe('calculation', () => {
     test('add', () =>{
         expect(calculation.addNum(5, 5)).toBe(10)
     })
test('subtract', () => {
    expect(calculation.subNum(10, 5)).toBe(5)
})

test('multiply', () => {
    expect(calculation.multiplyNum(3, 5)).toBe(15)
})

test('divid', () =>{
    expect(calculation.dividNum(10, 5)).toBe(2)
})
 })