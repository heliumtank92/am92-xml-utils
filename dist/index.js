"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interpolateXml = interpolateXml;
exports.xmlToJSON = xmlToJSON;
var _pug = _interopRequireDefault(require("pug"));
var _camaro = require("camaro");
var _XmlError = _interopRequireDefault(require("./XmlError.js"));
var _ERRORS = require("./ERRORS.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function interpolateXml(templatePath) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!templatePath) {
    var error = {
      templatePath,
      data
    };
    throw new _XmlError.default(error, _ERRORS.INVALID_INTERPOLATE_XML_ARGS_ERROR);
  }
  var template = _pug.default.compileFile(templatePath);
  var xml = template(data);
  return xml;
}
function xmlToJSON(_x, _x2) {
  return _xmlToJSON.apply(this, arguments);
}
function _xmlToJSON() {
  _xmlToJSON = _asyncToGenerator(function* (xml, xPathTemplate) {
    if (!xml) {
      var error = {
        xml,
        xPathTemplate
      };
      throw new _XmlError.default(error, _ERRORS.INVALID_XML_TO_JSON_XML_ARGS_ERROR);
    }
    if (!xPathTemplate || !Object.keys(xPathTemplate).length) {
      var _error = {
        xml,
        xPathTemplate
      };
      throw new _XmlError.default(_error, _ERRORS.INVALID_XML_TO_JSON_XPATH_ARGS_ERROR);
    }
    return (0, _camaro.transform)(xml, xPathTemplate);
  });
  return _xmlToJSON.apply(this, arguments);
}