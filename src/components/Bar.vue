<template>
  <div>
    Bar
    {{$store.state.name}}
    <Son />
    <Son1 />
  </div>
</template>

<script>
import Son from "./son";

import Son1 from "./son1";
export default {
  components: {
    Son,
    Son1,
  },
  asyncData(store) {
    return store.dispatch("changeName");
  },
};
</script>

<style scoped>
div {
  background-color: red;
}
</style>