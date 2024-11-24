import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'

export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {

    const response = {} as HttpResponse

    if(!httpRequest.body.name) {
      response.statusCode = 400
      response.body = new MissingParamError('name')
    }

    if(!httpRequest.body.email) {
      response.statusCode = 400
      response.body = new MissingParamError('email')
    }

    return response
  }
}
