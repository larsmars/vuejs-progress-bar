# vuejs-progress-bar
ProgressBar for vue.js <br>
SVG/Vector based <br>
4 modes: _Line_, _Circle_, _Cylinder_ and _Battery_ <br>
v1.2.8

<img src="https://img.shields.io/badge/license-MIT-green.svg" /> <img src="https://img.shields.io/badge/dependencies-0-brightgreen.svg" /> <img src="https://img.shields.io/badge/bugs-0-red.svg" />

[Live demo](http://softwarefun.no/#/progressbar)

<img src="https://softwarefun.no/demo_progress_bar.png" height="260">

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
    dynamicPosition: false,
    hideText: false
  },
  progress: {
    color: '#2dbd2d',
    backgroundColor: '#333333',
    inverted: false
  },
  layout: {
    height: 35,
    width: 140,
    verticalTextAlign: 61,
    horizontalTextAlign: 43,
    zeroOffset: 0,
    strokeWidth: 30,
    progressPadding: 0,
    type: 'line'
  }
}
```

### Properties

| Name            | Type             | Default      | Description            |
| ---             | ---              | ---          | ---                    |
| value           | Number           | 0            | Value of progressbar % |
| color           | String           | #FFFFFF      | Text color |
| shadowEnable    | String           | true         | Text shadow enable |
| shadowColor     | String           | #000000      | Text shadow color |
| hideText        | Boolean          | false        | Hide text (%) |
| fontSize        | String           | 14px         | Font size of % text |
| fontFamily      | String           | Helvetica    | Font family text |
| dynamicPosition | Boolean          | false        | Progress text % follow progress bar |
| color           | String           | #2dbd2d      | Progress color, use hex or rgb |
| backgroundColor | String           | #C0C0C0      | Background color, use hex or rgb |
| inverted        | Boolean          | false        | Invert _circle_ progress |
| width           | Number           | 140          | Width |
| height          | Number           | 35           | Height, use strok for progress height |
| verticalTextAlign      | Number    | 61           | Positioning of % text vertical |
| horizontalTextAlign    | Number    | 43           | Positioning of % text horizontal |
| zeroOffset      | Number           | 0            | Offset for zero (0%) for line progress bar |
| strokeWidth     | Number           | 30           | Width of background of progress |
| progressPadding | Number           | 0            | Padding between background and progress bar _(line only)_ |
| type            | String           | line         | type of progress bar: _line_, _circle_, _cylinder_ or _battery_ |

## Update package:

### 1. Compile and build for production
```
npm run build
```

### 2. check into git
```
git add .
git commit -m "Message.."
```

### 3. Publish to NPM
```
# Do some work...

# x.x.1 -> x.x.2
npm version patch

# x.1.0 -> x.2.0
npm version minor

# 1.0.0 -> 2.0.0
npm version major

```
