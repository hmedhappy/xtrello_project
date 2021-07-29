const {app} = require('./src/Config/express')


module.exports = {
  server: {
    port: 4002, // default,
    applyMiddleware: {
      app,
      path: '/', // default
    },
  },
};