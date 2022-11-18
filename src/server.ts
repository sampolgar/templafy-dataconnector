import http from "http";
import { Datastore } from "nedb";
const db = new Datastore({ inMemoryOnly: true });
import ODataServer from "simple-odata-server";
import Adapter from "simple-odata-server-nedb";

const model = {
  namespace: "jsreport",
  entityTypes: {
    UserType: {
      _id: { type: "Edm.String", key: true },
      test: { type: "Edm.String" },
    },
  },
  entitySets: {
    users: {
      entityType: "jsreport.UserType",
    },
  },
};

const odataServer = ODataServer("http://localhost:5000")
  .model(model)
  .adapter(
    Adapter(function (es, cb) {
      cb(null, db);
    })
  );

http.createServer(odataServer.handle.bind(odataServer)).listen(5000);
