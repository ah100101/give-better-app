const admin = require('firebase-admin')

const initializeApp = key => {
  let serviceAccount = require(key)

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  })

  return admin
}

module.exports = {
  initializeApp
}
