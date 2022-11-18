// import express, { Application, Request, Response, NextFunction } from "express";
// import morgan from "morgan";
// import { Edm } from '@odata/metadata';

// const app: Application = express();
// morgan.token("body", (req) => {
//   return JSON.stringify(req.body);
// });

// app.use(morgan(":method :url :body"));

// app.get("/\\$metadata", (req: Request, res: Response, next: NextFunction) => {
//   let entityType = new Edm.EntityType({
//     name: "Orders",
//     property: [{name: "OrderID", type: Edm.Int16}]
//   })
//   entityType.properties.push(new Edm.Property(...))

//   res.send("Hello World");
// });

// // app.get("/", (req: Request, res: Response, next: NextFunction) => {
// //   console.log(add(2, 5));
// //
// // });

// app.listen(5000, () => console.log("Server Running"));
