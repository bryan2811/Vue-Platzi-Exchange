<template>
  <div>
    <bounce-loader :loading="isLoading" :color="'#68D391'" :size="100" />
    <px-assets-table v-if="!isLoading" :assets="assets" />
  </div>
</template>

<script>
import API from '@/API'
import PxAssetsTable from '@/components/PxAssetsTable'

export default {
  name: 'Home',
  components: { PxAssetsTable },

  data() {
    return {
      isLoading: false,
      assets: []
    }
  },

  created() {
    this.isLoading = true

    API.getAssets()
      .then(assets => (this.assets = assets))
      .finally(() => (this.isLoading = false))
  }
}
</script>
