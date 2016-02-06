## rem.js

- 移动端满屏自适应方案，采用 rem 作为单位。
- 修改自阿里无线的 [lib-flexible](https://github.com/amfe/lib-flexible) 方案，删除了原方案的 dpr 部分，保留了 rem。
- 要求设计稿为 750 * 1334，换算标准为 1rem = 50px。

## rem-pro.js

在 `rem.js` 的基础上新增了自定义设计稿宽度、换算单位的功能，并内置了三种常用的移动端设计稿尺寸：

- iPhone 5/5C/5S: 640 * 1136
- iPhone 6/6S: 750 * 1334
- New Android Devices: 1080 * 1920

## Usage

- `rem.js` 只需要引入即可生效，但更推荐使用内联的方式。  

- `rem-pro.js` 在引入或内联之后，还需要执行以下函数：

```JS
$rem(50, 750); // 参数分别是：换算标准 / 设计宽度
```

- 一般情况下只需要使用 `rem.js`，可根据需求修改源码中的尺寸。如果多个页面的设计稿尺寸不一致时（跨部门合作或历史遗留问题），则可以引入 `rem-pro.js`。

## Contributors

- `lib-flexible.js` @amfe
- `rem.js` @lanmerry
- `rem-pro.js` @banricho

## License

MIT