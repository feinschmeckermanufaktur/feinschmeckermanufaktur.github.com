# feinschmeckermanufaktur

## Jekyll Server

Start a server that is constantly watching the directory for changes and rebuild if a changed happend. It will serve all assets and emulate the production environment.

    $ rake server

## Development

Since we use [Guard](https://github.com/guard/guard) to compile the stylesheets and update the browser please use the following command:

    $ guard