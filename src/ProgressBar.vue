<template>
  <div class="progress-bar">
    <svg id="line-progress"
      :style="lineStyle">
      <g class="progress-container" :stroke="backgroundColor">
        <line x1="0"
            y1="50%"
            x2="100%"
            y2="50%"
            :stroke-width="strokeWidth" />
      </g>
      <g class="progress-content">
        <line
            x1="0"
            y1="50%"
            x2="100%"
            y2="50%"
            :stroke="color" 
            :fill="'white'" 
            stroke-dasharray="100%"
            :stroke-dashoffset="progressValue"
            :stroke-width="progressWidth" />
      </g>
      <text :style="textStyle" :x="horizontalTextAlignP" :y="verticalTextAlignP">{{value}}%</text>
    </svg>   
    </div>
</template>

<script>
const constants = {
  textColor: 'white',
  textShadow: 'black',
  color: 'green',
  backgroundColor: 'lightgray',
  height: 120,
  width: 120,
  delay: .4,
  fontSize: 14,
  verticalTextAlign: 55,
  horizontalTextAlign: 40,
  strokeWidth: 30,
  strokePadding: 2
}

const s = x => x + 's'
const px = v => v + 'px'

export default {
  name: 'ProgressBar',
  props: {
    value: {
      type: Number,
      require: false,
      default: 0
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
      default: constants.textColor,
      require: false
    },
    textShadow: {
      type: String,
      default: constants.textShadow,
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
    },
    fontSize: {
      type: Number,
      default: constants.fontSize,
      require: false
    },
    verticalTextAlign: {
      type: Number,
      default: constants.verticalTextAlign,
      require: false
    },
    horizontalTextAlign: {
      type: Number,
      default: constants.horizontalTextAlign,
      require: false
    },
    strokeWidth: {
      type: Number,
      default: constants.strokeWidth,
      require: false
    },
    strokePadding: {
      type: Number,
      default: constants.strokePadding,
      require: false
    },
    dynamicProgressText: {
      type: Boolean,
      default: false,
      require: false
    }
  },
  computed: {
    verticalTextAlignP () {
      return this.verticalTextAlign + '%'
    },
    horizontalTextAlignP () {
      if (this.dynamicProgressText) {
        let dynamicHorizontalTextAlign = 0
        if(this.value > 75) {
          dynamicHorizontalTextAlign = 75
        } else {
          dynamicHorizontalTextAlign = this.value 
          dynamicHorizontalTextAlign += 2
        }
        return dynamicHorizontalTextAlign + '%'
      } else {
        return this.horizontalTextAlign + '%'
      }
    },
    progressValue () {
      return (100 - this.value) + '%'
    },
    progressWidth () {
      return this.strokeWidth - this.strokePadding
    },
    lineStyle () {
      return {
        height: px(this.height),
        width: px(this.width),
        fontFamily: this.fontFamily,
        fontSize: px(this.fontSize)
      }
    },
    textStyle () {
      return {
        fill: this.textColor,
        textShadow: '1px 1px 1px ' + this.textShadow
      }
    }
  }
}
</script>


<style lang="scss" scoped>

.progress-bar{
  display: inline-block;
  align-content: stretch;
  .progress-container{
    stroke-width: 2px;
    .top{
      z-index:2;
    }
  }
  .progress-content{
    stroke-width: 2px;
    .top{
      z-index:1;
    }
  }
}

</style>
