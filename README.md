## Prerequisites
- NVM / NodeJS
- Postgres

## Installation

```bash
$ npm install
```

To start database, run locally

```
$ psql -U postgres (or whatever user you use)
$ \i src/database/scripts/create-db.psql
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```