<template><div class="content">

  <h2 class="en">404 page not fount</h2>
  <router-link to="/">Home</router-link>

</div></template>


<style scoped lang="scss">
@import "@/scss/common.scss";
.content{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: calc(100vh - 320px);
}
h2{
}
a{
  color: darken($COLOR_THEME, 40%);
  margin-top: 24px;
}
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

export default class Works extends Vue {

  // data
  private works: any[] = this.$store.state.works;

}
</script>
