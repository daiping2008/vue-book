<template>
  <div>
    <transition name="slide-up">
      <div class="menu" :class="{'hide-box-shadow': settingVisible>=0}" v-show="menuVisible">
        <div class="menu-wrapper">
          <div class="icon-wrapper">
            <i class="iconfont">&#xe60e;</i>
          </div>
          <div class="icon-wrapper">
            <i class="iconfont">&#xe61e;</i>
          </div>
          <div class="icon-wrapper">
            <i class="iconfont">&#xe608;</i>
          </div>
          <div @click="showSetting(0)" class="icon-wrapper">
            <i class="iconfont">&#xe600;</i>
          </div>
        </div>
      </div>
    </transition>
    <ebook-setting-font></ebook-setting-font>
  </div>
</template>

<script>
import EbookSettingFont from './EbookSettingFont'
import { ebookMixin } from '@/utils/mixin'
export default {
  mixins: [ebookMixin],
  methods: {
    showSetting (index) {
      this.setSettingVisible(index)
    }
  },
  components: {
    EbookSettingFont
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/index.scss';
.menu{
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 200;
  width: 100%;
  background-color: #ffffff;
  height: px2rem(48);
  box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, .15);
  font-size: px2rem(22);
  &.hide-box-shadow{
    box-shadow: none;
  }
  .menu-wrapper{
    display: flex;
    height: 100%;
    justify-content: center;
    .icon-wrapper{
      flex: 1;
      @include center;
    }
  }
}
</style>
