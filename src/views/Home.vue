<template><div>

  <!-- <ModalView id="aa" /> -->
  <img alt="Vue logo" src="@/assets/logo.png">

  <p>aaaaa</p>
  <p>aaaaa</p>

</div></template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ModalView from '@/components/ModalView.vue'; // @ is an alias to /src

@Component({
  components: {
    ModalView,
  },
})
export default class Home extends Vue {}
</script>
