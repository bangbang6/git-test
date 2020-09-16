test('测试库文件', () => {
  const compose = require('../index.js')
  function a(str) {
    return str + '1'
  }
  function b(str) {
    return str + '1'
  }
  function c(str) {
    return str + '1'
  }
  expect(compose(a, b, c)('1')).toBe('1111')
})
