<template>
  <div>
    <v-app-bar
      id="home-app-bar"
      app
      elevation="1"
      elevate-on-scroll
      height="60"
    >
      <base-img
        :src="require(`@/assets/logo_${$vuetify.theme.isDark ? 'dark' : 'light'}.png`)"
        contain
        max-width="150"
        width="100%"
      />
      <v-spacer />

      <div>
        <v-tabs
          class="hidden-sm-and-down"
          optional
          background-color="transparent"
        >
          <v-tab
            to="/"
            exact
            :ripple="false"
            class="font-weight-bold"
            min-width="96"
            text
          >
            Home
          </v-tab>
          <v-tab
            to="/Contact-Us"
            exact
            :ripple="false"
            class="font-weight-bold"
            min-width="96"
            text
          >
            Contact Us
          </v-tab>
          <v-tab
            to=""
            exact
            :ripple="false"
            class="font-weight-bold"
            min-width="96"
            text
            @click="goToSeller"
          >
            Sell here
          </v-tab>
          <v-tab
            to=""
            exact
            :ripple="false"
            class="font-weight-bold border-success bg-success p-2"
            min-width="96"
            text
            @click="goToBuyer"
          >
            Start buying
          </v-tab>
        </v-tabs>
      </div>

      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      />
    </v-app-bar>
  </div>
</template>

  <script>
  import config from '@/config'
  export default {
    name: 'HomeAppBar',

    data: () => ({
      drawer: null,
      urlSeller: config.linkToSell,
      urlBuyer: config.linkToBuy,
    }),
    methods: {
      goToSeller () {
        window.location.href = this.urlSeller
      },
      goToBuyer () {
        window.location.href = this.urlBuyer
      },
    },
  }
  </script>

<style lang="sass">
#home-app-bar
  .v-tabs-slider
      max-width: 24px
      margin: 0 auto

  .v-tab
    &::before
      display: none
</style>
