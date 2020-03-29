## Server explorer

Live version can be found [here](http://server-explorer.surge.sh).

Install dependencies: `npm install`.  
Run dev build on localhost:3000: `npm start`.

This app is deployed with the help of [surge.sh](https://surge.sh/). Surge needs to be installed and configured.  
To deploy, first compile prod build: `npm run build` and then: `surge`. Follow the instructions in the terminal to finish deployment.

### Features

- Works on all modern browsers and IE11.
- Works on all mobile screens.
- App is reasonably fast.
- Handles authorization and data errors gracefully.
- App is built to be easily extendable.
- Main functionality is unit tested. Happy path integration tests are present too.

### Potential improvements

- Better test coverage including e2e tests.
- For security and better UX backend should allow communication via https.
- Depending on the performance needs, code splitting and server side rendering could be implemented.
