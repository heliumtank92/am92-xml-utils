import { OutgoingHttpHeaders } from 'http'

/**
 * Type defination for error map to be passed to XmlError.
 *
 * @typedef {XmlErrorMap}
 */
export type XmlErrorMap = {
  message?: string
  statusCode?: number
  errorCode?: string
}

/**
 * Interface for attachment input to addAttachment utility.
 *
 * @interface
 * @typedef {FileAttachment}
 */
export interface FileAttachment {
  /**
   * Name of file attachment.
   */
  fileName: string
  /**
   * File data as Base64 string or ArrayBuffer.
   */
  file: string | ArrayBuffer
  /**
   * MIME type of file attachment.
   */
  mimeType?: string
}

/**
 * Interface for return value of addAttachment utility.
 *
 * @interface
 * @typedef {MultipartXml}
 */
export interface MultipartXml {
  /**
   * Multipart XML string with XML data and file attachment
   */
  multipartXml: string
  /**
   * Multipart XML Header
   */
  headers: { [key: string]: string }
  /**
   * Multipart boundary.
   */
  boundary: string
  /**
   * Multipart XML string's start 'Content-ID'
   */
  startContentId: string
}
