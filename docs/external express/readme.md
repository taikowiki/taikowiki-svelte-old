# 외부 express 서버

## 개요

sveltekit에서 사용할 수 없는 기능들(websocket, SSE 등)을 이용하기 위해 외부 express 서버를 생성했다.

## 사용법

### 라우터

express/router 폴더 안에 js(또는 ts) 파일을 생성하고, 해당 파일은 express router를 default로 export 해야 한다.

예를 들어
```js
import {Router} from 'express';

const router = Router();

router.get('/test', (req, res) => {
    res.send('test 요청');
    res.end();
})

export default router;
```
와 같이 작성한다.

그리고 express/express.ts 파일에서
```js
...
import {default as test} from './router/test.js';

...
const app = express();
app.use('/ex', test);
...

```
와 같이 작성하여 해당 라우터를 사용한다.

### 경로

해당 express 서버에 대한 요청은 /ex 경로를 통해 이루어진다.

예를 들어 위의 예시에서 라우터가 `/test` 경로로 요청을 받는다면, `/ex/test` 경로로 요청을 보내야 응답을 받을 수 있다. 

```js
fetch('/test')//404에러

fetch('/ex/text')//test 요청
```

### 서버 실행

#### 개발 중

개발 중에는 `npm run dev`를 입력하면 자동으로 실행된다.

#### 배포

`npm run build`를 실행하여 서버 파일을 빌드하면, express 서버 파일도 ts에서 js로 컴파일된다.

이후, 루트폴더에서 node express/express.js를 입력하여 express 서버를 실행시킨다.

## 리스트

-[유동적 asset 파일](/docs/external%20express/dynamic%20assets.md)