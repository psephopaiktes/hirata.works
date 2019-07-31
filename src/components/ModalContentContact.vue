<template><div>

  <button @click="$store.commit('hideModal')"><i class="material-icons-outlined">close</i></button>
  <p style="font-weight:100">あいうえお</p>
  <p style="font-weight:200">あいうえお</p>
  <p style="font-weight:300">あいうえお</p>
  <p style="font-weight:400">あいうえお</p>
  <p style="font-weight:500">あいうえお</p>
  <p style="font-weight:600">あいうえお</p>
  <p style="font-weight:700">あいうえお</p>
  <p style="font-weight:800">あいうえお</p>
  <p style="font-weight:900">あいうえお</p>
  <p>あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。 またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガント・デストゥパーゴなど、いまこの暗い巨きな石の建物のなかで考えていると、みんなむかし風のなつかしい青い幻燈のように思われます。では、わたくしはいつかの小さなみだしをつけながら、しずかにあの年のイーハトーヴォの五月から十月までを書きつけましょう</p>

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
