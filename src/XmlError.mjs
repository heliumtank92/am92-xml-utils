export default class XmlError extends Error {
  constructor (message, error) {
    super(message)

    this._isXmlError = true
    this.message = message
    this.statusCode = 500
    this.error = error

    this.toJSON = this.toJSON.bind(this)
  }

  toJSON () {
    const { message, statusCode, error } = this
    return { message, statusCode, error }
  }
}
