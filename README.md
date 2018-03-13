# vuejs-progress-bar
Progressbar for vue.js
svg based
NB! Beta 0.0.4, not ready for prod

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
      :width="120"
      :backgroundColor="'lightgray'"
      :value="value"
      :fontFamily="'Helvetica'"
      :horizontalTextAlign="40"
      :verticalTextAlign="53.5"
      />
```

### Properties

| Name      | Type              | Default     | Description                        |
| ---       | ---               | ---         | ---                                |
| value     | Number           | 0      | Value of progressbar %|
| textColor      | String           | white       | Text color |
| textShadow      | String           | black       | Text shadow |
| color     | String           | green      | Progress color|
| backgroundColor      | String           | lightgray       | Background color |
| width     | Number           | 120      | Width|
| height      | Number           | 120       | Height |
| fontFamily      | String           | n/a       | Font family text|
| fontSize     | String           | 14px       | Font size of % text|
| horizontalTextAlign     | Number           | 40      | Positioning of % text horizontal |
| verticalTextAlign      | Number           | 55       | Positioning of % text vertical |

