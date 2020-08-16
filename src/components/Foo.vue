<template>
  <div>
    Foo
    <button @click="onClick">点击</button>
  </div>
</template>

<script>
export default {
  methods: {
    onClick() {
      alert(111);
    },
  },
};
</script>