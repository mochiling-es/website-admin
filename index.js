const minimist = require('minimist')
const DEFAULT_COMMAND = 'help'
module.exports = () => {
  const args = minimist(process.argv.slice(2))
  const cmd = args._[0] || DEFAULT_COMMAND
  
  switch (cmd) {
    case 'help':
      require('./commands/help')(args)
      break
    case 'grant':
      require('./commands/grant')(args)
      break
    case 'dismiss':
      require('./commands/dismiss')(args)
      break
    default:
      console.error(`"${cmd}" is not a valid command!`)
      break
  }
}

// const admin = require('firebase-admin');
// const serviceAccount = require('./drd4-7r-firebase-adminsdk-mn5sd-287ce04e19.json');
// const email = 'buti@7r.ventures'

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: 'https://drd4-7r.firebaseio.com'
// })

// admin.auth().getUserByEmail(email)
//   .then(function(userRecord) {
//     // See the UserRecord reference doc for the contents of userRecord.
//     console.log("Successfully fetched user data:", userRecord.toJSON());
//   })
//   .catch(function(error) {
//     console.log("Error fetching user data:", error);
//   });

// /*admin.auth().setCustomUserClaims('EDDCdLntuahwwwkvNHRP4JcU9bQ2', { admin: true }).then(() => {
//   // The new custom claims will propagate to the user's ID token the
//   // next time a new one is issued.
//   console.log('hola')
// });*/
