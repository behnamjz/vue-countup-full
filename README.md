# vue-countup

> It's a vue component that will count to a target number with support englisgh and arabic numbers

vue-countTo is a dependency-free, lightweight vue component that can be overwrited  easingFn by yourself.
You can set startVal and endVal ,it will automatic judge count up or count down.
It is support vue-ssr.
It is learn from countUp.js;


### How to use?
```bash
npm install vue-countup-full
```

### Example

```vue
<template>
  <countup :value='value' :countstep='countstep' :dir='dir'></countup>
</template>

<script>
  import countUp from 'vue-countup';
  export default {
    components: { countUp },
    data () {
      return {
        value: 1000,
        countstep: 20,
        dir: 'RTl'
      }
    }
  }
</script>
```

### Options
|    Property    |    Description   |   type   |	default	|
| -----------------  | ---------------- | :--------: | :----------: |
| value         | the value you want to arrive at |Number | 2017 |
| countstep  | count up step value | Number | 3000 |
| dir     | Support English and Arabic numbers | String | LTR |
