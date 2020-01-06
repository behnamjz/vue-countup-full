# vue-countup-full

> It's a vue component that will count to a target number with support english and arabic numbers

vue-countup-full is a dependency-free, lightweight vue component that can be overwrited by yourself.
You can set value and step count ,it will automatic count up with your step.
It is support vue-ssr.

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
  import countUp from 'vue-countup-full';
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
| value         | the value you want to arrive at |Number | |
| countstep  | count up step value | Number | |
| dir     | Support English and Arabic numbers | String | LTR |
