import { transform } from 'camaro'
import pug, { LocalsObject } from 'pug'
import mimeTypes from 'mime-types'
import { randomId } from '@am92/utils-string'

import XmlError from './XmlError'
import {
  INVALID_ADD_ATTACHMENT_ATTACHMENT_ARGS_ERROR,
  INVALID_ADD_ATTACHMENT_XML_ARGS_ERROR,
  INVALID_ADD_ATTACHMENT_XML_CONTENT_TYPE_ARGS_ERROR,
  INVALID_INTERPOLATE_XML_ARGS_ERROR,
  INVALID_XML_TO_JSON_XML_ARGS_ERROR,
  INVALID_XML_TO_JSON_XPATH_ARGS_ERROR
} from './ERRORS'
import { FileAttachment, MultipartXml } from './TYPES'

export default class XmlUtils {
  /**
   * Function to interpolate an XML string with data.
   *
   * @param templatePath File path to the XML pug file.
   * @param [data] JSON data object to interpolate the XML.
   * @returns
   */
  static interpolateXml(templatePath: string, data?: LocalsObject): string {
    if (!templatePath) {
      throw new XmlError(undefined, INVALID_INTERPOLATE_XML_ARGS_ERROR)
    }

    const template = pug.compileFile(templatePath)
    const xml = template(data)
    return xml
  }

  /**
   * Function to convert XML string to JSON object
   *
   * @async
   * @param xml XML string.
   * @param xPathTemplate JSON template object.
   * @returns
   */
  static async xmlToJSON(xml: string, xPathTemplate: object): Promise<any> {
    if (!xml) {
      throw new XmlError(undefined, INVALID_XML_TO_JSON_XML_ARGS_ERROR)
    }

    if (!xPathTemplate || !Object.keys(xPathTemplate).length) {
      const error = { xml, xPathTemplate }
      throw new XmlError(error, INVALID_XML_TO_JSON_XPATH_ARGS_ERROR)
    }

    return transform(xml, xPathTemplate)
  }

  /**
   * Function to append a file attachment to XML string.
   *
   * @param xml XML string data
   * @param xmlContentType XML Content-Type header value.
   * @param attachment Attachment to be appended to the XML string
   * @returns
   */
  static addAttachment(
    xml: string,
    xmlContentType: string,
    attachment: FileAttachment
  ): MultipartXml {
    if (!xml) {
      throw new XmlError(undefined, INVALID_ADD_ATTACHMENT_XML_ARGS_ERROR)
    }

    if (!xmlContentType) {
      throw new XmlError(
        undefined,
        INVALID_ADD_ATTACHMENT_XML_CONTENT_TYPE_ARGS_ERROR
      )
    }

    if (!attachment || !attachment.fileName || !attachment.file) {
      throw new XmlError(
        undefined,
        INVALID_ADD_ATTACHMENT_ATTACHMENT_ARGS_ERROR
      )
    }

    const { fileName, file } = attachment
    const mimeType = attachment.mimeType || mimeTypes.lookup(fileName)
    const boundary = `----=_Part_1_${randomId(16)}`
    const startContentId = `<rootpart.${randomId(16)}>`
    const fileString = _getFileString(file)

    const multipartXml = [
      `--${boundary}`,
      `Content-Type: ${xmlContentType}; charset=UTF-8`,
      'Content-Transfer-Encoding: 8bit',
      `Content-ID: ${startContentId}`,
      '',
      xml,
      `--${boundary}`,
      `Content-Type: ${mimeType}; name=${fileName}`,
      'Content-Transfer-Encoding: base64',
      `Content-ID: <${fileName}-${randomId(16)}>`,
      '',
      fileString,
      `--${boundary}--`
    ].join('\n')

    const headers = {
      'Content-Type': `multipart/related; type="${xmlContentType}"; start="${startContentId}"; boundary="${boundary}"`
    }

    const data: MultipartXml = {
      multipartXml,
      headers,
      boundary,
      startContentId
    }

    return data
  }
}

/**
 * Internal function to convert file to a Base64 string.
 *
 * @ignore
 * @param file File data as Base64 string or ArrayBuffer.
 * @returns
 */
function _getFileString(file: string | ArrayBuffer): string {
  if (typeof file === 'string') {
    return file
  }

  if (Buffer.isBuffer(file)) {
    return file.toString('base64')
  }

  return ''
}
