# Mochiling admin

This project includes the command line to grant and dismiss user's privileges to use the backoffice.


## Caveats

You will need firestore admin auth file to run the commands. Ask for it to your colleagues.


## CLI

The project includes a `bin` folder with the command line interface. To run it:

```
./bin/webadmin
```

If you get an error, it's likely the file is not executable. Let's fixit running this in your
terminal:

```
chmod +x bin/webadmin
```

If you want to get rid of `./bin/` part, run `npm link` from the root folder. Then you will be able
to just enter `webadmin`.

## Commands

```
webadmin [command] <options>
```

The next commands are available:
- grant .............. grant user
- dismiss ............ revoke grant user
- help ............... show help menu for a command

To grant permissions:

```
webadmin grant -u user@example.com
```

To remove permission:

```
webadmin dismiss -u user@example.com
```