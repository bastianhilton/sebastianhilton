<template>
  <v-app :theme="theme">
    <v-app-bar id="topnav" density="compact">
      
      <v-app-bar-title><a class="logobrand" href="/">
          Sebastian Hilton
        </a></v-app-bar-title>

      <div class="d-flex align-center flex-column flex-sm-row fill-height">
        <v-col><v-btn title="" variant="plain" href="/about">About</v-btn></v-col>
        <v-col><v-btn title="" variant="plain" href="/skills">Skills</v-btn></v-col>
        <v-col><v-btn title="" variant="plain" href="/portfolio">Works</v-btn></v-col>
        <v-col><v-btn title="" variant="plain" href="https://www.dev.to/bastianhilton">Blog</v-btn></v-col>
        <v-col>
          <v-btn :prepend-icon="theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'" @click="onClick"></v-btn>
        </v-col>
        <v-col><v-btn title="" size="large" variant="plain" href="https://www.github.com/bastianhilton" class="fab fa-github"></v-btn></v-col>
        <v-col><v-btn title="" size="large" variant="plain" href="https://www.twitter.com/bastianhilton" class="fab fa-twitter"></v-btn></v-col>
        <v-col><v-btn title="" size="large" variant="plain" href="https://www.linkedin.com/in/bastianhilton" class="fab fa-linkedin"></v-btn></v-col>
      </div>
    </v-app-bar>

    <v-main>
      <v-card>
        <v-layout>
          <v-main id="sidebarNav"></v-main>
          <main id="mainSection">
            <slot />
          </main>
        </v-layout>
      </v-card>
      <FooterNav />
    </v-main>
  </v-app>
</template>

<script>

  export default {
    data() {
      return {
        location: 'bottom',
      }
    },
  }
</script>

<script setup>
  import {
    ref
  } from 'vue'

  const theme = ref('light')

  function onClick() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  };

</script>