import { XmlErrorMap } from './TYPES'

/** @ignore */
export const INVALID_INTERPOLATE_XML_ARGS_ERROR: XmlErrorMap = {
  message: 'Invalid interpolateXml Arguments: templatePath cannot be blank',
  statusCode: 500,
  errorCode: 'XmlUtils::INVALID_INTERPOLATE_XML_ARGS'
}

/** @ignore */
export const INVALID_XML_TO_JSON_XML_ARGS_ERROR: XmlErrorMap = {
  message: 'Invalid xmlToJSON Arguments: xml cannot be blank',
  statusCode: 500,
  errorCode: 'XmlUtils::INVALID_XML_TO_JSON_ARGS'
}

/** @ignore */
export const INVALID_XML_TO_JSON_XPATH_ARGS_ERROR: XmlErrorMap = {
  message: 'Invalid xmlToJSON Arguments: xPathTemplate cannot be blank',
  statusCode: 500,
  errorCode: 'XmlUtils::INVALID_XML_TO_JSON_ARGS'
}

/** @ignore */
export const INVALID_ADD_ATTACHMENT_XML_ARGS_ERROR: XmlErrorMap = {
  message: 'Invalid addAttachment Arguments: xml cannot be blank',
  statusCode: 500,
  errorCode: 'XmlUtils::INVALID_ADD_ATTACHMENT_XML_ARGS'
}

/** @ignore */
export const INVALID_ADD_ATTACHMENT_XML_CONTENT_TYPE_ARGS_ERROR: XmlErrorMap = {
  message: 'Invalid addAttachment Arguments: xmlContentType cannot be blank',
  statusCode: 500,
  errorCode: 'XmlUtils::INVALID_ADD_ATTACHMENT_XML_CONTENT_TYPE_ARGS'
}

/** @ignore */
export const INVALID_ADD_ATTACHMENT_ATTACHMENT_ARGS_ERROR: XmlErrorMap = {
  message:
    'Invalid addAttachment Arguments: attachment cannot be blank and must be valid',
  statusCode: 500,
  errorCode: 'XmlUtils::INVALID_ADD_ATTACHMENT_ATTACHMENT_ARGS'
}
