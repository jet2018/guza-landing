<template>
  <base-section id="theme-features">
    <base-section-heading title="About Us">
      An ecommerce platform for supporting local markets and local producers. We bring farmers and sellers together locally.
    </base-section-heading>

    <v-container>
      <v-row>
        <v-col
          v-for="(feature, i) in features"
          :key="i"
          cols="12"
          md="6"
        >
          <base-avatar-card
            v-bind="feature"
            align="left"
            horizontal
          >
            {{ feature.text }}
          </base-avatar-card>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionThemeFeatures',

    data: () => ({
      features: [
        {
          title: 'Delivery policy',
          icon: 'mdi-truck-delivery',
          text: 'We deliver all our products in not more than 10 days from the day of your successful order',
        },
        {
          title: 'Payment policy',
          icon: 'mdi-cash-check',
          text: 'We currently accept cash on delivery, while we set-up our environment to take up modern payment techniques',
        },
        {
          // color: 'primary',
          // dark: true,
          title: '24/7 customer support',
          icon: 'mdi-face-agent',
          text: 'Reaching out to us has been made as simple as possible. We have provided our immediate contacts on the site and a Contact Us form where you can reach out to us from',
        },
        {
          title: 'Return policy',
          icon: 'mdi-keyboard-return',
          text: 'All products bought from this platform can be returned to us if any form unsatisfaction. However, they will be required to be in the same shape they were given to you with the packaging still intact.',
        },
        {
          title: 'Refund policy',
          icon: 'mdi-cash-refund',
          text: 'Our customers can also request a refund in case of order termination. On return of the product, the customers will be refunded back their money',
        },
        {
          title: 'Career support',
          icon: 'mdi-electron-framework',
          text: 'GuzaUg platform supports and advocates very many careers, This program is still under scrutinization, details of "how" shall be communicated later',
        },
      ],
    }),
  }
</script>
