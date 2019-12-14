<template>
  <div id="progress-bar-battery">
    <svg
      id="battery-progress"
      :style="batteryStyleSvgFrame"
    >
      <rect
        :fill="frameColor"
        stroke-width="3"
        :style="batteryStyleFrame"
        rx="5"
        ry="5"
      />
      <rect
        :fill="frameColor"
        stroke-width="3"
        :x="defaultOptions.layout.width - 0"
        :y="defaultOptions.layout.height / 4"
        :width="defaultOptions.layout.width / 16"
        :height="defaultOptions.layout.height / 2"
        rx="1"
      />
      <rect
        :fill="progressColor"
        :x="defaultOptions.layout.progressPadding / 2"
        :y="defaultOptions.layout.progressPadding / 2"
        :style="batteryProgress"
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
  name: 'ProgressBarBattery',
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
