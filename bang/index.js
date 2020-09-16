let compose = (...middlewares) => {
  if (middlewares.length === 0) return (args) => args
  else if (middlewares.length === 1) return middlewares[0]
  else
    return middlewares.reduce((res, mid) => (...args) => {
      return mid(res(args))
    })
}

module.exports = compose
