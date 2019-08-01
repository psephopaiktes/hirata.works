<template><div>

  <button @click="$store.commit('hideModal')"><i class="material-icons-outlined">close</i></button>

  <h2 class="subHeadline">お仕事のご依頼について</h2>
  <p>現在転職活動は行っておりませんが、請負もしくは委任契約での依頼は引き受けております。ロゴやUIなどのデザイン制作、Webフロントのコーディング、イベントでの登壇等を受け付けております。</p>

  <h2 class="subHeadline">ご連絡</h2>
  <p>ご連絡はSNSにてお願いいたします。</p>
  <ul>
    <li><a href="https://twitter.com/psephopaiktes" target="brank_">Twitter</a></li>
    <li><a href="https://www.facebook.com/psephopaiktes" target="brank_">Facebook</a></li>
  </ul>

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
