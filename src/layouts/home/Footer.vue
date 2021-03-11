<template>
  <v-footer padless>
    <v-col
      class="text-center"
      cols="12"
    >
      <span>&copy; </span>
      {{ new Date().getFullYear() }} <strong>GuzaUg </strong>
      <router-link
        to="/Privacy"
      >
        Privacy
      </router-link>
      <router-link
        to="/terms-of-use"
      >
        Terms of use
      </router-link>
    </v-col>
  </v-footer>
</template>

<script>
  export default {
    name: 'HomeFooter',

    data: () => ({
      social: [
        'Facebook',
        'Twitter',
        'Instagram',
        'Linkedin',
      ],
    }),
  }
</script>

<style lang="sass">
  #home-footer a
    text-decoration: none
</style>
