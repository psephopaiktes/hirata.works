<template><div>
  <button @click="$store.commit('hideModal')"><i class="material-icons-outlined">close</i></button><br>
  <button @click="">Next</button><br>
  <button @click="">Prev</button>
  <h2>{{ works[wid].title }}</h2>
  <p>{{ works[wid].date }}</p>
  <a :href=works[wid].link target="brank_">LINK</a>
  <p>{{ works[wid].description }}</p>

</div></template>

<style scoped lang="scss">
@import "@/scss/common.scss";
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class ModalContentWork extends Vue {

  // data
  private works: any[] = this.$store.state.works;

  // computed
  public get wid(): string {
    return this.$store.state.wid;
  }

}
</script>
