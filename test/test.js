var ServiceLocator = require('..');

exports.testIsConstructor = function (test) {
    test.equal(typeof ServiceLocator, 'function');

    test.done();
};

exports.testInstanceProperties = function (test) {
    var locator = new ServiceLocator();

    test.equal(typeof locator.register, 'function');
    test.equal(typeof locator.resolve, 'function');
    test.equal(typeof locator.reset, 'function');

    test.done();
};

exports.testRegisterResolve = function (test) {
    var locator = new ServiceLocator(),
        service = { foo : function () { return 'foo' } };

    locator.register('foo', service);
    test.equal(locator.resolve('foo'), service);
    test.equal(locator.resolve('foo').foo(), 'foo');

    test.done();
};

exports.testReset = function (test) {
    var locator = new ServiceLocator(),
        service = { foo : function () { return 'foo' } };

    locator.register('foo', service);
    test.equal(locator.resolve('foo'), service);
    locator.reset();
    test.equal(locator.resolve('foo'), undefined);

    test.done();
};
