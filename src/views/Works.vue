<template><div class="content">

  <h2 class="headline en">WORKS</h2>

  <nav class="en"><ul>
    <li>ALL</li>
    <li>UI</li>
    <li>CODE</li>
    <li>GRAPHIC</li>
    <li>OTHER</li>
  </ul></nav>

  <ul id="works">
    <li v-for="(data,wid,i) in works" :key="i" @click="$store.commit('showWorkModal', wid)">
      <img :src="`@/assets/works/${wid}/thumbnail.png`" :alt=data.title loading="lazy">
    </li>
  </ul>

</div></template>


<style scoped lang="scss">
@import "@/scss/common.scss";

nav{
  margin: 48px auto 0;
  ul{
    display: flex;
    justify-content: center;
  }
  li{
    min-width: 56px;
    border-radius: 16px;
    line-height: 1;
    margin: 0 4px;
    padding: 12px 16px;
    background: rgba($COLOR_THEME, .5);
    color: darken($COLOR_THEME, 40%);
    font-size: 14px;
    font-weight: 600;
    text-align: center;
  }
}

#works{
  margin: 32px auto 0;
  li{
    display: inline-block;
    width: 240px;
    height: 240px;
    margin: 2px;
    background: darken($COLOR_BASE, 5%);
    cursor: pointer;
    transition: .3s ease-out;
    &:hover{
      transform: scale(1.02);
      transition: .1s ease-out;
      box-shadow: 2px 8px 24px rgba($COLOR_MAIN,.1);
    }
  }
}
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

export default class Works extends Vue {

  // data
  private works: any[] = this.$store.state.works;

}
</script>
