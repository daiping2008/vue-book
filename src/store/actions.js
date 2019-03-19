export default {
  setFileName: ({ commit }, fileName) => {
    return commit('SET_FILENAME', fileName)
  },
  setMenuVisible: ({ commit }, menuVisible) => {
    return commit('SET_MENUVISIBLE', menuVisible)
  },
  setSettingVisible: ({ commit }, settingVisible) => {
    return commit('SET_SETTINGVISIBLE', settingVisible)
  },
  setDefaultFontSize: ({ commit }, fontSize) => {
    return commit('SET_DEFAULTFONTSIZE', fontSize)
  },
  setCurrentBook: ({ commit }, book) => {
    return commit('SET_CURRENTBOOK', book)
  },
  setDefaultFontFamily: ({ commit }, fontFamily) => {
    return commit('SET_DEFAULTFONTFAMILY', fontFamily)
  },
  setFontFamilyVisible: ({ commit }, fontFamilyVisible) => {
    return commit('SET_FONTFAMILYVISIBLE', fontFamilyVisible)
  }
}
