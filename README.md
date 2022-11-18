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
- Simple `npm i simple-odata-server`
- Server: `npm install -S @odata/server`
- Metadata: `https://github.com/Soontao/odata-v4-metadata` => `npm i -S @odata/metadata`
- Parser: `https://github.com/Soontao/odata-v4-parser` => `npm i -S @odata/parser`
- simple for mongodb: `https://github.com/pofider/node-simple-odata-server`
- more complicated production ready: `https://cap.cloud.sap/docs/node.js/`
- example working: `https://github.com/Soontao/odata-v4-server-demo` => `https://odata-v4-server-demo.herokuapp.com/` => `https://odata-v4-server-demo.herokuapp.com/$metadata` => `https://odata-v4-server-demo.herokuapp.com/Products?$filter=Price gt 10`

OData v4

1. `/$metadata?skipEntityTypes=true`
2.
