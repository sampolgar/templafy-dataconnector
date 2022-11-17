# templafy-dataconnector

Templafy Data Connector

Setup

- npm install -D typescript
- create tsconfig.json
- install express & @types/express@4.17.1
- run `npx tsc` to compile typescript to javascript
- run `node dist/index.js` to run the server

Typescript

- Nodemon = `npm install --save-dev ts-node nodemon` ==> `nodemon app.ts`

- create tsconfig file `tsc --init`

Together

- `npm i -D typescript ts-node nodemon @types/node @types/express`
- update package.json with
- - `"dev": "nodemon src/app.ts"`
- - `"start": "node dist/app.js"`
- - `"build": "tsc -p ."`

How to run
- `npm run dev` enable nodemon
- `npm run build` builds js components

Eslint for typescript
- `npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint typescript`
- run `npx eslint .`

OData library
- `npm i @cognigy/odata-v4-server-tls-support`

OData v4
1. `/$metadata?skipEntityTypes=true`
2. 