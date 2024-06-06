# Dynamic Assets

## 개요

sveltekit에서 이미지나 css등 asset들을 제공하려면 static 폴더 안에 넣으면 된다.

하지만 이 경우 빌드 후에는 수정할 수 없다는 단점이 있다.

따라서 asset들을 제공하기 위해 추가적인 express 서버를 생성했다.

## 사용법

### 파일 추가

파일 추가는 express/assets 폴더에 추가한다.

### 파일 사용

파일 사용은 /ex/assets/... 경로로 요청한다.

예를 들어, 파일의 경로가 `express/assets/img/test.png` 이라면, `<img src="/ex/assets/img/test.png">`와 같이 사용한다.

폴더를 요청하거나 없는 경로로 요청할 경우 404 에러를 응답한다.