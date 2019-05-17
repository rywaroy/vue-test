<template>
  <div class="counter">
    <p class="title">{{title}}</p>
    <div class="increase" @click="increase()">加</div>
    <p class="count">{{count}}</p>
    <p class="type">{{count | numberType}}</p>
    <p class="total">{{base}} + {{count}} = {{total}}</p>
    <div class="decrease" @click="decrease()">减</div>
    <button class="emit" @click="emit()">提交</button>
  </div>
</template>

<script>
import counterMixin from '@/mixins/counter';

export default {
  mixins: [counterMixin],
  props: {
    title: {
      type: String,
      default: '',
    },
    num: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      count: 0,
      base: 10,
    };
  },
  methods: {
    increase() {
      this.count += this.num;
    },
    decrease() {
      this.count -= this.num;
    },
    emit() {
      this.$emit('number', this.count);
    },
  },
  computed: {
    total() {
      return this.count + this.base;
    },
  },
  filters: {
    numberType(number) {
      if (number > 0) {
        return '正数';
      }
      if (number < 0) {
        return '负数';
      }
      return '';
    },
  },
};
</script>

<style>

</style>
