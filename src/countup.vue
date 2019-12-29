<template>
  <div :class="classname" :value="value" :countstep="countstep" :dir="dir"></div>
</template>
<script>
import Vue from 'vue'; 
export default {
  data() {
    return {};
  },
  props: {
    classname: String,
    countstep: Number,
    value: Number,
    dir: String
  },
  methods: {
    onReady(mval) {
      const countup = document.querySelector("." + mval);
      const numberdiv = document.querySelectorAll("." + mval)
      var step = parseInt(countup.getAttribute("countstep"));
      var value = parseInt(countup.getAttribute("value"));
      var lang = countup.getAttribute("lang").toLowerCase();
      let i = 0;
      let interval = setInterval(() => {
        if (i > value - step) {
          clearInterval(interval);
        } else {
          let value = i + step
          if (lang === 'ltr') {
             countup.innerHTML = i + step;
          } else if (lang === 'rtl') {
            countup.innerHTML = this.arabicNumbers(i + step);
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