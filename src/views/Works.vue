<template><div>

  <ModalView :id=modalId @hideModal="hideModal()" />

  <h1>This is an works page</h1>

  <ul>
    <li v-for="(data,id,i) in works" :key="i" @click="showModal(id)">
      <img :src="`@/assets/works/${id}/thumbnail.png`" :alt=data.title loading="lazy">
    </li>
  </ul>

</div></template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ModalView from '@/components/ModalView.vue'; // @ is an alias to /src

@Component({
  components: {
    ModalView,
  },
})
export default class Works extends Vue {

  // data
  private works: any[] = this.$store.state.works;
  private modalId: string = '';

  // methods
  private showModal(id: string): void {
    this.modalId = id;
  }
  private hideModal(): void {
    this.modalId = '';
  }
  private nextModal(): void {
    // TODO
    // this.modalId = '';
  }
  private prevModal(): void {
    // TODO
    // this.modalId = '';
  }
}
</script>
