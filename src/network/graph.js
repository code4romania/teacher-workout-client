let instance

export const setup = () => {
  instance = ({
    mutate: () => undefined,
    query: () => undefined,
  })

  return instance
}

export const graph = () => {
  if (!instance) {
    throw new Error('It seems that graph client was not setup yet...')
  }

  return instance
}
