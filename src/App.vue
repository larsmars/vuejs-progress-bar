<template>
  <div id="app">
    <progress-bar :value="25" />
  </div>
</template>

<script>
import ProgressBar from '../src/components/ProgressBar.vue'

export default {
  name: 'app',
  components: {
    ProgressBar
  }
}
</script>
