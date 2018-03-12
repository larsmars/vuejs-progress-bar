<template>
  <div class="progress-bar">
    <svg id="line-progress" 
      :height="height" 
      :width="width">
      <g class="progress-container" :stroke="backgroundColor">
        <line x1="0"
            y1="50%"
            x2="100%"
            y2="50%"
            stroke-width="30" />
      </g>
      <g class="progress-content">
        <line
            x1="0"
            y1="50%"
            x2="100%"
            y2="50%"
            :stroke="color" 
            :fill="textColor" 
            stroke-dasharray="100%"
            :stroke-dashoffset="progressValue"
            stroke-width="28" />
      </g>
      <text class="percentage" x="40%" y="55%">{{value}}%</text>
    </svg>   
    </div>
</template>

<script>
const constants = {
  textColor: 'white',
  color: 'green',
  backgroundColor: 'lightgray',
  height: 120,
  width: 120,
  delay: .4
}
const s = x => x + 's'
const px = v => v + 'px'

export default {
  name: 'ProgressBar',
  props: {
    value: {
      type: Number,
      require: false,
      default: 33
    },
    height: {
      type: Number,
      default: constants.height
    },
    width: {
      type: Number,
      default: constants.width
    },
    textColor: {
      type: String,
      default: constants.color,
      require: false
    },
    color: {
      type: String,
      default: constants.color,
      require: false
    },
    backgroundColor: {
      type: String,
      default: constants.backgroundColor,
      require: false
    },
    fontFamily: {
      type: String,
      require: false
    }
  },
  computed: {
    progressValue () {
      return 100 - this.value + '%'
    },
    switchStyle () {
      return {
        width: px(this.width),
        height: px(this.height)
      }
    },
    itemStyle () {
      return {
        height: px(this.height),
        width: px(this.width),
        fontFamily: this.fontFamily,
        fontSize: px(this.fontSize),
        textAlign: 'center'
      }
    },
    labelStyle () {
      return {
        padding: px(this.padding),
        borderColor: this.borderColor,
        backgroundColor: this.backgroundColor,
        color: this.color,
        transition: s(this.delay)
      }
    }
  },
  data () {
    return {
    }
  },
  watch: {
    value: function (val) {
      console.log('value in progress bar: ' + val)
    }
  },
  methods: {
  }
}
</script>


<style lang="scss" scoped>

.progress-bar{
  display: inline-flex;
  align-content: stretch;
  .progress-container{
    //stroke: darken(#392F32,5%);
    stroke-width: 2px;
    // fill: #392F32;
    .top{
      z-index:2;
    }
  }
  .progress-content{
    stroke: darken(#C2E362,5%);
    stroke-width: 2px;
    fill: #C2E362;
    .top{
      z-index:1;
    }
  }
  .percentage{
    fill: #F8F9F9;
    text-shadow: 1px 1px 1px black;
  }
}

</style>
