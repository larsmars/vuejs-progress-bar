<template>
  <div id="progress-bar-cylinder">
    <svg
      id="cylinder-progress"
      width="150px"
      height="120px"
    >
      <g
        class="progress-container"
        :stroke="cylinderBackgroundColorStroke"
        :fill="backgroundColor"
      >
        <rect
          x="0"
          y="20"
          width="100%"
          height="80"
        />
        <ellipse
          cx="75"
          cy="20"
          rx="50%"
          ry="15"
          class="top"
        />
        <ellipse
          cx="75"
          cy="100"
          rx="50%"
          ry="15"
          class="bottom"
        />
      </g>
      <g
        class="progress-content"
        :stroke="cylinderColorStroke"
        :fill="cylinderProgressColor"
      >
        <rect
          x="0"
          :y="rectY"
          width="100%"
          :height="rectHeight"
        />
        <ellipse
          cx="75"
          :cy="topCy"
          rx="50%"
          ry="15"
          class="top"
        />
        <ellipse
          cx="75"
          cy="100"
          rx="50%"
          ry="15"
          class="bottom"
        />
      </g>
      <g class="progress-container">
        <ellipse
          :stroke="cylinderBackgroundColorStroke"
          cx="75"
          cy="20"
          rx="50%"
          ry="15"
          class="top"
          fill="none"
        />
      </g>
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
  name: 'ProgressBarCylinder',
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

<style lang="scss" scoped>
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
</style>
