<template>
  <div id="progress-bar-line">
    <svg
      id="line-progress"
      :style="lineStyleSvgFrame"
    >
      <line
        x1="0"
        y1="50%"
        x2="100%"
        y2="50%"
        :stroke="defaultOptions.progress.backgroundColor"
        :stroke-width="defaultOptions.layout.height"
      />
      <line
        x1="0"
        y1="50%"
        :x2="progressValue"
        y2="50%"
        :stroke="progressColor"
        :stroke-width="lineProgressHeight"
      />
      <text
        :style="textStyle"
        :x="horizontalTextAlignP"
        :y="verticalTextAlignP"
      >
        {{ value }}%
      </text>
    </svg>
  </div>
</template>

<script>
import { ProgressBarMixin } from './ProgressBarMixin'

export default {
  name: 'ProgressBarLine',
  mixins: [ProgressBarMixin],
  props: {
    options: {
      type: Object,
      required: false,
      default: () => {}
    },
    value: {
      type: Number,
      required: false,
      default: 0
    }
  }
}
</script>
