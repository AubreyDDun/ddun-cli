const VUEX = 'Vuex'
const I18N = 'VueI18n'
const ROUTER = 'VueRouter'

module.exports = {
  prompts() {
    return [
      {
        name: 'name',
        message: '项目名称',
        default: '{outFolder}',
        filter: val => val.toLowerCase(),
        validate: val => /^[A-Za-z]/.test(val) ? true : '工程命名不符合规范'
      },
      {
        name: 'description',
        message: '项目描述',
        default: '{outFolder}',
      },
      {
        name: 'useTS',
        type: 'confirm',
        message: '是否使用TS',
        default: true,
      },
      {
        name: 'plugins',
        type: 'checkbox',
        message: '请选择所需插件',
        choices: [VUEX, I18N, ROUTER],
        default: [ROUTER],
      },
      {
        name: 'style',
        type: 'list',
        message: '请选择 CSS 预编译器',
        choices: ['less', 'scss'],
        default: ['less'],
      },
      {
        name: 'eslint',
        type: 'list',
        message: '请选择 eslint 规范',
        choices: ['standard', 'airbnb'],
        default: ['airbnb'],
      },
      {
        name: 'useHusky',
        type: 'confirm',
        message: '是否使用 husky 规范 git commit',
        default: true,
      },
      {
        name: 'yml',
        type: 'confirm',
        message: '是否创建 Gitlab CI 配置文件',
        default: true,
      },
    ]
  },

  actions: [
    {
      type: 'add',
      files: '**',
      filters: {
        '.gitlab-ci.yml': 'yml',
      },
    },
    {
      type: 'move',
      patterns: {
        '_.gitignore': '.gitignore',
        '_.editorconfig': '.editorconfig',
        '_package.json': 'package.json',
      }
    }
  ],

  templateData() {
    const {
      name,
      description,
      useTS,
      plugins,
      style,
      eslint,
      yml,
      useHusky,
    } = this.answers

    return {
      userName: this.gitUser.name,
      projectName: name,
      projectDesc: description,
      useTS,
      useVuex: plugins.indexOf(VUEX) > -1,
      useI18n: plugins.indexOf(I18N) > -1,
      useRouter: plugins.indexOf(ROUTER) > -1,
      styleSyntax: style,
      eslintConfig: eslint,
      useHusky,
      createYml: yml,
    }
  },

  async completed() {
    this.gitInit()
    // await this.npmInstall()
    // this.showProjectTips()
  }
}
