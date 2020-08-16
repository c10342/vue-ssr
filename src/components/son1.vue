<template>
  <div>
    son1
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