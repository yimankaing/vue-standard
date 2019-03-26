<template>
  <v-dialog v-model="isVisible" lazy fullscreen id="core-loading" transition="fade-transition">
    <v-layout align-center justify-center column fill-height class="dialog" @click="hideLoading">
      <div>
        <v-progress-circular indeterminate color="purple" :size="60" :width="6"></v-progress-circular>
      </div>
      <div class="loading-text" v-if="!!text">{{text}}</div>
    </v-layout>
  </v-dialog>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState({
      isVisible: state => state.app.loading.isVisible,
      color: state => state.app.loading.color,
      text: state => state.app.loading.text
    })
  },
  methods: {
    ...mapMutations("app", ["setLoading"]),
    hideLoading() {
      const { color, text } = this;
      this.setLoading({ color, text, isVisible: false });
    }
  }
};
</script>

<style scoped>
.dialog {
  background-color: rgba(255, 255, 255, 0.5) !important;
}
.loading-text {
  padding-top: 15px;
  font-size: 20px;
}
</style>