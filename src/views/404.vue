<template><div>

  <h2>404 page not fount</h2>
  <router-link to="/">Home</router-link><br>
  <a href="#" @click="$store.commit('showContactModal')">Contact</a>

</div></template>


<style scoped lang="scss">
@import "@/scss/common.scss";
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

export default class Works extends Vue {

  // data
  private works: any[] = this.$store.state.works;

}
</script>
