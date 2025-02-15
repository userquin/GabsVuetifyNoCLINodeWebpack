import Vue from "vue";
import Vuex from "vuex";
// https://levelup.gitconnected.com/vuex-is-super-simple-vue-js-d8da2e552766

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    appConfig: {
        name: "Gabs Vue App",
        baseUrl: "",
        apiBaseUrl: "https://api45gabs.azurewebsites.net",
        imgBaseUrl: "",
    },
    authHeader: {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: null,
      },
    },
    authHeaderForm: {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: null,
      },
    },
    user: null,
    appDrawer: true
  },
  getters: {
    appConfig: function (state) {
      return state.appConfig;
    },
    user: function (state) {
      return state.user;
    },
    authHeader: function (state) {
      return state.authHeader;
    },
    authHeaderForm: function (state) {
      return state.authHeaderForm;
    },
    appDrawer: function (state) {
        return state.appDrawer;
    },
  },
  mutations: {
    setUser: function (state, val) {
      state.user = val;
      if(val && val.token) {
        state.authHeader.headers.Authorization = "Bearer " + val.token;
        state.authHeaderForm.headers.Authorization = "Bearer " + val.token;
      } else {
        state.authHeader.headers.Authorization = null;
        state.authHeaderForm.headers.Authorization = null;
        console.log('User has logged out.')
      }
    },
    appDrawer: function (state, val) {
        state.appDrawer = val;
    }
  },
  actions: {

  },
});

export default store;
