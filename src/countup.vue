<template>
  <div class="countup" :value="value" :countstep="countstep" :dir="dir">{{count}}</div>
</template>
<script>
import Vue from 'vue'; 
export default {
  data() {
    return {
      count: null
    };
  },
  props: {
    countstep: {
      type: Number,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    dir: {
      type: String,
      required: false,
      default: 'ltr',
    }
  },
  created() {
    this.onReady();
  },
  methods: {
    onReady() {
      let self = this;
      var step = parseInt(self.countstep);
      var value = parseInt(self.value);
      var dir = self.dir.toLowerCase();
      let i = 0;
      let interval = setInterval(() => {
        if (i > value - step) {
          clearInterval(interval);
        } else {
          let value = i + step
          if (dir === 'ltr') {
             this.count = i + step;
          } else if (dir === 'rtl') {
            this.count = this.arabicNumbers(i + step);
          }
        }
        i = i + step;
      }, 100);
    },
    arabicNumbers (value) {
      const persian = {
        0: '۰',
        1: '۱',
        2: '۲',
        3: '۳',
        4: '۴',
        5: '۵',
        6: '۶',
        7: '۷',
        8: '۸',
        9: '۹'
      }

      let result = value.toString()
      for (let i = 0; i <= 9; i++) {
        result = result.replace(new RegExp(`${i}`, 'g'), persian[i])
      }
      Vue.nextTick(() => this.value = result)
      return result
    }
  }
};
</script>
<style scoped>
.counup {
  display: inline-block;
}
</style>