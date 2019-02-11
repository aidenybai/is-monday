const isMonday= require('./../src/index');

test('returns if today is tuesday', () => {
  const day = new Date().getDay();
  expect(isMonday()).toEqual(day === 2);
});