# vue-progress-bar
Progressbar for vue.js

[Live demo](http://softwarefun.no/#/progressbar)

[![license][0]][1] 
[![updated][2]][99] 
[![dependecies][3]][99]
[![npm][4]][98]
[![bugs][5]][99]
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
| width     | Number           | 100       | Width of labels|
| height      | Number           | 34       | Height |

### Events

| Name   | Description              |
| ---    | ---                      |
| full | Triggered when 100% |


[0]: https://img.shields.io/badge/license-MIT-green.svg
[1]: https://github.com/larsmars/vuejs-toggle-switch/blob/master/LICENSE
[2]: https://img.shields.io/badge/updated-february%202018-brightgreen.svg
[3]: https://img.shields.io/badge/dependencies-1-brightgreen.svg
[4]: https://img.shields.io/badge/npm-v1.0.11-blue.svg
[5]: https://img.shields.io/badge/bugs-0-red.svg
[98]: https://www.npmjs.org/package/vuejs-toggle-switch
[99]: https://github.com/larsmars/vuejs-toggle-switch

