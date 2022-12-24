import pug from 'pug'
import { transform } from 'camaro'
import XmlError from './XmlError.mjs'

export {
  interpolateXml,
  xmlToJSON
}

function interpolateXml (templatePath, data = {}) {
  if (!templatePath) {
    const error = { templatePath, data }
    throw new XmlError('Invalid interpolateXml Arguments: templatePath cannot be blank', error)
  }

  const template = pug.compileFile(templatePath)
  const xml = template(data)
  return xml
}

async function xmlToJSON (xml, xPathTemplate) {
  if (!xml) {
    const error = { xml, xPathTemplate }
    throw new XmlError('Invalid xmlToJSON Arguments: xml cannot be blank', error)
  }

  if (!xPathTemplate || !Object.keys(xPathTemplate).length) {
    const error = { xml, xPathTemplate }
    throw new XmlError('Invalid xmlToJSON Arguments: xPathTemplate cannot be blank', error)
  }

  return transform(xml, xPathTemplate)
}
