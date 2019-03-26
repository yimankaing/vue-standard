<template>
  <v-snackbar
    id="core-notification"
    :color="color"
    :bottom="bottom"
    :top="top"
    :left="left"
    :right="right"
    v-model="isVisible"
    :timeout="timeout"
    dark
  >
    <v-icon color="white" class="mr-3">{{icon}}</v-icon>
    <div>{{text}}</div>
    <v-icon size="16" @click="hideNotification">mdi-close-circle</v-icon>
  </v-snackbar>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    isVisible: {
      get: vm => vm.$store.state.app.notification.isVisible,
      set: function(newValue) {
        this.hideNotification();
      }
    },
    ...mapState({
      color: state => state.app.notification.color,
      bottom: state => state.app.notification.bottom,
      top: state => state.app.notification.top,
      left: state => state.app.notification.left,
      right: state => state.app.notification.right,
      timeout: state => state.app.notification.timeout,
      // isVisible: state => state.app.notification.isVisible,
      icon: state => state.app.notification.icon,
      text: state => state.app.notification.text
    })
  },
  methods: {
    ...mapMutations("app", ["setNotification"]),
    hideNotification() {
      const { color, bottom, top, left, right, icon, text } = this;
      this.setNotification({
        color: "success",
        bottom: false,
        top: true,
        left: false,
        right: true,
        isVisible: false,
        icon: "mdi-bell",
        text: ""
      });
    }
  }
};
</script>

<style scoped>
</style>
