<script>
/* include this component for `prompt`*/
// import ReloadPrompt from "./components/ReloadPrompt.vue";

export default {
  name: "App",
  /* include this component for `prompt`*/
  // components: { ReloadPrompt }
}
</script>
<template>
  <div>
    <img src="/favicon.svg" alt="PWA Logo" width="150" height="150">
    <router-view />
    <!-- Include this component if you want to use `autoUpdate`: also add `onReady` callback on `src/router.js` -->
<!--     <ReloadPrompt />-->
  </div>
</template>
