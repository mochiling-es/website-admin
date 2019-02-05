const menus = {
  main: `
    webadmin [command] <options>

    grant .............. grant user
    dismiss ............ revoke grant user
    help ............... show help menu for a command`,

  grant: `
    webadmin grant <options>

    --user, -u ..... user's email`,

  dismiss: `
    webadmin dismiss <options>

    --user, -u ..... user's email`,
}

module.exports = (args) => {
  const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[0]

  console.log(menus[subCmd] || menus.main)
  process.exit(1)
}
