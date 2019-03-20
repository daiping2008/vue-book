import { mapGetters, mapActions } from 'vuex'
import { themeList } from './book'
import { addClass, removeAllClass } from './utils'
export const ebookMixin = {
  computed: {
    ...mapGetters([
      'fileName',
      'menuVisible',
      'settingVisible',
      'defaultFontSize',
      'currentBook',
      'defaultFontFamily',
      'fontFamilyVisible',
      'defaultTheme'
    ]),
    themeList () {
      return themeList(this)
    }
  },
  methods: {
    ...mapActions([
      'setFileName',
      'setMenuVisible',
      'setSettingVisible',
      'setDefaultFontSize',
      'setCurrentBook',
      'setDefaultFontFamily',
      'setFontFamilyVisible',
      'setDefaultTheme'
    ]),
    initGlobalStyle () {
      removeAllClass()
      switch (this.defaultTheme) {
        case 'Default':
          addClass(`${process.env.VUE_APP_RES_URL}/theme/theme_default.css`)
          break
        case 'Eye':
          addClass(`${process.env.VUE_APP_RES_URL}/theme/theme_eye.css`)
          break
        case 'Gold':
          addClass(`${process.env.VUE_APP_RES_URL}/theme/theme_gold.css`)
          break
        case 'Night':
          addClass(`${process.env.VUE_APP_RES_URL}/theme/theme_night.css`)
          break
        default:
          addClass(`${process.env.VUE_APP_RES_URL}/theme/theme_default.css`)
          break
      }
    }
  }
}
