<template>
  <div>
    son3
    {{$store.state.age}}
  </div>
</template>

<script>
export default {
  asyncData(store) {
    return store.dispatch("changeAge");
  },
};
</script>