<template><div id="app">

  <nav><ul>
    <h1><router-link to="/">Akira HIRATA</router-link></h1>
    <li><router-link to="/">Home</router-link></li>
    <li><router-link to="/about">About</router-link></li>
    <li><router-link to="/works">Works</router-link></li>
    <li><router-link to="/contact">Contact</router-link></li>
  </ul></nav>

  <main>
    <router-view/>
    <footer>
      <ul>
        <li><a href="https://twitter.com/psephopaiktes" target="brank_">T</a></li>
        <li><a href="https://hirata.blog/" target="brank_">B</a></li>
        <li><a href="https://note.mu/psephopaiktes" target="brank_">N</a></li>
        <li><a href="https://www.instagram.com/psephopaiktes/" target="brank_">I</a></li>
      </ul>
    </footer>
  </main>


</div></template>


<style lang="scss">
html {
  background-color: rgba($COLOR_BASE,.6);
  background-image: url(/img/paper.png);
  background-blend-mode: multiply;
  color: $COLOR_MAIN;
}
body {
  overscroll-behavior: smooth; //TODO
  margin: 0;
  padding: 0;
  font-size: 14px;
  color: rgba($COLOR_MAIN,.8);
  line-height: 1.7;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans JP", "ヒラギノ角ゴ Pro W3", "游ゴシック", "Yu Gothic", YuGothic, Meiryo, "メイリオ";
  font-feature-settings : "pkna";
  @media ( max-width: $WIDTH_TABLET ){ }
}
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul {
  list-style-type: none;
}
img {
  border: none;
  vertical-align: top;
  max-width: 100%;
}
b{
  font-weight: 700;

}
a{ color: $COLOR_THEME }
a:visited{ color: darken($COLOR_THEME, 8%) }
a:hover{ color: lighten($COLOR_THEME, 4%) }
a:active{ color: darken($COLOR_THEME, 8%) }
a,
area,
button,
[role="button"],
input:not([type="range"]),
label,
select,
summary,
textarea {
  touch-action: manipulation;
}
button{
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
}
</style>
