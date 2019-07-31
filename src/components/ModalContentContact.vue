<template><div>

  <button @click="$store.commit('hideModal')"><i class="material-icons-outlined">close</i></button>

  <h2>お仕事のご依頼について</h2>
  <p>現在転職活動は行っておりませんが、請負もしくは委任契約での依頼は引き受けております。ロゴやUIなどのデザイン制作、Webフロントのコーディング、イベントでの登壇等を受け付けております。</p>

  <h2>ご連絡</h2>
  <p>ご連絡はSNSにてお願いいたします。</p>

</div></template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class ModalContentContact extends Vue {}
</script>


<style scoped lang="scss">
@import "@/scss/common.scss";
</style>
