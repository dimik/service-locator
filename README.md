Service Locator
============

Simple javascript implementation of dependency injection approach
using Service Locator pattern.

Installing
------------
    $ npm install service-locator

Description
------------
Simple javascript implementation of the Service Locator.
Service Locator is a kind of dependency injection pattern.
The Service Locator pattern does not describe how to instantiate the services.
It describes a way to register services and locate them.
A Service Locator should be able to locate a service without knowing its concrete type.
For example, it might use a string key.
This allows you to replace the concrete implementation of the dependency without modifying the classes.

Example
------------
```javascript
var Locator = require("service-locator"),
    loc = new Locator(),
    helloService = {
        say : function (name) { return 'Hello ' + (name || 'World') }
    }

// Registering service
loc.register('hello', helloService);

// Then class which depends of the hello service
// take locator in constuctor call
function SomeClass(locator) {
    var hello = locator.resolve('hello');

    this.say = function () {
        var name = this.constructor.name;
        return hello.say(name);
    };
};

// Create instance of the SomeClass
var some = new SomeClass(loc);
console.log(some.say()); // Hello SomeClass
```

License
------------
Copyright (c) 2012 Dmitry Poklonskiy &lt;dimik@ya.ru&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

