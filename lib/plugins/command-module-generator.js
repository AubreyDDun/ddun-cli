const fs = require('fs')
const path = require('path')
const ModuleGenerator = require('@ddun/module-vue-ts')
const supportedType = ['component', 'api']

module.exports = async (options = {}) => {
  const {
    type,
    name,
  } = options

  if (supportedType.indexOf(type) < 0) {
    console.warn(`[${type}] generator will be supported in the future :)`)
    process.exit(1)
  }

  if (type === 'component' || type == 'api') {
    await ModuleGenerator(options)

    // 生成 api 模块文件之后在 index 追加模块导出
    // if (type == 'api') {
    //   const indexPath = path.resolve(process.cwd(), './index.ts')
    //   const appendCnt = `\nexport { default as ${name}Api } from './${name}'`
    //   try {
    //     fs.accessSync(indexPath, fs.constants.R_OK | fs.constants.W_OK)
    //     fs.appendFileSync(indexPath, appendCnt)
    //   } catch (error) {
    //     if (error.code !== 'ENOENT') {
    //       fs.unlinkSync(indexPath)
    //     }
    //     fs.writeFileSync(indexPath, appendCnt)
    //   }
    // }
  }
}