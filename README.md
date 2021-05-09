# firebase-react-sandbox

## Setup

```
$ git clone git@github.com:tayutaedomo/firebase-react-sandbox.git
$ cd firebase-react-sandbox
```

### without Docker

```
$ cd firebase-react-sandbox
$ yarn install
$ yarn start
```

### with Docker

```
$ cd firebase-react-sandbox
$ touch .bash_history
$ docker-compose build
$ docker-compose run --rm app yarn install
$ docker-compose up
```

## Available Scripts

```
$ yarn start
$ yarn test
$ yarn build
$ yarn eject
```

## Firebase

### Generate env file

Create the config file.

```
$ cd firebase-react-sandbox
$ touch .firebase-config.js
$ vim .firebase-config.js
module.exports = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};
```

Generate .env file with the following command.

```
$ bin/generate_env_file
```
