const admin = require('firebase-admin')
const serviceAccount = require('./assets/vue2d-vtf-firebase-adminsdk-ar060-d3eb5dc0ea.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore()

module.exports = db



