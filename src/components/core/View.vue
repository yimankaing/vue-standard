<template>
  <v-content>
    <div id="core-view">
      <v-fade-transition mode="out-in">
        <router-view/>
      </v-fade-transition>
    </div>
    <core-footer/>
  </v-content>
</template>

<script>
export default {
  // data() {
  //   return {
  //     items: [
  //       {
  //         text: "Dashboard",
  //         disabled: false,
  //         href: "breadcrumbs_dashboard"
  //       },
  //       {
  //         text: "Link 1",
  //         disabled: false,
  //         href: "breadcrumbs_link_1"
  //       },
  //       {
  //         text: "Link 2",
  //         disabled: true,
  //         href: "breadcrumbs_link_2"
  //       }
  //     ]
  //   };
  // },
  metaInfo() {
    return {
      title: "E-learning"
    };
  }
};
</script>

<style>
#core-view {
  padding-bottom: 100px;
}
</style>
