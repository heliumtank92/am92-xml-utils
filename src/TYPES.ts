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
 * @typedef {XmlWithAttachment}
 */
export interface XmlWithAttachment {
  /**
   * Multipart XML string with XML data and file attachment
   */
  multipartXml: string
  /**
   * Multipart boundary.
   */
  boundary: string
  /**
   * Multipart XML string's start 'Content-ID'
   */
  startContentId: string
  /**
   * Multipart Content-Type header value.
   */
  contentType: string
}
