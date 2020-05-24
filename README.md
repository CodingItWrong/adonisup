# adonisup

Adonis API project creator with my default configuration:

- Yarn
- Vow for testing
- Postgres database
- ESLint and Prettier config
- CircleCI config

## Requirements

- Yarn
- Adonis CLI

```sh
$ npm install -g @adonisjs/cli
```

## Installation

Clone the repo and add `adonisup/bin` to your path.

## Usage

```bash
adonisup myprojectname
```

## Manual Steps

The following steps must done manually after running `emberup`; they have not yet been scripted.

In `package.json`, add the following scripts:

```diff
 "scripts": {
   "start": "node server.js",
   "test": "node ace test",
+  "lint": "eslint \"**/*.js\"",
+  "format": "prettier --write \"**/*.js\""
 },
```

Run `yarn format` and commit the changes.

## License

Apache-2.0
