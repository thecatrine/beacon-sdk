import { ErrorResponse, DAppClient, SignPayloadResponseOutput } from '..'

const client = new DAppClient({ name: 'My Sample DApp' })

client
  .requestSignPayload({
    payload: 'any string that will be signed'
  })
  .then((response: SignPayloadResponseOutput) => {
    console.log('signature', response.signature)
  })
  .catch((signPayloadError: ErrorResponse) => console.error(signPayloadError))
