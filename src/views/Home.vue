<template>
  <div>
    <px-assets-table :assets="assets" />
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
      assets: []
    }
  },

  created() {
    API.getAssets().then(assets => (this.assets = assets))
  }
}
</script>
