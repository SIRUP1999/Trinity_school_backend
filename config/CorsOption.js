const allowedOrigins = require('./AllowedOrigins')

const CorsOption = {
  origins: (origins, callback) => {
    if (allowedOrigins.indexOf(origins) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(Error('Not Allowed By Cors '))
    }
  },
  Credential: true,
  optionsSucessStatus: 200,
}

module.exports = CorsOption
