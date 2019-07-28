<template>

  <div v-if="id" id="container">

    <div id="overlay" @click="$emit('hideModal')"></div>

    <section id="modal">
      <button @click="$emit('hideModal')">X</button><br>
      <button @click="$emit('nextModal')">Next</button><br>
      <button @click="$emit('prevModal')">Prev</button>
      <h2>{{ works[id].title }}</h2>
      <p>{{ works[id].date }}</p>
      <a :href=works[id].link target="brank_">LINK</a>
      <p>{{ works[id].description }}</p>
    </section>

  </div>

  <div v-else></div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ModalView extends Vue {
  @Prop() private id!: string;

  // data
  private works: any[] = this.$store.state.works;
}
</script>

<style scoped lang="scss">
#container{
  position: fixed;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  overflow: scroll;
}
#overlay{
  position: fixed;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  background: rgba($COLOR_MAIN, .1);
  backdrop-filter: blur(12px);
  /* cursor: url(TODO); */
  cursor: pointer;
}
#modal{
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 80px auto;
  padding: 48px;
  background: $COLOR_BASE;
  box-shadow: 0 16px 32px rgba($COLOR_MAIN, .3);
}
</style>
