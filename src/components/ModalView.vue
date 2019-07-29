<template>

    <div v-if="mid" id="container">

      <div id="overlay" @click="$store.commit('hideModal')"></div>

      <section id="modal">
        <button @click="$store.commit('hideModal')">X</button><br>
        <button @click="">Next</button><br>
        <button @click="">Prev</button>
        <h2>{{ works[mid].title }}</h2>
        <p>{{ works[mid].date }}</p>
        <a :href=works[mid].link target="brank_">LINK</a>
        <p>{{ works[mid].description }}</p>
      </section>

    </div>

    <div v-else></div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ModalView extends Vue {
  // data
  private works: any[] = this.$store.state.works;

  // computed
  public get mid(): string {
    return this.$store.state.modal;
  }
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
