<template>

    <section>
      <h2 class="en">LOADING...</h2>
    </section>

</template>

<style scoped lang="scss">
@import "@/scss/common.scss";

section{
  width: 100vw;
  height: 100vh;
  background: $COLOR_BASE;
  position: fixed;
  top: 0; left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  h2{
    color: $COLOR_THEME;
    animation: loading 1s ease-in-out infinite alternate	;
    font-size: 2em;
    font-weight: 700;
    text-align: center;
    border: 8px solid;
    width: 320px;
    height: 72px;;
    line-height: 60px;
  }
}
@keyframes loading {
  0% {
    letter-spacing: .3em;
    text-indent: .6em;
    opacity: .4;
  }
  100% {
    letter-spacing: .2em;
    text-indent: .5em;
    opacity: .8;
  }
}
</style>
