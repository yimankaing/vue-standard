<template>
  <v-footer
    id="core-footer"
    absolute
    height="40"
  >
    <v-spacer/>
    <span class="font-weight-light copyright">
      &copy;2019
      <!--{{ (new Date()).getFullYear() }}-->
      <a href="#">Battambang Developers</a>
    </span>
  </v-footer>
</template>

<script>
export default {

}
</script>

<style>
#core-footer {
  z-index: 0;
}
</style>
