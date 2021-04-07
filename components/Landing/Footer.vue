<template>
  <section class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="heading">
            <h2>Contact us</h2>
            <div class="description d-block d-md-none">
              Have a question? Reach out today!
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="description d-none d-md-block">
            Have a question? Reach out today!
          </div>
          <div class="info">
            <div class="address">
              <h4>Address</h4>
              <p>
                200 Portland Street,<br />
                Boston MA, 02114
              </p>
            </div>
            <div class="call">
              <h4>Call us</h4>
              <p>(617) 671-9292</p>
            </div>
            <div class="write">
              <h4>Write</h4>
              <a href="hello@milliondollarfund.com"
                >hello@milliondollarfund.com</a
              >
            </div>
            <div class="social">
              <a href="" target="_blank"><i class="fab fa-facebook-f"></i></a>
              <a href="" target="_blank"
                ><i class="fab fa-google-plus-g"></i
              ></a>
              <a href="" target="_blank"><i class="fab fa-twitter"></i></a>
              <a href="" target="_blank"
                ><i class="fab fa-instagram-square"></i
              ></a>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div v-if="!emailSended" class="form">
            <div v-if="emailSending" class="oveflow">
              <!--              TODO -->
              <!--              <Spinner-->
              <!--                size="60"-->
              <!--                :line-size="6"-->
              <!--                line-fg-color="#618cfa"-->
              <!--              ></Spinner>-->
            </div>
            <form @submit.prevent="onSubmitContactUs">
              <div class="input">
                <input
                  v-model.trim="form.contactUs.name"
                  type="text"
                  placeholder="Your Name"
                  :class="{
                    'is-valid': $v.form.contactUs.name.$error,
                  }"
                />
                <div v-if="$v.form.contactUs.name.$error" class="is-valid-text">
                  <span v-if="!$v.form.contactUs.name.required"
                    >Name is required</span
                  >
                </div>
              </div>
              <div class="input">
                <input
                  v-model.trim="form.contactUs.email"
                  type="text"
                  placeholder="Email Address"
                  :class="{
                    'is-valid': $v.form.contactUs.email.$error,
                  }"
                />
                <div
                  v-if="$v.form.contactUs.email.$error"
                  class="is-valid-text"
                >
                  <span v-if="!$v.form.contactUs.email.required"
                    >Email is required</span
                  >
                  <span v-if="!$v.form.contactUs.email.email"
                    >Email is invalid</span
                  >
                </div>
              </div>
              <div class="input">
                <input
                  v-model.trim="form.contactUs.company"
                  type="text"
                  placeholder="Your Company"
                  :class="{
                    'is-valid': $v.form.contactUs.company.$error,
                  }"
                />
                <div
                  v-if="$v.form.contactUs.company.$error"
                  class="is-valid-text"
                >
                  <span v-if="!$v.form.contactUs.company.required"
                    >Company is required</span
                  >
                </div>
              </div>
              <div class="textarea">
                <textarea-autosize
                  v-model.trim="form.contactUs.message"
                  placeholder="Message"
                  :min-height="44"
                  :max-height="350"
                  rows="1"
                />
              </div>
              <div class="submit">
                <input
                  type="submit"
                  class="btn-blue"
                  :value="!emailSending ? 'Send' : 'Sending'"
                />
              </div>
            </form>
          </div>
          <div v-if="emailSended" class="thank-you">
            <div class="image">
              <img src="/images/footer/raket.svg" alt="raket" />
            </div>
            <div class="text">
              <h2>Thank You</h2>
              <h3>Message Has Been Sent</h3>
              <p>We will contact you shortly!</p>
            </div>
            <div class="button">
              <button
                class="btn-blue"
                @click.prevent="emailSended = !emailSended"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { email, minLength, required } from 'vuelidate/lib/validators'
// import Spinner from 'vue-simple-spinner'
export default {
  mixins: [validationMixin],
  data() {
    return {
      form: {
        contactUs: {
          name: '',
          email: '',
          company: '',
          message: '',
        },
      },
      emailSended: false,
      emailSending: false,
      errorsContactUs: '',
      showSpiner: true,
    }
  },
  validations: {
    form: {
      contactUs: {
        name: {
          required,
          minLength: minLength(4),
        },
        email: {
          email,
          required,
          minLength: minLength(4),
        },
        company: {
          required,
        },
      },
    },
  },
  components: {
    // Spinner,
  },
  methods: {
    onSubmitContactUs() {
      this.$v.form.contactUs.$touch()
      if (this.$v.form.contactUs.$invalid) {
      } else {
        this.emailSending = true
        axios
          .post('/api/contactus', this.form.contactUs)
          .then((response) => {
            if (response.status == 200) {
              this.emailSended = true
              this.emailSending = false
              this.$v.form.contactUs.$reset()
              this.form.contactUs.name = ''
              this.form.contactUs.email = ''
              this.form.contactUs.company = ''
              this.form.contactUs.message = ''
            }
          })
          .catch((error) => {
            this.emailSended = false
            this.errorsContactUs = error.response.data
          })
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.footer {
  padding: 0px 30px;
  margin-bottom: 0px;
  @media (max-width: 767px) {
    margin-bottom: 0px;
    padding: 0px;
  }

  .container {
    background: url('/images/footer/bg-half-circles.svg'), $bg-blue;
    background-repeat: no-repeat;
    background-position: 90% 0%;
    background-size: 440px 111px;
    border-radius: 15px;
    padding: 90px 70px;

    @media (max-width: 767px) {
      padding: 70px 30px;
      border-radius: 0px;
    }

    @media (max-width: 576px) {
      padding: 90px 30px;
    }
  }

  .row {
    @media (max-width: 767px) {
      flex-direction: column-reverse;
    }
  }

  .heading {
    h2 {
      margin: 0px;
      font-size: 40px;
      font-weight: 900;
      line-height: 1.22;
      letter-spacing: 0.75px;
      color: #242424;
      margin-bottom: 5px;
      @media (max-width: 767px) {
        font-size: 30px;
        line-height: 1.22;
        letter-spacing: 0.56px;
        text-align: center;
      }
    }
  }

  .description {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.22;
    color: #232323;
    margin-bottom: 20px;

    @media (max-width: 767px) {
      font-size: 16px;
      line-height: 1.22;
      text-align: center;
      margin: 10px 0px 40px 0px;
    }
  }

  .info {
    padding-top: 15px;

    @media (max-width: 767px) {
      text-align: center;
      padding-top: 0px;
    }

    .address {
      margin-bottom: 40px;

      h4 {
        margin: 0px;
        font-size: 18px;
        font-weight: 600;
        line-height: 1.22;
        color: #242424;
      }

      p {
        margin: 0px;
        font-size: 22px;
        font-weight: 700;
        line-height: 1.22;
        color: #242424;
        @media (max-width: 991px) {
          font-size: 20px;
        }
      }
    }

    .call {
      margin-bottom: 40px;

      h4 {
        margin: 0px;
        font-size: 18px;
        font-weight: 600;
        line-height: 1.22;
        color: #242424;
        margin-bottom: 5px;
      }

      p {
        margin: 0px;
        font-size: 22px;
        font-weight: 700;
        line-height: 1.22;
        color: #242424;
        @media (max-width: 991px) {
          font-size: 20px;
        }
      }
    }

    .write {
      margin-bottom: 40px;

      h4 {
        margin: 0px;
        font-size: 18px;
        font-weight: 600;
        line-height: 1.22;
        color: #242424;
        margin-bottom: 5px;
      }

      a {
        font-size: 22px;
        font-weight: 700;
        line-height: 1.22;
        color: #618cfa;
        text-decoration: none;
        font-size: 20px;

        @media (max-width: 991px) {
          font-size: 20px;
        }
      }
    }

    .social {
      font-size: 0px;

      a {
        color: #242424;
        font-size: 24px;
        margin-right: 25px;

        &:last-child {
          margin-right: 0px;
        }
      }
    }
  }

  .form {
    position: relative;
    @media (max-width: 767px) {
      margin-bottom: 80px;
    }
    @media (max-width: 576px) {
      margin-bottom: 50px;
    }

    .oveflow {
      position: absolute;
      left: 0px;
      top: 0px;
      bottom: 0px;
      right: 0px;
      font-size: 51px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;
      color: #ffffff;
      border-radius: 5px;
    }

    form {
      .is-valid {
        border-color: #ff0000 !important;
      }

      .is-valid-text {
        font-size: 14px;
        color: red;
        margin-top: 5px;
        position: absolute;
      }

      .input {
        margin-bottom: 15px;
        padding-bottom: 30px;
        position: relative;
        width: 100%;

        label {
          font-size: 16px;
        }

        input {
          display: block;
          width: 100%;
          height: 44px;
          border: none;
          border-bottom: 3px solid #242424;
          background: transparent;
          padding: 10px;
          font-size: 16px;
          outline: none;

          &::placeholder {
            font-size: 16px;
            color: #242424;
          }
        }
      }

      .select {
        margin-bottom: 15px;
        padding-bottom: 30px;
        position: relative;
        width: 100%;

        label {
          font-size: 16px;
        }

        select {
          display: block;
          width: 100%;
          height: 44px;
          margin-top: 10px;
          border-radius: 5px;
          border: solid 1px #dddddd;
          background-color: #ffffff;
          padding: 10px;
          font-size: 16px;
          width: 100%;
          outline: none;

          &::placeholder {
            font-size: 16px;
            color: #242424;
          }
        }
      }

      .textarea {
        margin-bottom: 15px;
        padding-bottom: 30px;
        position: relative;
        width: 100%;

        label {
          font-size: 16px;
        }

        textarea {
          display: block;
          width: 100%;
          margin-top: 10px;
          border: none;
          padding: 10px;
          border-bottom: 3px solid #242424;
          background: transparent;
          font-size: 16px;
          outline: none;

          &::placeholder {
            font-size: 16px;
            color: #242424;
          }
        }
      }
    }

    .submit {
      text-align: right;
      @media (max-width: 767px) {
        justify-content: center;
        padding: 30px;
      }

      .btn-blue {
        width: 100%;
        max-width: 236px;
      }
    }
  }

  .thank-you {
    .image {
      text-align: center;
    }

    .text {
      max-width: auto;
      position: static;
      color: #242424;
      text-align: center;

      h2 {
        font-size: 28px;
        font-weight: 700;
        line-height: 1.22;
        letter-spacing: 0.52px;
      }

      h3 {
        font-size: 22px;
        line-height: 1.22;
        font-weight: 400;
        color: #242424;
      }

      p {
        font-weight: 500;
      }
    }

    .button {
      text-align: right;

      a {
        width: 100%;
        max-width: 236px;
      }
    }
  }
}
</style>
