<template>
  <transition name="slide-up">
    <div class="setting-wrapper" v-show="settingVisible===1">
      <div class="setting-theme">
        <div
          v-for="(item, index) in themeList"
          :key="index"
          class="setting-theme-item">
            <div
              :class="{'selected':item.name===defaultTheme}"
              :style="{background:item.style.body.background}"
              @click="setTheme(item.name)"
              class="preview"></div>
            <div
              :class="{'selected':item.name===defaultTheme}"
              class="text">{{item.alias}}</div>
          </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { ebookMixin } from '@/utils/mixin'
import { saveTheme } from '@/utils/localStorage'
export default {
  mixins: [ebookMixin],
  methods: {
    setTheme (theme) {
      this.setDefaultTheme(theme).then(() => {
        this.currentBook.rendition.themes.select(this.defaultTheme)
      })
      saveTheme(this.fileName, this.defaultTheme)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/index.scss';

.setting-wrapper{
  position: absolute;
  left: 0;
  right:0;
  bottom: px2rem(48);
  z-index: 190;
  background-color: #ffffff;
  height: px2rem(90);
  box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, 0.15);
  .setting-theme{
    display: flex;
    height: 100%;
    .setting-theme-item{
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: px2rem(5);
      box-sizing: border-box;
      .preview{
        flex: 1;
        border: px2rem(1) solid #ccc;
        box-sizing: border-box;
        &.selected{
          box-shadow: 0 px2rem(4) px2rem(6) 0 rgba(0, 0, 0, .1);
          border: px2rem(2) solid #5e6369;
        }
      }
      .text{
        flex: 0 0 px2rem(20);
        font-size: px2rem(14);
        @include center;
      }
    }
  }
}
</style>
