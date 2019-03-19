<template>
  <div class="ebook-render">
    <div id="read"></div>
  </div>
</template>

<script>
import { ebookMixin } from '@/utils/mixin'
import Epub from 'epubjs'
import { Promise } from 'q'
global.ePub = Epub
export default {
  mixins: [ebookMixin],
  mounted () {
    const fileName = this.$route.params.fileName.split('|').join('/')
    this.setFileName(fileName).then(() => {
      this.initEpub()
    })
  },
  methods: {
    toggleTitleAndMenu () {
      if (this.setMenuVisible) {
        this.setSettingVisible(-1)
        this.setFontFamilyVisible(false)
      }
      this.setMenuVisible(!this.menuVisible)
    },
    nextPage () {
      if (this.rendition) {
        this.rendition.next()
        this.hideTitleAndMenu()
      }
    },
    prevPage () {
      if (this.rendition) {
        this.rendition.prev()
        this.hideTitleAndMenu()
      }
    },
    hideTitleAndMenu () {
      this.setMenuVisible(false)
      this.setSettingVisible(-1)
      this.setFontFamilyVisible(false)
    },
    initEpub () {
      const url = `${process.env.VUE_APP_EPUB_URL}/${this.fileName}.epub`
      this.book = new Epub(url)
      this.rendition = this.book.renderTo('read', {
        width: window.innerWidth,
        height: window.innerHeight,
        method: 'default'
      })
      this.setCurrentBook(this.book)
      this.rendition.display()
      this.rendition.on('touchstart', event => {
        this.touchStart = event.changedTouches[0].clientX
        this.touchStartTime = event.timeStamp
      })
      this.rendition.on('touchend', event => {
        const offsetX = event.changedTouches[0].clientX - this.touchStart
        const time = event.timeStamp - this.touchStartTime
        if (time < 500 && offsetX > 40) {
          this.prevPage()
        } else if (time < 500 && offsetX < -40) {
          this.nextPage()
        } else {
          this.toggleTitleAndMenu()
        }
        event.preventDefault()
        event.stopPropagation()
      })
      this.rendition.hooks.content.register(contents => {
        Promise.all([
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/cabin.css`),
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/daysOne.css`),
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/montserrat.css`),
          contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/tangerine.css`)
        ])
      })
    }

  }
}
</script>

<style>

</style>
