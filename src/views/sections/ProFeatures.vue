<template>
  <base-section
    id="pro-features"
  >
    <base-section-heading
      class="text-h3 font-weight-bold mb-3 text-uppercase text-center"
      title="Contact Us/Reach out to us"
    >
      Having any query? Fill the form below to contact us
    </base-section-heading>

    <v-container>
      <v-responsive
        class="mx-auto mb-5"
        width="56"
      >
        <v-divider class="mb-1" />

        <v-divider />
      </v-responsive>

      <v-theme-provider>
        <v-form @submit.prevent="contactForm">
          <v-row>
            <v-col
              cols="6"
              class="mx-auto"
            >
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="name"
                    flat
                    label="Name*"
                    required
                  />
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    v-model="email"
                    flat
                    required
                    label="Email*"
                  />
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    v-model="subject"
                    flat
                    required
                    label="Subject*"
                  />
                </v-col>

                <v-col cols="12">
                  <v-textarea
                    v-model="message"
                    flat
                    required
                    label="Message*"
                  />
                </v-col>

                <v-col
                  class="mx-auto"
                  cols="12"
                >
                  <v-btn
                    color="accent"
                    block
                    type="submit"
                    x-large
                    class="btn btn-block"
                  >
                    Submit
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-form>
      </v-theme-provider>
    </v-container>
  </base-section>
</template>

<script>
  import emailjs from 'emailjs-com'
  export default {
    name: 'SectionProChart',

    data: () => ({
      email: '',
      name: '',
      message: '',
      subject: '',
    }),

    methods: {
      contactForm () {
        if (this.email === '') {
          alert('Email is still empty')
        } else if (this.name === '') {
          alert('Name is still empty')
        } else if (this.subject === '') {
          alert('Subject is still empty')
        } else if (this.message === '') {
          alert('Body is still empty')
        } else {
          // alert(this.email + ' ' + this.name + ' ' + this.message + ' ' + this.subject)
          // this.clearForm()
          // todo submit form to email
          // emailjs.Email()
          try {
            emailjs.sendForm('guzaug', 'template_rv2ulst', this, 'user_D7Oh7RhJF8Hyw2MDVxk4R', {
              name: this.name,
              email: this.email,
              message: this.message,
              subject: this.subject,
            })
            this.$toastr.s('Email submitted successfully')
          } catch (error) {
            console.log(error)
            this.$toastr.e('An error occured and your email was not sent: Error maybe-' + error)
          }

          this.clearForm()
        }
      },

      clearForm () {
        this.email = ''
        this.name = ''
        this.message = ''
        this.subject = ''
      },
    },
  }
</script>
