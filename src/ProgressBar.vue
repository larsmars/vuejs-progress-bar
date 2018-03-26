<template>
  <div class="progress-bar">
    <div v-if="circle" :style="textStyleCircle" id="cont">
      {{value+'%'}}
    </div>
    <svg v-if="circle" :width="width" :height="height" viewBox="0 0 120 120">
        <circle cx="60" cy="60" :r="radiusCircle" fill="none" :stroke="defaultOptions.progress.backgroundColor" :stroke-width="defaultOptions.layout.strokeWidth" />
        <circle cx="60" cy="60" :r="radiusCircle" fill="none" :stroke="defaultOptions.progress.color" :stroke-width="defaultOptions.layout.strokeWidth" :stroke-dasharray="strokeCircle" :stroke-dashoffset="strokeCircleOffset" />
    </svg>
    <svg v-if="cylinder" id="cylinder-progress" 
      width="150px" 
      height="120px">
      <g class="progress-container" :stroke="cylinderBackgroundStroke" :fill="defaultOptions.progress.backgroundColor">
        <rect x="0" y="20" width="100%" height="80"></rect>
        <ellipse cx="75" cy="20" rx="50%" ry="15" class="top"></ellipse>
        <ellipse cx="75" cy="100" rx="50%" ry="15" class="bottom"></ellipse>
      </g>
      <g class="progress-content" :stroke="cylinderColorStroke" :fill="cylinderProgressColor">
        <rect x="0" :y="rectY" width="100%" :height="rectHeight"></rect>
        <ellipse cx="75" :cy="topCy" rx="50%" ry="15" class="top"></ellipse>
        <ellipse cx="75" cy="100" rx="50%" ry="15" class="bottom"></ellipse>
      </g>
      <g class="progress-container">
        <ellipse :stroke="cylinderBackgroundStroke" cx="75" cy="20" rx="50%" ry="15" class="top" fill="none"></ellipse>
      </g>
      <text :style="textStyle" :x="horizontalTextAlignP" :y="verticalTextAlignP">{{value}}%</text>
    </svg> 
    <svg v-if="line" id="line-progress"
      :style="lineStyle">
        <line x1="0"
          y1="50%"
          x2="100%"
          y2="50%"
          :stroke="defaultOptions.progress.backgroundColor"
          :stroke-width="defaultOptions.layout.height" />
        <line
          x1="0"
          y1="50%"
          :x2="progressValue"
          y2="50%"
          :stroke="defaultOptions.progress.color"
          :stroke-width="progressWidth" />
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
        color: '#FFFFFF',
        shadowEnable: true,
        shadowColor: '#000000',
        fontSize: 14,
        fontFamily: 'Helvetica',
        dynamicPosition: false,
        hideText: false
      },
      progress: {
        color: '#2dbd2d',
        backgroundColor: '#C0C0C0',
      },
      layout: {
        height: 120,
        width: 120,
        verticalTextAlign: 55,
        horizontalTextAlign: 43,
        strokeWidth: 30,
        progressPadding: 0,
        type: 'line'
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
      defaultOptions: Object,
      rectHeight: 0,
      rectY: 90,
      topCy: -20,
      radiusCircle: 54,
      strokeCircle: 0,
      strokeCircleOffset: 0
    }
  },
  mounted () {
    if(this.options !== null && this.options !== undefined) {
      this.mergeDefaultOptionsWithProp(this.options)
    }
  },
  computed: {
    cylinder () {
      return this.defaultOptions.layout.type === 'cylinder'
    },
    line () {
      return this.defaultOptions.layout.type === 'line'
    },
    circle () {
      return this.defaultOptions.layout.type === 'circle'
    },
    width () {
      return this.defaultOptions.layout.width
    },
    height () {
      return this.defaultOptions.layout.height
    },
    viewBoxCircle () {
      return '0 0' + ' ' + this.height + ' ' + this.width
    },
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
    cylinderProgressColor () {
      if (this.value === 0) {
        return this.defaultOptions.progress.backgroundColor
      } else {
        return this.defaultOptions.progress.color
      }
    },
    cylinderBackgroundColor () {
      if (this.value === 100) {
        return this.defaultOptions.progress.color
      } else {
        return this.defaultOptions.progress.backgroundColor
      }
    },
    cylinderBackgroundStroke () {
        return this.LightenColor(this.cylinderBackgroundColor, 25);
    },
    cylinderColorStroke () {
        return this.LightenColor(this.cylinderProgressColor, 5);
    },
    progressValue () {
      return this.value + '%'
    },
    progressWidth () {
      return px(this.defaultOptions.layout.height - this.defaultOptions.layout.progressPadding)
    },
    lineStyle () {
      return {
        height: px(this.defaultOptions.layout.height),
        width: px(this.defaultOptions.layout.width)
      }
    },
    textStyle () {
      return {
        display: this.defaultOptions.text.hideText ? 'none' : 'inherit',
        fill: this.defaultOptions.text.color,
        fontSize: px(this.defaultOptions.text.fontSize),
        fontFamily: this.defaultOptions.text.fontFamily,
        textShadow: this.defaultOptions.text.shadowEnable ? '1px 1px 1px ' + this.defaultOptions.text.shadowColor : 'none'
      }
    },
    textStyleCircle () {
      return {
        color: this.defaultOptions.text.color,
        fontSize: px(this.defaultOptions.text.fontSize),
        fontFamily: this.defaultOptions.text.fontFamily,
        textShadow: this.defaultOptions.text.shadowEnable ? '1px 1px 1px ' + this.defaultOptions.text.shadowColor : 'none',
        top: px(this.defaultOptions.layout.verticalTextAlign),
        left: px(this.defaultOptions.layout.horizontalTextAlign),
        position: 'relative'
      }
    }
  },
  watch: {
    value: function (val) {
      let invertedVal = 100 - val;
      if (this.cylinder) {
        this.rectHeight = (80 - (invertedVal*.8));
        this.rectY = (invertedVal*.8)+20;
        this.topCy = ((-invertedVal*-.8)+20);
        this.cylText =  (100-(invertedVal)+"%");
      } else if (this.circle) {
        this.strokeCircle = 2 * Math.PI * this.radiusCircle
        this.strokeCircleOffset = this.strokeCircle * ((100-val)/100)
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
    },
    LightenColor: function (color, level) {
    var usePound = false;
    if (color[0] == "#") {
        color = color.slice(1);
        usePound = true;
    }
 
    var num = parseInt(color,16);
    var r = (num >> 16) + level;

    if (r > 255) r = 255;
    else if  (r < 0) r = 0;
 
    var b = ((num >> 8) & 0x00FF) + level;
 
    if (b > 255) b = 255;
    else if  (b < 0) b = 0;
 
    var g = (num & 0x0000FF) + level;
 
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
 
    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
  
    }
  }
}
</script>


<style lang="scss" scoped>

.progress-bar {
  display: inline-block;
  align-content: stretch;

  .progress-container {
    stroke-width: 2px;
    .top {
      z-index: 2;
    }
  }
  .progress-content {
    stroke-width: 2px;
    .top {
      z-index:1;
    }
  }
}

</style>
