<script>
export default {
  name: "Home",
  methods: {
    async goAbout() {
      await this.$router.push("/about")
    }
  }
}
</script>
<template>
  <v-card>
    <v-card-title>Home</v-card-title>
    <v-card-text>
      Welcome to: Awesome Vite + Vue 2
    </v-card-text>
    <v-card-actions>
      <v-btn @click="goAbout">Go about</v-btn>
    </v-card-actions>
  </v-card>
</template>
