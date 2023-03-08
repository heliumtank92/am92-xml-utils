import pug from 'pug'
import { transform } from 'camaro'
import XmlError from './XmlError.mjs'
import {
  INVALID_INTERPOLATE_XML_ARGS_ERROR,
  INVALID_XML_TO_JSON_XML_ARGS_ERROR,
  INVALID_XML_TO_JSON_XPATH_ARGS_ERROR
} from './ERRORS.mjs'

export {
  interpolateXml,
  xmlToJSON
}

function interpolateXml (templatePath, data = {}) {
  if (!templatePath) {
    const error = { templatePath, data }
    throw new XmlError(error, INVALID_INTERPOLATE_XML_ARGS_ERROR)
  }

  const template = pug.compileFile(templatePath)
  const xml = template(data)
  return xml
}

async function xmlToJSON (xml, xPathTemplate) {
  if (!xml) {
    const error = { xml, xPathTemplate }
    throw new XmlError(error, INVALID_XML_TO_JSON_XML_ARGS_ERROR)
  }

  if (!xPathTemplate || !Object.keys(xPathTemplate).length) {
    const error = { xml, xPathTemplate }
    throw new XmlError(error, INVALID_XML_TO_JSON_XPATH_ARGS_ERROR)
  }

  return transform(xml, xPathTemplate)
}
