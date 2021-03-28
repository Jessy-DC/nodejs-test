const firstModule = require('../first-module')

test('should equal Hello world', () => {
    expect(firstModule.hello).toEqual('Hello world')
})