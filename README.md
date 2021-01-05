# ddun-cli

> 是一个基于 [SAO](https://github.com/saojs/sao) 的 Web 工程脚手架工具。
## 安装

建议全局安装 [ddun-cli](https://www.npmjs.com/package/ddun-cli)，方便在不同项目中使用该命令行工具。

```bash
yarn global add ddun-cli
# or
npm i -g ddun-cli
```

## 功能

本工具致力于简化工程创建到代码开发过程中繁复的工作，提供工程和模块的初始化能力。计划在未来提供前端工程完整链路中的其他部分（如单测）的自动化能力。
### 工程初始化

基于 Vue v2.x 的 Web 工程初始化工具，根据用户选择，完成对应初始化过程。

```bash
ddun init my-project
```

当前支持的选项有：
- [ ] 是否使用 Typescript
- [x] 选择插件：Vuex | i18n | Vue Router
- [ ] 是否引入 [Ant Design Vue](https://antdv.com/docs/vue/introduce-cn/) 作为 UI 库
- [ ] 选择 CSS 编译器：less | scss
- [ ] 选择 eslint 规范：Airbnb | Standard
- [x] 是否使用 Husky 规范 git commit
- [x] 是否创建 Gitlab CI 配置文件

### 模块初始化

提供 API | 组件（普通组件、路由组件） | Store module 三种模块的文件、代码片段、实例代码的初始化，并自动补全模块引入。

生成 API 模块，建议在 `@/api` 执行

```bash
ddun api [api-module-name]
```

初始化组件模块，初始化路由组件建议在 `@/views` 下执行，生成普通组件在 `@/components/**` 下执行

```bash
ddun comp [component-name]
```

初始化 store module，建议在 `@/store/modules` 下执行

```bash
ddun store [store-module-name]
```

## License

MIT &copy; [aubreyddun](github.com/aubreyddun)
