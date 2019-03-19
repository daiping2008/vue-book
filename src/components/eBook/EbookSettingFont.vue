<template>
  <transition name="slide-up">
    <div class="setting-wrapper" v-show="menuVisible&&settingVisible===0">
      <div class="setting-font-size">
        <div class="preview">
          <span :style="styleLeft">A</span>
        </div>
        <div class="select">
          <div
            v-for="(item, index) in fontSizeList"
            :key="index"
            @click="setFontSize(item.fontSize)"
            class="select-wrapper">
            <div class="line"></div>
            <div class="point-wrapper">
              <div class="point" v-show="defaultFontSize===item.fontSize">
                <div class="small-point"></div>
              </div>
            </div>
            <div class="line"></div>
          </div>
        </div>
        <div class="preview">
          <span :style="styleRight">A</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { FONT_SIZE_LIST } from '@/utils/book'
import { ebookMixin } from '@/utils/mixin'
export default {
  mixins: [ebookMixin],
  data () {
    return {
      fontSizeList: [],
      styleLeft: {},
      styleRight: {}
    }
  },
  watch: {
    settingVisible () {
      this.fontSizeList = FONT_SIZE_LIST
      this.styleLeft = {
        fontSize: FONT_SIZE_LIST[0].fontSize + 'px'
      }
      this.styleRight = {
        fontSize: FONT_SIZE_LIST[FONT_SIZE_LIST.length - 1].fontSize + 'px'
      }
      console.log(this.styleLeft, this.styleRight)
    }
  },
  methods: {
    setFontSize (fontSize) {
      this.setDefaultFontSize(fontSize)
      this.currentBook.rendition.themes.fontSize(fontSize)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/index.scss';
.setting-wrapper{
  position: absolute;
  bottom: px2rem(48);
  left: 0;
  z-index: 190;
  flex-direction: column;
  width: 100%;
  height: px2rem(90);
  background-color: #ffffff;
  box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, .15);
  .setting-font-size{
    flex: 2;
    display: flex;
    height: 100%;
    .preview{
      flex: 0 0 px2rem(40);
      @include center;
    }
    .select{
      display: flex;
      flex:1;
      .select-wrapper{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        &:first-child {
          .line {
            &:first-child {
              border-top: none;
            }
          }
        }
        &:last-child{
          .line{
            &:last-child{
              border: none;
            }
          }
        }
        .line{
          flex: 1;
          height: 0;
          border-top: px2rem(1) solid #000;
        }
        .point-wrapper{
          position: relative;
          flex: 0 0 0;
          width: 0;
          height: px2rem(7);
          .point {
            position: absolute;
            top: px2rem(-8);
            left: px2rem(-10);
            width: px2rem(20);
            height: px2rem(20);
            border-radius: 50%;
            border: px2rem(1) solid #000;
            background-color: #ffffff;
            box-shadow: 0 px2rem(4) px2rem(4) rgba(0, 0, 0, .15);
            @include center;
            .small-point {
              background-color: #000;
              width: px2rem(5);
              height: px2rem(5);
              border-radius: 50%;
            }
          }
        }
      }
    }
  }
}
</style>
