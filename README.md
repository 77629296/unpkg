# UNPKG

### 使用方法
根目录新增npmConfig.js

```javascript
//存放私库包的命名空间
export const scopes = [
  '@rf'
];
/****
* 私库地址，代理端口会解析url的端口号
* const privateNpmRegistryURLArr = privateNpmRegistryURL.split(":");
* const privateNpmPort = privateNpmRegistryURLArr[privateNpmRegistryURLArr.length - 1]
* 拉取一些npm的包会返回302的情况，unpkg暂时没有处理，会不会和本地的npm源有关？
***/
export const privateNpmRegistryURL = 'http://ip:port'; // 改为自己私有库地址+端口

//互联网npm地址
export const publicNpmRegistryURL = 'http://registry.npmjs.org';

export default scopes;
```