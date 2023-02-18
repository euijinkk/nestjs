import * as express from "express";
import catsRouter from "./cats/cats.route";

const app: express.Express = express(); // express instance

// logging middleware
app.use((req, res, next) => {
  // middleware. next - 다음 함수로 이동할 수 있는 함수.
  // router 찾기 전에 로그 한번 찍고, next 라우터를 실행
  console.log(req.rawHeaders[1]);
  next();
});
// express에서 body json을 읽을 수 있도록 미들웨어를 추가해줘야 한다.
app.use(express.json());

// 세부 라우터가 하나의 미들웨어처럼 동작한다.
app.use(catsRouter);

// 미들웨어가 중간에 있으면 blue를 요청할 때만 적요된다.
app.use((req, res, next) => {
  // middleware. next - 다음 함수로 이동할 수 있는 함수.
  // router 찾기 전에 로그 한번 찍고, next 라우터를 실행
  console.log(req.rawHeaders[1]);
  next();
});

// 미들웨어가 끝에 있으면 적용되지 않는다. 404 NotFound를 위한 미들웨어라고 볼 수 있다.
app.use((req, res, next) => {
  res.send({ error: "404 not found error" });
});

app.listen(8000, () => {
  console.log("server is on...");
});
