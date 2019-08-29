<template><main class="panel">

  <div class="content">
    <h2 class="en">4<span>🤔</span>4</h2>
    <p class="en">PAGE NOT FOUND</p>
  </div>

  <Footer />

</main></template>


<style scoped lang="scss">
@import "@/scss/common.scss";
.content{
  text-align: center;
}
h2{
  width: 264px;
  margin: 180px auto 0;
  font-size: 120px;
  font-weight: bold;
  line-height: 1;
  border-bottom: 3px solid;
  span{
    display: inline-block;
    animation: tilt 4s ease-in-out infinite;
    transform-origin: 50% 30%;
    font-size: .85em;
  }
  @media (max-width: $WIDTH_SP){}
}
@keyframes tilt {
    0% { transform: rotate(0) }
   60% { transform: rotate(0) }
   80% { transform: rotate(-12deg) }
  100% { transform: rotate(0) }
}
p{
  margin: 2px 0 0;
  font-size: 28px;
  font-weight: bold;
}
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Footer from '@/components/Footer.vue';

@Component({
  components: {
    Footer,
  },
})
export default class Page404 extends Vue {}
</script>
