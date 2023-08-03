import { SERVICE } from './CONFIG'
import { XmlErrorMap } from './TYPES'

/** @ignore */
const DEFAULT_ERROR_MSG = 'Xml Utils Error'
/** @ignore */
const DEFAULT_ERROR_STATUS_CODE = 500
/** @ignore */
const DEFAULT_ERROR_CODE = 'XML_UTILS_ERROR'

/**
 * Error class whose instance is thrown in case of any error.
 *
 * @class
 * @typedef {XmlError}
 * @extends {Error}
 */
export class XmlError extends Error {
  /**
   * Flag to identify if error is a custom error.
   */
  readonly _isCustomError = true
  /**
   * Flag to identoify if error is a XmlError.
   */
  readonly _isXmlError = true
  /**
   * Service from which Error is generated.
   */
  service: string = SERVICE
  /**
   * Error's message string.
   */
  message: string = DEFAULT_ERROR_MSG
  /**
   * HTTP status code associated with the error.
   */
  statusCode: number = DEFAULT_ERROR_STATUS_CODE
  /**
   * Error Code.
   */
  errorCode: string = DEFAULT_ERROR_CODE
  /**
   * Error object.
   */
  error?: any

  /**
   * Creates an instance of XmlError.
   *
   * @constructor
   * @param [e] Any Error instance to wrap with XmlError.
   * @param [eMap] XmlErrorMap to rewrap error for better understanding.
   */
  constructor(e?: any, eMap?: XmlErrorMap) {
    if (e._isCustomError && !eMap) {
      return e
    }

    super()

    this.message = eMap?.message || e?.message || DEFAULT_ERROR_MSG
    this.statusCode =
      eMap?.statusCode || e?.statusCode || DEFAULT_ERROR_STATUS_CODE
    this.errorCode =
      eMap?.errorCode || e?.errorCode || e?.code || DEFAULT_ERROR_CODE
    this.error = e
  }
}
