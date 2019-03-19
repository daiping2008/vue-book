<template>
  <div>
    <ebook-title></ebook-title>
    <ebook-reader></ebook-reader>
    <ebook-menu></ebook-menu>
  </div>
</template>

<script>
import EbookReader from '@/components/eBook/EbookReader'
import EbookTitle from '@/components/eBook/EbookTitle'
import EbookMenu from '@/components/eBook/EbookMenu'
export default {
  components: {
    EbookReader,
    EbookTitle,
    EbookMenu
  }
}
</script>

<style lang="scss" scoped>

</style>
