<template>
  <base-section
    id="features"
    class="secondary"
  >
    <v-responsive
      class="mx-auto"
      max-width="1350"
    >
      <v-container fluid>
        <v-row>
          <v-col
            v-for="card in cards"
            :key="card.title"
            cols="12"
            sm="4"
            md="3"
          >
            <base-info-card
              align="center"
              dark
              v-bind="card"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionFeatures',

    data: () => ({
      cards: [
        {
          icon: 'mdi-cart-outline',
          title: 'Featured products',
          text: 'Buy from our leading featured products or promote your product to get your product featured on the platform',
        },
        {
          icon: 'mdi-heart-outline',
          title: 'Top selling',
          text: 'Buy products that most people on the platform have already bought on. This is a great insurance of quality',
        },
        {
          icon: 'mdi-cart-plus',
          title: 'Newly added products',
          text: 'Grab products as they are added. Brand new products recently added added in one place.',
        },
        {
          icon: 'mdi-percent',
          title: 'Discounts',
          text: 'Checkout the amaizing discounts on your favorite products',
        },
      ],
    }),
  }
</script>
