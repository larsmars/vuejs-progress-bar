# vuejs-progress-bar
ProgressBar for vue.js
svg/vector based
v0.0.8
NB! Beta

[Live demo](http://softwarefun.no/#/progressbar)

> Only 1 dependency (vue)

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
    height: 120,
    width: 120,
    verticalTextAlign: 55,
    horizontalTextAlign: 40,
    strokeWidth: 30,
    strokePadding: 2,
    type: 'line'
  }
}
```

### Properties

| Name      | Type              | Default     | Description                        |
| ---       | ---               | ---         | ---                                |
| value           | Number           | 0      | Value of progressbar % |
| textColor       | String           | #FFFFFF      | Text color |
| shadowEnable    | String           | true       | Text shadow enable |
| shadowColor     | String           | #000000     | Text shadow color |
| fontFamily      | String           | Helvetica    | Font family text |
| fontSize        | String           | 14px         | Font size of % text |
| dynamicPosition | Boolean          | false        | Progress text % follow progress bar |
| color           | String           | green        | Progress color, use hex or rgb |
| backgroundColor | String           | lightgray    | Background color, use hex or rgb |
| width           | Number           | 120          | Width outer boundaries |
| height          | Number           | 120          | Height outer boundaries, use strok for progress height |
| horizontalTextAlign    | Number    | 40           | Positioning of % text horizontal |
| verticalTextAlign      | Number    | 55           | Positioning of % text vertical |
| strokeWidth     | Number           | 30           | Width of background of progress |
| strokePadding   | Number           | 2            | Padding between background and progress bar => gives progress width |
| type            | String           | line         | type of progress bar, line or cylinder |
