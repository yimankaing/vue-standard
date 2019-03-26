<template>
  <v-app>
    <core-notification/>
    <core-loading/>
    <div v-if="!!currentUser">
      <core-toolbar/>
      <core-drawer/>
      <core-view/>
    </div>
    <auth v-else></auth>
  </v-app>
</template>

<script>
import Auth from "./views/Auth/Auth";
export default {
  components: { Auth },
  computed: {
    currentUser: {
      get: vm => vm.$store.state.currentUser,
      set: function(newValue) {
        return newValue;
      }
    }
  }
};
</script>


<style lang="scss">
@import "@/styles/index.scss";

.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
</style>
