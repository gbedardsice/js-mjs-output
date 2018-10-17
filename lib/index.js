"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "foo", {
  enumerable: true,
  get: function get() {
    return _submodule.foo;
  }
});
Object.defineProperty(exports, "bar", {
  enumerable: true,
  get: function get() {
    return _submodule.bar;
  }
});

var _submodule = require("./submodule");