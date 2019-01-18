const sum = require('./sum');
// 1 + 2 เท่ากับ 3
test('1 + 2 เท่ากับ 3', ()=> {
  expect(sum(1,2)).toBe(3);
});

// 20 + 1 เท่ากับ 21
test('20 + 1 เท่ากับ 21', ()=>{
  expect(sum(20,1)).toBe(21)
})
// 2 + 5 เท่ากับ ?
test('2 + 5 เท่ากับ 7', ()=> {
  expect(sum(2,5)).toBe(7)
})
// ทำอีก 3 อัน โดยการพิมพ์เอง อย่า copy
test('11 + 11 เท่ากับ 22', ()=>{
  expect(sum(11,11)).toBe(22)
})
test('0 + 0 เท่ากับ 0', ()=> {
  expect(sum(0,0)).toBe(0)
})
test('32 + 23 เท่ากับ 55', ()=> {
  expect(sum(32,23)).toBe(55)
})