<template>
  <transition name="popup-slide-up">
    <div class="ebook-popup-list" v-show="fontFamilyVisible">
      <div class="ebook-popup-title">
        <div @click="hideFontFamilySetting" class="ebook-popup-title-icon">
          <i class="iconfont">&#xe60a;</i>
        </div>
        <div class="ebook-popup-title-text">选择字体</div>
      </div>
      <div class="ebook-popup-list-wrapper">
        <div
          @click="setFontFamily(item.font)"
          v-for="(item, index) in fontFamilyList"
          :key="index"
          class="ebook-popup-item">
          <div
            :class="{'selected': defaultFontFamily===item.font}"
            class="ebook-popup-item-text">{{item.font}}</div>
          <div
            class="ebook-popup-item-check selected"
            v-show="defaultFontFamily===item.font">
            <i class="iconfont">&#xe606;</i>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { ebookMixin } from '@/utils/mixin'
import { saveFontFamily } from '@/utils/localStorage'
import { FONT_FAMILY } from '@/utils/book'
export default {
  data () {
    return {
      fontFamilyList: FONT_FAMILY
    }
  },
  mixins: [ebookMixin],
  methods: {
    setFontFamily (font) {
      this.setDefaultFontFamily(font)
      if (font === 'Default') {
        this.currentBook.rendition.themes.font('Times New Roman')
      } else {
        this.currentBook.rendition.themes.font(font)
      }
      saveFontFamily(this.fileName, font)
    },
    hideFontFamilySetting () {
      this.setFontFamilyVisible(false)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/styles/index.scss';
.ebook-popup-list{
  position: absolute;
  left:0;
  bottom:0;
  right:0;
  z-index: 300;
  background-color: #ffffff;
  box-shadow: 0 px2rem(-4) px2rem(6) rgba(0, 0, 0, .1);
  .ebook-popup-title{
    position: relative;
    text-align: center;
    padding: px2rem(15);
    border-bottom: px2rem(1) solid #b8b9bb;
    box-sizing: border-box;
    @include center;
    .ebook-popup-title-icon{
      position: absolute;
      top:0;
      height: 100%;
      @include center;
      left :px2rem(15);
      font-size:px2rem(16);
    }
    .ebook-popup-title-text{
      font-size: px2rem(14);
      font-weight :bold;
    }
  }
  .ebook-popup-list-wrapper{
    .ebook-popup-item{
      display: flex;
      padding: px2rem(15);
      font-size: px2rem(14);
      .ebook-popup-item-text{
        flex: 1;
        text-align: left;
        &.selected{
          color: #346cb9;
          font-weight: bold;
        }
      }
      .ebook-popup-item-check{
        flex: 1;
        text-align: right;
        &.selected{
          font-weight: bold;
          color: #346cb9;
        }
      }
    }
  }
}
</style>
