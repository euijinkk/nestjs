import * as express from "express";
import catsRouter from "./cats/cats.route";

const app: express.Express = express(); // express instance
// app은 singletons이다.
// singletons 이란 클래스에서 한개의 인스턴스만 생성
// 추후 객체에 접근할 때 메모리 낭비 방지
// 다른 곳에서 데이터 접근이 쉽다. 데이터 공유하여 사용
// Server를 따로 싱글톤으로 분리하기
// + service 패턴을 활용하여 비즈니스 로직을 구분하여 가독성을 높이기

class Server {
  public app: express.Application;

  constructor() {
    const app = express();
    this.app = app;
  }

  private setRoute() {
    // 세부 라우터가 하나의 미들웨어처럼 동작한다.
    this.app.use(catsRouter);
  }

  private setMiddleware() {
    // logging middleware

    this.app.use((req, res, next) => {
      // middleware. next - 다음 함수로 이동할 수 있는 함수.
      // router 찾기 전에 로그 한번 찍고, next 라우터를 실행
      console.log(req.rawHeaders[1]);
      next();
    });
    // express에서 body json을 읽을 수 있도록 미들웨어를 추가해줘야 한다.
    this.app.use(express.json());

    this.setRoute();

    // 미들웨어가 중간에 있으면 blue를 요청할 때만 적요된다.
    this.app.use((req, res, next) => {
      // middleware. next - 다음 함수로 이동할 수 있는 함수.
      // router 찾기 전에 로그 한번 찍고, next 라우터를 실행
      console.log(req.rawHeaders[1]);
      next();
    });

    // 미들웨어가 끝에 있으면 적용되지 않는다. 404 NotFound를 위한 미들웨어라고 볼 수 있다.
    this.app.use((req, res, next) => {
      res.send({ error: "404 not found error" });
    });
  }

  public listen() {
    this.setMiddleware();
    this.app.listen(8000, () => {
      console.log("server is on...");
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();
