const book = {
  state: {
    fileName: '',
    menuVisible: false,
    settingVisible: -1, // -1 不显示 0 设置字号 1  2   3
    defaultFontSize: 18,
    currentBook: null
  },
  mutations: {
    'SET_FILENAME': (state, fileName) => {
      state.fileName = fileName
    },
    'SET_MENUVISIBLE': (state, menuVisible) => {
      state.menuVisible = menuVisible
    },
    'SET_SETTINGVISIBLE': (state, settingVisible) => {
      state.settingVisible = settingVisible
    },
    'SET_DEFAULTFONTSIZE': (state, fontSize) => {
      state.defaultFontSize = fontSize
    },
    'SET_CURRENTBOOK': (state, book) => {
      state.currentBook = book
    }
  }
}
export default book