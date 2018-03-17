# vuejs-progress-bar
ProgressBar for vue.js
svg/vector based
v0.0.12

<img src="https://img.shields.io/badge/license-MIT-green.svg" /> <img src="https://img.shields.io/badge/dependencies-1-brightgreen.svg" /> <img src="https://img.shields.io/badge/bugs-0-red.svg" />

[Live demo](http://softwarefun.no/#/progressbar)

<img src="http://softwarefun.no/static/demo_progress_barV2.png" height="260">

> Only 1 dependency (vue)

Do you have questions or want a new feature? Use the "Issues" section :point_left:

## Setup
install:
```bash
npm install vuejs-progress-bar --save
```

Import: (in your main.js)
```javascript
import ProgressBar from 'vuejs-progress-bar'
Vue.use(ProgressBar)
```
## Usage
Use: (in your local .vue file/component, html section)

```xml
    <progress-bar
      :options="options"
      :value="value"
      />

<!-- Options struct: -->
options: {
  text: {
    color: '#FFFFFF',
    shadowEnable: true,
    shadowColor: '#000000',
    fontSize: 14,
    fontFamily: 'Helvetica',
    dynamicPosition: false
  },
  progress: {
    color: '#2dbd2d',
    backgroundColor: '#C0C0C0'
  },
  layout: {
    width: 120,
    height: 120,
    verticalTextAlign: 55,
    horizontalTextAlign: 43,
    strokeWidth: 30,
    strokePadding: 2,
    type: 'line'
  }
}
```

### Properties

| Name      | Type              | Default     | Description                        |
| ---       | ---               | ---         | ---                                |
| value           | Number           | 0            | Value of progressbar % |
| color           | String           | #FFFFFF      | Text color |
| shadowEnable    | String           | true         | Text shadow enable |
| shadowColor     | String           | #000000      | Text shadow color |
| fontSize        | String           | 14px         | Font size of % text |
| fontFamily      | String           | Helvetica    | Font family text |
| dynamicPosition | Boolean          | false        | Progress text % follow progress bar |
| color           | String           | #2dbd2d      | Progress color, use hex or rgb |
| backgroundColor | String           | #C0C0C0      | Background color, use hex or rgb |
| width           | Number           | 120          | Width outer boundaries |
| height          | Number           | 120          | Height outer boundaries, use strok for progress height |
| verticalTextAlign      | Number    | 55           | Positioning of % text vertical |
| horizontalTextAlign    | Number    | 43           | Positioning of % text horizontal |
| strokeWidth     | Number           | 30           | Width of background of progress |
| strokePadding   | Number           | 2            | Padding between background and progress bar => gives progress width |
| type            | String           | line         | type of progress bar, line, circle or cylinder |
