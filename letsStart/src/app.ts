import { Cat } from "./app.model";
import * as express from "express";

const app: express.Express = express(); // express instance

app.use((req, res, next) => {
  // middleware. next - 다음 함수로 이동할 수 있는 함수.
  // router 찾기 전에 로그 한번 찍고, next 라우터를 실행
  console.log(req.rawHeaders[1]);
  next();
});

app.get("/cats", (req, res) => {
  res.send({ data: Cat });
});

// 미들웨어가 중간에 있으면 blue를 요청할 때만 적요된다.
app.use((req, res, next) => {
  // middleware. next - 다음 함수로 이동할 수 있는 함수.
  // router 찾기 전에 로그 한번 찍고, next 라우터를 실행
  console.log(req.rawHeaders[1]);
  next();
});

// 또는 이렇게 쓰면 blue 를 위한 미들웨어이다. next를 호출하면 다음 것을 찾는다. 제너레이터라고 봐야한다.
app.get("cats/blue", (req, res, next) => {
  // middleware. next - 다음 함수로 이동할 수 있는 함수.
  // router 찾기 전에 로그 한번 찍고, next 라우터를 실행
  console.log(req.rawHeaders[1]);
  next();
});

app.get("/cats/blue", (req, res) => {
  res.send({ blue: Cat[0] });
});

// 미들웨어가 끝에 있으면 적용되지 않는다. 404 NotFound를 위한 미들웨어라고 볼 수 있다.
app.use((req, res, next) => {
  res.send({ error: "404 not found error" });
});

app.listen(8000, () => {
  console.log("server is on...");
});
