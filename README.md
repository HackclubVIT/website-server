# Hackclub Website

The server-side code for the hackclub website, written with Typescript, using Express, on Node.js

See [the API docs](docs/API.md)

### Setup

Fork this repository and pull into a local repository.

Then, run `npm i` to install all dependencies. This will also install typescript, type definitions, linting tools and formatting tools as dev dependencies.

### Development

#### Building

Make changes to the typescript, then run `npm run dist` to build the typescript into javascript. This will create a folder `bin` in the root directory, containing the built javascript, as configured in `/tsconfig.json`.

#### Email

For testing email services during development, [mailtrap](https://mailtrap.io/) is used. Create a temporary inbox there, and add your temporary username and password to the environment variables `MAILTRAP_USER` and `MAILTRAP_PASS` respectively. You will see the trapped SMTP traffic on your mailtrap inbox, like below

<img src = https://i.imgur.com/FPCHPmR.png>

You can view the full mailtrap docs [here](https://mailtrap.docs.apiary.io/)

During development, you can fill in the environment variable `EMAIL_ADDRESS` with a arbitrary regex-valid email address (the address need not exist). For production, this will be replaced by the actual hackclub email address.

Since [dotenv](https://www.npmjs.com/package/dotenv) has been set up, you can enter your environment variables into a `.env` file in the root of the project. Make sure to not commit the `.env` file to git. (It has already been added to `.gitignore`).

#### Running

Run `npm start` to serve the app locally. You can configure the port to serve it on in an environment variable `PORT` (defaults to `9000`)

#### Documentation

Make sure to update the [API Docs](docs/API.md) whenever you configure a new endpoint.

#### Linting and formatting

`npm run lint` will run ESlint on the project, which for now, has only been configured with the `unused-imports` plugin in `/.eslintrc`

`npm run format` will run Prettier, which has been configured in `/.prettierrc` and `/.prettierignore`
