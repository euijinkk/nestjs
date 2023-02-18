import { Cat } from "./app.model";
import * as express from "express";

const app: express.Express = express(); // express instance

app.get("/", (req, res) => {
  res.send({ data: Cat });
});

app.listen(8000, () => {
  console.log("server is on...");
});
