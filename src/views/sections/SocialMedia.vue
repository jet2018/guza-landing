<template>
  <v-theme-provider dark>
    <base-section
      id="social"
      class="accent text-center"
      space="56"
    >
      <base-icon class="mb-8">
        mdi-twitter
      </base-icon>
      <base-icon class="mb-8">
        mdi-facebook
      </base-icon>
      <base-icon class="mb-8">
        mdi-email
      </base-icon>

      <base-section-heading
        color="transparent"
        title="Reach Us"
      >
        Want to reach out to us physically.., We are located at former Standard Chartered Bank, on level 3, Mbarara City Uganda.
      </base-section-heading>
      <a
        class="d-inline-block mb-8"
        href="www.yitug.org"
        style="text-decoration: none;"
        target="_blank"
      >
        Product of Empower Youth in technology(EYIT)
      </a>

      <div class="py-4" />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.592852023697!2d30.6587777143222!3d-0.6091242354330638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d91b94de7a7121%3A0xc3f71a75c1e9349a!2sEMPOWER%20YOUTH%20IN%20TECHNOLOGY!5e0!3m2!1sen!2sug!4v1614871380302!5m2!1sen!2sug"
        width="90%"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        class="mx-auto"
      />

      <v-btn
        class="font-weight-bold"
        color="white"
        to="/Contact-Us"
        light
        min-width="168"
        x-large
      >
        Have anything you would like to talk about? Contact Us here
        <v-icon right>
          mdi-open-in-new
        </v-icon>
      </v-btn>
    </base-section>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'SectionNews',

    provide: {
      heading: { align: 'center' },
    },
  }
</script>
