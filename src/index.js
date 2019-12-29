import CountUp from './countup.vue';
export default CountUp;
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('count-up', CountUp);
}