<template>
  <div>
    son
    {{$store.state.age}}
    <Son2 />
  </div>
</template>

<script>
import Son2 from "./son2";
export default {
  components: {
    Son2,
  },
  asyncData(store) {
    return store.dispatch("changeAge");
  },
};
</script>