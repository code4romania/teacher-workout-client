let instance

export const setup = () => {
  instance = ({
    get: () => undefined,
    post: () => undefined,
  })

  return instance
}

export const rest = () => {
  if (!instance) {
    throw new Error('It seems that rest client was not setup yet...')
  }

  return instance
}
