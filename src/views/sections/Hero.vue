<template>
  <section id="hero">
    <v-img
      :min-height="minHeight"
      :src="require(`@/assets/logo_${$vuetify.theme.isDark ? 'dark' : 'light'}.png`)"
      class="white--text"
      gradient="to bottom, rgba(0, 28, 23, .9), rgba(0,0,0,.4)"
    >
      <v-container class="fill-height px-4 py-12">
        <v-responsive
          class="d-flex align-center mx-auto"
          height="100%"
          max-width="700"
          width="100%"
        >
          <!-- <base-subheading
            weight="regular"
            title="WELCOME TO GUZAUG"
          /> -->

          <base-heading
            size="text-h2"
            title="WELCOME TO GUZAUG"
            weight="medium"
          />

          <base-body
            class="font-weight-bold text-warning"
          >
            A Ugandan-made and owned ecommerce platform to ensure the government's initiative of promoting local markets for local products. Also known as
            <span class="text-danger">BUBU(Buy Uganda Build Uganda)</span>
          </base-body>

          <div
            :class="$vuetify.breakpoint.smAndDown ? 'flex-column align-start' : 'align-center'"
            class="d-flex flex-wrap"
          >
            <base-btn @click="GoToMarket">
              Buy products now
            </base-btn>

            <span class="font-weight-bold ml-6 mr-4 my-4">or</span>

            <base-btn
              :ripple="false"
              class="pa-1"
              height="auto"
              text
              @click="GoToShop"
            >
              Start selling here
            </base-btn>
          </div>
        </v-responsive>
      </v-container>
    </v-img>
  </section>
</template>

<script>
  import config from '@/config.js'
  export default {
    name: 'SectionHero',
    data () {
      return {
        MyUrllink: config.linkToBuy,
        MyUrllinkSell: config.linkToSell,
      }
    },
    provide: {
      theme: { isDark: true },
    },
    computed: {
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '75vh' : '45vh'
        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },

    methods: {
      GoToMarket () {
        window.location.href = this.MyUrllink
      },
      GoToShop () {
        window.location.href = this.MyUrllinkSell
      },
    },
  }
</script>
