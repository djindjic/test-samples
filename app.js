"use strict";

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var Test = (function () {
  function Test() {
    _classCallCheck(this, Test);
  }

  _createClass(Test, {
    hello: {
      value: function hello() {
        console.log("hello");
      }
    }
  });

  return Test;
})();

var test = new Test();
test.hello();
