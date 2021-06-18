<script>
export default {
  name: "About",
  methods: {
    async goHome() {
      await this.$router.push("/")
    }
  }
}
</script>
<template>
  <v-card>
    <v-card-title>About</v-card-title>
    <v-card-text>
      Awesome Vite + Vue 2
    </v-card-text>
    <v-card-actions>
      <v-btn @click="goHome">Go home</v-btn>
    </v-card-actions>
  </v-card>
</template>
