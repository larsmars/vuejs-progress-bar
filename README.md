# vue-progress-bar
Progressbar for vue.js

NB! Beta 0.0.1 mode, not ready for prod

[Live demo](http://softwarefun.no/#/progressbar)

> Only 1 dependency (vue)

## Setup
install:
```bash
npm install vue-progress-bar --save
```

Import: (in your main.js)
```javascript
import ProgressBar from 'vue-progress-bar'
Vue.use(ProgressBar)
```
## Usage
Use: (in your local .vue file/component, html section)

```xml

      <progress-bar
       /> 
```

### Properties

| Name      | Type              | Default     | Description                        |
| ---       | ---               | ---         | ---                                |
| value     | Number           | 0      | Value of progressbar %|
| textColor      | String           | white       | Text color |
| color     | String           | green      | Progress color|
| backgroundColor      | String           | lightgray       | Background color |
| width     | Number           | 120      | Width|
| height      | Number           | 120       | Height |

