"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INVALID_XML_TO_JSON_XPATH_ARGS_ERROR = exports.INVALID_XML_TO_JSON_XML_ARGS_ERROR = exports.INVALID_INTERPOLATE_XML_ARGS_ERROR = void 0;
var INVALID_INTERPOLATE_XML_ARGS_ERROR = {
  message: 'Invalid interpolateXml Arguments: templatePath cannot be blank',
  statusCode: 500,
  errorCode: 'XmlUtils::INVALID_INTERPOLATE_XML_ARGS'
};
exports.INVALID_INTERPOLATE_XML_ARGS_ERROR = INVALID_INTERPOLATE_XML_ARGS_ERROR;
var INVALID_XML_TO_JSON_XML_ARGS_ERROR = {
  message: 'Invalid xmlToJSON Arguments: xml cannot be blank',
  statusCode: 500,
  errorCode: 'XmlUtils::INVALID_XML_TO_JSON_ARGS'
};
exports.INVALID_XML_TO_JSON_XML_ARGS_ERROR = INVALID_XML_TO_JSON_XML_ARGS_ERROR;
var INVALID_XML_TO_JSON_XPATH_ARGS_ERROR = {
  message: 'Invalid xmlToJSON Arguments: xPathTemplate cannot be blank',
  statusCode: 500,
  errorCode: 'XmlUtils::INVALID_XML_TO_JSON_ARGS'
};
exports.INVALID_XML_TO_JSON_XPATH_ARGS_ERROR = INVALID_XML_TO_JSON_XPATH_ARGS_ERROR;