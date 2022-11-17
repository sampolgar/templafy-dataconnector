import express, { Application, Request, Response, NextFunction } from "express";
import morgan from "morgan";


const app: Application = express();
morgan.token("body", (req) => {
  return JSON.stringify(req.body);
});

app.use(morgan(":method :url :body"));

app.get("/\\$metadata", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World");
});

// app.get("/", (req: Request, res: Response, next: NextFunction) => {
//   console.log(add(2, 5));
//
// });

app.listen(5000, () => console.log("Server Running"));
