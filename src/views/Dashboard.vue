<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout wrap>
      <v-flex sm6 xs12 md6 lg3>
        <material-stats-card
          color="green"
          icon="mdi-store"
          title="Revenue"
          value="$34,245"
          sub-icon="mdi-calendar"
          sub-text="Last 24 Hours"
        />
      </v-flex>
      <v-flex sm6 xs12 md6 lg3>
        <material-stats-card
          color="orange"
          icon="mdi-content-copy"
          title="Used Space"
          value="49/50"
          small-value="GB"
          sub-icon="mdi-alert"
          sub-icon-color="error"
          sub-text="Get More Space..."
          sub-text-color="text-primary"
        />
      </v-flex>
      <v-flex sm6 xs12 md6 lg3>
        <material-stats-card
          color="red"
          icon="mdi-information-outline"
          title="Fixed Issues"
          value="75"
          sub-icon="mdi-tag"
          sub-text="Tracked from Github"
        />
      </v-flex>
      <v-flex sm6 xs12 md6 lg3>
        <material-stats-card
          color="info"
          icon="mdi-twitter"
          title="Followers"
          value="+245"
          sub-icon="mdi-update"
          sub-text="Just Updated"
        />
      </v-flex>
      <v-flex>
        <div class="title kh-muol-light">{{$t('Home.title')}}</div>
        <div class="title">current language {{currentLanguage}}</div>
        <v-btn @click="toggleLanguage" color="success">Change language</v-btn>
        <v-btn @click="showNotification" color="danger">Show global notification</v-btn>
        <v-btn @click="showLoading" color="warning">Show global loading</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    currentLanguage() {
      return this.$store.state.app.currentLocale;
    }
  },
  methods: {
    ...mapMutations("app", ["setImage", "setLocale"]),
    ...mapActions([
      "app/changeLocale",
      "app/showNotification",
      "app/showLoading" // map `this.add()` to `this.$store.dispatch('mutation', payload)`
    ]),
    toggleLanguage() {
      this.currentLanguage === "km"
        ? this["app/changeLocale"]("en")
        : this["app/changeLocale"]("km");
    },
    showNotification() {
      this["app/showNotification"]({
        isVisible: true,
        text: "test notification"
      });
    },
    showLoading() {
      this["app/showLoading"]({ isVisible: true, text: "test loading" });
    }
  }
};
</script>
