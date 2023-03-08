export default class XmlError extends Error {
    constructor(e: {}, eMap: any);
    _isCustomError: boolean;
    _isXmlError: boolean;
    service: string;
    message: any;
    statusCode: any;
    errorCode: any;
    error: {};
}
