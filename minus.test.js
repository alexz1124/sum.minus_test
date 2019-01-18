const minus = require('./minus');
// 3 - 1 เท่ากับ 2
test('3 - 1 เท่ากับ 2', ()=> {
  expect(minus(3,1)).toBe(2);
});

// 20 - 1 เท่ากับ 20
test('20 - 1 เท่ากับ 20', ()=>{
  expect(minus(20,1)).toBe(19)
})
// 2 - 5 เท่ากับ ?
test('7 - 5 เท่ากับ 2', ()=> {
  expect(minus(7,5)).toBe(2)
})
// ทำอีก 3 อัน โดยการพิมพ์เอง อย่า copy
test('11 - 11 เท่ากับ 0', ()=>{
  expect(minus(11,11)).toBe(0)
})
test('0 - 0 เท่ากับ 0', ()=> {
  expect(minus(0,0)).toBe(0)
})
test('32 - 3 เท่ากับ 29', ()=> {
  expect(minus(32,3)).toBe(29)
})