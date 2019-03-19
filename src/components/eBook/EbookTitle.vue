<template>
  <transition name="slide-down">
    <div class="title-wrapper" v-show="menuVisible">
      <div class="left">
        <i class="iconfont">&#xe601;</i>
      </div>
      <div class="right">
        <div class="icon-wrapper">
          <i class="iconfont">&#xe624;</i>
        </div>
        <div class="icon-wrapper">
          <i class="iconfont">&#xe605;</i>
        </div>
        <div class="icon-wrapper">
          <i class="iconfont">&#xe612;</i>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { ebookMixin } from '@/utils/mixin'
export default {
  mixins: [ebookMixin]
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/index.scss';
.title-wrapper{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 200;
  background-color: #ffffff;
  display: flex;
  width: 100%;
  height: px2rem(48);
  box-shadow: 0 px2rem(8) px2rem(8) rgba(0, 0, 0, .15);
  font-size: px2rem(22);
  .left{
    flex: 0 0 px2rem(37);
    @include left;
  }
  .right{
    flex:1;
    display: flex;
    justify-content: flex-end;
    .icon-wrapper {
      flex: 0 0 px2rem(37);
      @include right;
    }
  }
}
</style>
