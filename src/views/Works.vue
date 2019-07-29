<template><div>

  <h1>This is an works pageaa</h1>

  <ul>
    <li v-for="(data,id,i) in works" :key="i" @click="$store.commit('showModal', id)">
      <img :src="`@/assets/works/${id}/thumbnail.png`" :alt=data.title loading="lazy">
    </li>
  </ul>

</div></template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

export default class Works extends Vue {

  // data
  private works: any[] = this.$store.state.works;

}
</script>
