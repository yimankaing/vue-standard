import { set, toggle } from "@/utils/vuex";

export default {
  setDrawer: set("drawer"),
  setImage: set("image"),
  setColor: set("color"),
  toggleDrawer: toggle("drawer"),
  setLocale: set("currentLocale"),
  setNotification: set("notification"),
  setLoading: set("loading")
};
