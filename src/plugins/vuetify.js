import Vue from "vue";
// add here components you will use
import Vuetify, {
  VApp,
  VCard,
  VMain,
  VIcon,
  VContainer,
  VBreadcrumbs,
  VRow,
  VCol,
  VBtn,
  VCardTitle,
  VCardText,
  VCardActions
} from "vuetify/lib";

// register components you will use
Vue.use(Vuetify, {
  components: {
    VApp,
    VCard,
    VMain,
    VIcon,
    VContainer,
    VBreadcrumbs,
    VRow,
    VCol,
    VBtn,
    VCardTitle,
    VCardText,
    VCardActions
  }
});

export default new Vuetify({});
