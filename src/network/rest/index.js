import { get } from 'network/rest/get'
import { post } from 'network/rest/post'

let instance

export const setup = () => {
  instance = ({
    get: get(),
    post: post(),
  })

  return instance
}

export const rest = () => {
  if (!instance) {
    throw new Error('It seems that rest client was not setup yet...')
  }

  return instance
}
