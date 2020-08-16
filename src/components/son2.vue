<template>
  <div>
    son2
    {{$store.state.age}}
    <Son3 />
  </div>
</template>

<script>
import Son3 from "./son3";
export default {
  components: {
    Son3,
  },
  asyncData(store) {
    return store.dispatch("changeAge");
  },
};
</script>