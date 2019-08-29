<template><main class="panel" v-scroll="showPanel">

  <div class="content">
    <p class="copy en">Hello.</p>
    <!-- ↑めっちゃでかく -->
    <!-- ↓めっちゃよわく -->
    <p class="en">I'm Akira HIRATA, a Digital Product Designer and Web Front-end Engineer.</p>
    <ul class="grid">
      <li></li>
    </ul>
  </div>

  <Footer />

</main></template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Footer from '@/components/Footer.vue';

@Component({
  components: {
    Footer,
  },
})
export default class Home extends Vue {

  // methods
  public showPanel(): void {
    const panel = document.getElementsByClassName('panel')[0];
    if (!panel) { return; }
    if (window.pageYOffset === 0) {
      panel.classList.remove('show');
    } else {
      panel.classList.add('show');
    }
  }
}
</script>


<style scoped lang="scss">
@import "@/scss/common.scss";
.copy{
  font-size: 64px;
  font-weight: 800;
  letter-spacing: .2em;
  @media (max-width: $WIDTH_SP){
    font-size: 32px;
  }
}
.panel{
  background-color: $COLOR_THEME;
  transition: background-color .8s ease-in-out;
  /* 他のTranstionには要注意 */
  /* 要塞検討 */
}
.show{
  background-color: $COLOR_BASE;
  transition: background-color .8s ease-in-out;
}
.content{
  width: calc(100% - 48px);
  max-width: calc(100% - 48px);
}
</style>
