<template>
  <div class="progress-bar">
    <svg id="line-progress"
      :style="lineStyle">
      <g class="progress-container" :stroke="defaultOptions.progress.backgroundColor">
        <line x1="0"
            y1="50%"
            x2="100%"
            y2="50%"
            :stroke-width="defaultOptions.layout.strokeWidth" />
      </g>
      <g class="progress-content">
        <line
            x1="0"
            y1="50%"
            x2="100%"
            y2="50%"
            :stroke="defaultOptions.progress.color" 
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
const s = x => x + 's'
const px = v => v + 'px'

export default {
  created () {
    this.defaultOptions = {
      text: {
        color: 'white',
        shadowEnable: true,
        shadowColor: 'black',
        fontSize: 14,
        fontFamily: 'Helvetica',
        dynamicPosition: false
      },
      progress: {
        color: 'green',
        backgroundColor: 'lightgray'
      },
      layout: {
        height: 120,
        width: 120,
        verticalTextAlign: 55,
        horizontalTextAlign: 40,
        strokeWidth: 30,
        strokePadding: 2
      }
    } 
  },
  props: {
    options: {
      type: Object,
      required: false
    },
    value: {
      type: Number,
      required: false,
      default: 0
    }
  },
  name: 'ProgressBar',
  data () {
  	return {
      defaultOptions: Object
    }
  },
  mounted () {
    if(this.options !== null || this.options !== undefined) {
      this.mergeDefaultOptionsWithProp(this.options)
    }
  },
  computed: {
    verticalTextAlignP () {
      return this.defaultOptions.layout.verticalTextAlign + '%'
    },
    horizontalTextAlignP () {
      if (this.defaultOptions.text.dynamicPosition) {
        let dynamicHorizontalTextAlign = 0
        if(this.value > 75) {
          dynamicHorizontalTextAlign = 75
        } else {
          dynamicHorizontalTextAlign = this.value 
          dynamicHorizontalTextAlign += 2
        }
        return dynamicHorizontalTextAlign + '%'
      } else {
        return this.defaultOptions.layout.horizontalTextAlign + '%'
      }
    },
    progressValue () {
      return (100 - this.value) + '%'
    },
    progressWidth () {
      return this.defaultOptions.layout.strokeWidth - this.defaultOptions.layout.strokePadding
    },
    lineStyle () {
      return {
        height: px(this.defaultOptions.layout.height),
        width: px(this.defaultOptions.layout.width),
        fontFamily: this.defaultOptions.text.fontFamily,
        fontSize: px(this.defaultOptions.text.fontSize)
      }
    },
    textStyle () {
      return {
        fill: this.defaultOptions.text.color,
        textShadow: this.defaultOptions.text.shadowEnable ? '1px 1px 1px ' + this.defaultOptions.text.shadowColor : 'none'
      }
    }
  },
  methods: {
    mergeDefaultOptionsWithProp: function (options) {
      var result = this.defaultOptions
      for (var option in options)
      {
        if (options[option] !== null && typeof(options[option]) === 'object') {
          for (var subOption in options[option]) {
            if (options[option][subOption] !== undefined && options[option][subOption] !== null) {
              result[option][subOption] = options[option][subOption]
            }
          }
        } else {
          result[option] = options[option]
        }
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
