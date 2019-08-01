<template>

    <div v-if="$store.state.showModal" id="container">

      <div id="overlay" @click="$store.commit('hideModal')"></div>

      <section id="modal">
        <ModalContentWork v-if="$store.state.modalType=='work'" />
        <ModalContentContact v-else-if="$store.state.modalType=='contact'" />
        <div v-else>
          エラーが発生しました。
          <button @click="$store.commit('hideModal')">閉じる</button>
        </div>
      </section>

    </div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ModalContentWork from '@/components/ModalContentWork.vue';
import ModalContentContact from '@/components/ModalContentContact.vue';

@Component({
  components: {
    ModalContentWork,
    ModalContentContact,
  },
})
export default class ModalView extends Vue {}
</script>


<style scoped lang="scss">
@import "@/scss/common.scss";

#container{
  position: fixed;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  z-index: 999;
}
#overlay{
  position: fixed;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  background: rgba($COLOR_MAIN, .1);
  backdrop-filter: blur(8px);
}
#modal{
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 80px auto;
  padding: 48px;
  background: $COLOR_BASE;
  border-radius: 8px;
  box-shadow: 0 16px 32px rgba($COLOR_MAIN, .2);
}
</style>
