<template><div>
  <button @click="$store.commit('hideModal')"><i class="material-icons-outlined">close</i></button><br>
  <h2>{{ works[wid].title }}</h2>
  <p>{{ works[wid].date }}</p>
  <a :href=works[wid].link target="brank_">LINK</a>
  <p>{{ works[wid].description }}</p>
  <!-- <button @click="" class="move prev"><i class="material-icons-outlined">arrow_back</i>PREV</button>
  <button @click="" class="move next">NEXT<i class="material-icons-outlined">arrow_forward</i></button> -->

</div></template>


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


<style scoped lang="scss">
@import "@/scss/common.scss";
.move{
  position: absolute;
  width: 110px;
  height: 48px;
  line-height: 48px;
  color: $COLOR_THEME;
  font-size: 14px;
  i{
    font-size: 1.3em;
    margin: 0 2px;
    vertical-align: text-top;
  }
  &.prev{
    bottom: 0;
    left: 0;
  }
  &.next{
    bottom: 0;
    right: 0;
  }
}
</style>
