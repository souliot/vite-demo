import { ElButton, locale } from 'element-plus'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import { App } from 'vue'
import './element-variables.scss'

export default (app: App<Element>) => {
  locale(lang)
  app.use(ElButton)
}
