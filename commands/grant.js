const admin = require('firebase-admin')
const ora = require('ora')
const serviceAccount = require('../mochiling-production-firebase-adminsdk-feuvo-6ab7c8cba4.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://mochiling-production.firebaseio.com'
})

module.exports = async (args) => {
  const spinner = ora().start()
  const email = args.user || args.u
  try {
    const user = await admin.auth().getUserByEmail(email)
    await admin.auth().setCustomUserClaims(user.uid, { admin: true })
    spinner.stop()

    console.log('\nDone. This change could take up to one minute.')
    console.log('And remember that power brings responsability. Use it wisely.')
  } catch (err) {
    spinner.stop()
    
    console.error(err)
  }

  process.exit(1)
}
