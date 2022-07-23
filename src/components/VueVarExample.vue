<template>
  <ul>
    <vue-var v-for="item in items" :key="item" :data="myMethod(item)">
      <li slot="default" slot-scope="{data}">
        Item {{item}} | My Method {{data}} | {{data % 2 == 0 ? 'Pair':'Odd'}}
      </li>
    </vue-var>
  </ul>
</template>

<script>
export default {
  name: 'VueVarExample',
  data: () => ({
    items: [],
  }),
  created() {
    this.items = Array.from({length: 10}, (_, i) => i + 1);
  },
  methods: {
    myMethod(number) {
      return Math.pow(number, 2);
    }
  }
}
</script>

<style>

</style>