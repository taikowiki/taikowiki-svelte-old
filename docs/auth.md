# provider

src/hooks.server.ts
```ts
export async handle({event, resolve}){
    ...
    console.log(event.locals.provider);//string|undefined, OAuth를 통해 로그인 할 경우 해당 로그인의 공급자(provider)가 반환됨.
    ...
}
```

# 에러

## "response" body "expires_in" property must be a positive number
주로 네이버 oauth 로그인에서 발생함.

`node_modules/oauth4webapi/build/index.js`의 `processGenericAccessTokenResponse`와 `processDeviceAuthorizationResponse`, `processPushedAuthorizationResponse` 함수에 다음 코드를 추가하시오.
```js
if(typeof json.expires_in === "string"){
        let expire = Number(json.expires_in);
        if(isNaN(expire)){
            throw new OPE('"response" body "expires_in" property must be a positive number');
        }
        else{
            json.expires_in = expire;
        }
    }
```