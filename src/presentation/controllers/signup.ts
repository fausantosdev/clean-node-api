import { HttpRequest, HttpResponse } from '../protocols/http'

export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {

    const response = {} as HttpResponse

    if(!httpRequest.body.name) {
      response.statusCode = 400
      response.body = new Error('Missing param: name')
    }

    if(!httpRequest.body.email) {
      response.statusCode = 400
      response.body = new Error('Missing param: email')
    }

    return response
  }
}
