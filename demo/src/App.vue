<template>
  <div class="App">
    <div class="content">
      <img src="./assets/logo.png">
      <h2>Demo VueJS ProgressBar</h2>
      <progress-bar
        :width="120"
        :backgroundColor="'lightgray'"
        :value="value"
        :fontFamily="'Helvetica'"
        :horizontalTextAlign="40"
        :verticalTextAlign="53.5"
        />
      <br>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.intervalid1 = setInterval(() => {
        this.changes = Math.floor((Math.random() * 100));
        this.value = this.changes
        console.log('Value demo: ' + this.value)
    }, 4000);
  },
  name: 'App',
  data () {
    return {
      value: 3
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.content {
  border: 1px solid lightgray;
  text-align: center;
  padding: 10px;
}
</style>

