<template><main class="panel" v-scroll="showPanel">

  <section id="hero">
    <div class="copy en">
      <h1>Akira HIRATA</h1>
      <p>is a Digital Product Designer</p>
      <p>and Web Front-end Engineer.</p>
    </div>
    <img class="portrait" src="@/assets/portrait.png" alt="平田のポートレート写真">
  </section>

  <ul id="grid"></ul>

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

#hero{
  position: relative;
  margin: 72px 64px 0 64px;
  height: calc(100vh - 160px);
  border: 12px solid rgba($COLOR_BASE,.8);
  background-color: rgba($COLOR_THEME,.4);
  .copy{
    position: absolute;
    top: 32%;
    right: 64px;
    color: $COLOR_BASE;
    z-index: 999;
    text-shadow: 0 0 48px rgba($COLOR_MAIN,.1);
    h1{
      font-size: 72px;
      letter-spacing: .15em;
      line-height: 1;
    }
    p{
      font-size: 36px;
      letter-spacing: .1em;
      line-height: 1.5;
    }
  }
  .portrait{
    display: block;
    height: calc(100vh - 120px);
    position: absolute;
    bottom: 0px;
    left: 16px;
  }
}

#grid{
  position: relative;
  width: calc(100% - 304px);
  height: 800px;
  margin: -96px auto 0;
  background: $COLOR_MAIN;
}
</style>
