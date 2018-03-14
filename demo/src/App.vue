<template>
  <div class="App">
    <div class="content">
      <img src="./assets/logo.png">
      <h2>Demo VueJS ProgressBar</h2>
      <progress-bar
        :options="options"
        :value="value"
      />
      <br>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.value = 100
    this.intervalid1 = setInterval(() => {
        this.changes = Math.floor((Math.random() * 100));
        this.value = this.changes
        console.log('Value demo: ' + this.value)
    }, 500);
  },
  name: 'App',
  data () {
    return {
      value: 0,
      options: {
      text: {
          color: 'white',
          shadowEnable: true,
          shadowColor: 'black',
          fontSize: 14,
          fontFamily: 'Helvetica',
          dynamicPosition: false
        },
        progress: {
          color: '#C2E362',
          backgroundColor: '#392F32'
        },
        layout: {
          height: 120,
          width: 120,
          verticalTextAlign: 55,
          horizontalTextAlign: 43,
          strokeWidth: 30,
          strokePadding: 2,
          type: 'cylinder'
        }
      }
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

