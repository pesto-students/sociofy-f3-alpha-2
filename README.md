## Getting Started
This repository aims to assist you in beginning work on Sociofy application with a solid file structure as a foundation.
This project will hold both the client application and the server application in single place because we are using NextJS and there is a way in NextJS to create custom server that can accomodate the backend as well and thus we have single node module . First run `npm install` from the root. From now on run this command anytime you want to install all modules again. This is a script we have defined in package.json .

This app is deployed directly to heroku since there is a script defined in package.json which will automatically handle building and deploying the app. For more information on deploying to heroku reference the extra resources at the bottom of this file. 

## File structure
#### `api` - This holds all of our api routes
#### `components` - This folder holds all of the different components that will make up our views
#### `middleware` - This folder holds the authentication middleware that will verify the jwt tokens on authentication
#### `models` - This holds all of our data models
#### `public` - This holds all of our static files
#### `utils` - This holds all of our actions and common functions that we used at several places
#### `utilsServer` - This holds all of our server utilities files
#### `next.config.js` - This holds our next.js configuration files
#### `server.js` - Defines npm behaviors and packages for the client
#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README
#### `.gitignore` - Tells git which files to ignore
#### `README` - This file!

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs both the client app and the server app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

If deploying to heroku this does not need to be run since it is handled by the heroku-postbuild script<br>

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

To learn how to setup a local MongoDB instance for testing, check out how to [Connect to MongoDB](https://docs.mongodb.com/guides/server/drivers/).

To learn how to deploy a full-stack web app to heroku, check out [this great guide](https://daveceddia.com/deploy-react-express-app-heroku/).

To learn React, check out the [React documentation](https://reactjs.org/).

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
