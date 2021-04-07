<template>
  <div class="coming-soon">
    <header class="header">
      <div class="container">
        <div class="logo">
          <router-link to="/" exact
            ><img src="/images/header/logo.svg" alt="logo"
          /></router-link>
        </div>
      </div>
    </header>
    <main>
      <div class="container">
        <div class="background">
          <div class="image-mobile">
            <img
              src="/images/coming-soon-page/bg-coming-soon-mobile.svg"
              alt="bg-coming-soon-mobile"
            />
          </div>
          <div class="text">
            <div class="description">
              Are you ready to launch your idea and make your own success a
              reality? Do you dream of changing your industry with this product?
              With The Million Dollar Fund, we connect entrepreneurs with
              investors and experienced product developers that can help develop
              your MVP. By applying, you can receive investments ranging from
              $10K-$100K.
            </div>
            <div class="navigation">
              <button
                type="button"
                class="btn-blue"
                @click="openModalRequestInformation"
              >
                Request information
              </button>
              <button type="button" class="btn-yellow" @click="openModalLogin">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Modal :is-show-modal="isShowModalLogin" @isCloseModal="isCloseModalLogin">
      <div class="modal-login">
        <div class="heading">
          <h2>Login</h2>
        </div>
        <div class="body">
          <div class="form">
            <form id="login" @submit.prevent="onSubmitLogin">
              <div class="input">
                <label>Login</label>
                <input
                  v-model.trim="form.login.email"
                  type="text"
                  :class="{
                    'is-valid': $v.form.login.email.$error,
                  }"
                />
                <div v-if="$v.form.login.email.$error" class="is-valid-text">
                  <span v-if="!$v.form.login.email.required"
                    >Email is required</span
                  >
                  <span v-if="!$v.form.login.email.email"
                    >Email is invalid</span
                  >
                </div>
              </div>
              <div class="input">
                <label>Password</label>
                <input
                  v-model.trim="form.login.password"
                  type="password"
                  :class="{
                    'is-valid': $v.form.login.password.$error,
                  }"
                />
                <div v-if="$v.form.login.password.$error" class="is-valid-text">
                  <span v-if="!$v.form.login.password.required"
                    >Password is required</span
                  >
                  <span v-if="!$v.form.login.password.minLength"
                    >Password must be at least
                    {{ $v.form.login.password.$params.minLength.min }}
                    characters</span
                  >
                </div>
              </div>
              <div class="submit">
                <button type="submit" class="btn-blue">Log In</button>
              </div>
              <div v-if="this.errorsLogin" class="status">
                {{ this.errorsLogin.message.email[0] }}
              </div>
            </form>
          </div>
        </div>
      </div>
    </Modal>
    <Modal
      :is-show-modal="isShowModalRequestInformation"
      @isCloseModal="isCloseModalRequestInformation"
    >
      <div class="modal-request-information">
        <div v-if="emailSending" class="oveflow">
          <!--          TODO -->
          <!--          <Spinner size="60" :line-size="6" line-fg-color="#618cfa"></Spinner>-->
        </div>
        <div v-if="!emailSended" class="form">
          <div class="heading">
            <h2>Request Information</h2>
          </div>
          <form
            id="request-information"
            @submit.prevent="onSubmitRequestInformation"
          >
            <div class="input">
              <label>Name</label>
              <input
                v-model.trim="form.requestInformation.name"
                type="text"
                :class="{
                  'is-valid': $v.form.requestInformation.name.$error,
                }"
              />
              <div
                v-if="$v.form.requestInformation.name.$error"
                class="is-valid-text"
              >
                <span v-if="!$v.form.requestInformation.name.required"
                  >Name is required</span
                >
              </div>
            </div>
            <div class="input">
              <label>Email Address</label>
              <input
                v-model.trim="form.requestInformation.email"
                type="text"
                :class="{
                  'is-valid': $v.form.requestInformation.email.$error,
                }"
              />
              <div
                v-if="$v.form.requestInformation.email.$error"
                class="is-valid-text"
              >
                <span v-if="!$v.form.requestInformation.email.required"
                  >Email is required</span
                >
                <span v-if="!$v.form.requestInformation.email.email"
                  >Email is invalid</span
                >
              </div>
            </div>
            <div class="input">
              <label>Phone Number</label>
              <input
                v-model.trim="form.requestInformation.phone"
                type="text"
                :class="{
                  'is-valid': $v.form.requestInformation.phone.$error,
                }"
              />
              <div
                v-if="$v.form.requestInformation.phone.$error"
                class="is-valid-text"
              >
                <span v-if="!$v.form.requestInformation.phone.required"
                  >Phone is required</span
                >
                <span v-if="!$v.form.requestInformation.phone.numeric"
                  >Phone is invalid</span
                >
              </div>
            </div>
            <div class="select">
              <label>Your Role</label>
              <select
                v-model="form.requestInformation.role"
                :class="{
                  'is-valid': $v.form.requestInformation.role.$error,
                }"
              >
                <option value="entrepreneur" selected>Entrepreneur</option>
                <option value="angel">Angel</option>
              </select>
              <div
                v-if="$v.form.requestInformation.role.$error"
                class="is-valid-text"
              >
                <span v-if="!$v.form.requestInformation.role.required"
                  >Select is required</span
                >
              </div>
            </div>
            <div class="textarea">
              <label>Message</label>
              <textarea
                v-model.trim="form.requestInformation.message"
              ></textarea>
            </div>
            <div class="submit">
              <button type="submit" class="btn-blue" :disabled="emailSending">
                {{ !emailSending ? 'Send' : 'Sending' }}
              </button>
            </div>
          </form>
        </div>

        <div v-if="emailSended" class="thank-you">
          <div class="image">
            <img src="/images/coming-soon-page/raket.svg" alt="raket" />
          </div>
          <div class="text">
            <h2>Thank You</h2>
            <h3>Message Has Been Sent</h3>
            <p>We will contact you shortly!</p>
          </div>
          <div class="button">
            <button
              class="btn-blue"
              @click.prevent="isCloseModalRequestInformation"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>
<script>
import Modal from '@components/Common/Modal'
import {
  required,
  email,
  minLength,
  maxLengt,
  numeric,
} from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'
// import Spinner from 'vue-simple-spinner'
export default {
  mixins: [validationMixin],
  data() {
    return {
      errorsLogin: null,
      form: {
        login: {
          email: null,
          password: null,
        },
        requestInformation: {
          name: null,
          email: null,
          phone: null,
          role: 'entrepreneur',
          message: null,
        },
      },
      emailSended: false,
      emailSending: false,
      errorsRequestInformation: null,
      isShowModalLogin: false,
      isShowModalRequestInformation: false,
    }
  },
  validations: {
    form: {
      login: {
        email: {
          email,
          required,
        },
        password: {
          required,
          minLength: minLength(6),
        },
      },
      requestInformation: {
        name: {
          required,
          minLength: minLength(4),
        },
        email: {
          email,
          required,
          minLength: minLength(4),
        },
        phone: {
          numeric,
          required,
          minLength: minLength(4),
        },
        role: {
          required,
        },
      },
    },
  },
  components: {
    Modal,
    // Spinner,
  },
  created() {
    if (this.$store.getters.isLoggedIn) {
      this.$router.push('/home')
    }
  },
  methods: {
    onSubmitLogin() {
      this.errorsLogin = null
      this.$v.form.login.$touch()
      if (this.$v.form.login.$invalid) {
      } else {
        this.$store
          .dispatch('LOGIN', this.form.login)
          .then((response) => {
            this.$router.push('/home')
          })
          .catch((error) => {
            this.errorsLogin = error.response.data
          })
      }
    },

    onSubmitRequestInformation() {
      this.$v.form.requestInformation.$touch()
      if (this.$v.form.requestInformation.$invalid) {
      } else {
        this.emailSending = true
        axios
          .post('/api/comingsoon', this.form.requestInformation)
          .then((response) => {
            if (response.status == 200) {
              this.emailSending = false
              this.emailSended = true
            }
          })
          .catch((error) => {
            this.errorsRequestInformation = error.response.data
          })
      }
    },
    openModalLogin() {
      this.isShowModalLogin = true
    },
    openModalRequestInformation() {
      this.isShowModalRequestInformation = true
    },
    isCloseModalLogin() {
      this.isShowModalLogin = false
      this.errorsLogin = ''
      this.$v.form.login.$reset()
      this.form.login.email = ''
      this.form.login.password = ''
    },
    isCloseModalRequestInformation() {
      this.isShowModalRequestInformation = false
      this.emailSended = false
      this.$v.form.requestInformation.$reset()
      this.form.requestInformation.name = ''
      this.form.requestInformation.email = ''
      this.form.requestInformation.phone = ''
      this.form.requestInformation.role = ''
    },
  },
}
</script>
<style lang="scss" scoped>
.coming-soon {
  position: relative;
  width: 100%;
  min-width: 320px;
  font-family: 'Inter', Arial, Helvetica, sans-serif;
  font-size: 16px;
  height: 100%;

  @media (min-height: 600px) and (orientation: portrait) {
    height: 100%;
  }

  @media (max-width: 767px) {
    height: auto;
  }

  main {
    width: 100%;

    @media (min-height: 600px) and (orientation: portrait) {
      height: calc(100% - 104px);
    }

    @media (max-width: 767px) {
      height: auto;
    }
  }

  .container {
    display: flex;
    align-items: center;
    background-color: transparent !important;
    border-radius: 0px !important;
    padding: 0px !important;
    padding-right: 15px !important;
    padding-left: 15px !important;
    max-width: 991px;
    height: auto !important;

    @media (max-width: 767px) {
      display: flex;
      align-items: center;
    }

    @media (min-height: 600px) and (orientation: portrait) {
      height: 100%;
    }
  }
  main {
    @media (max-width: 767px) {
      padding: 50px 0px;
    }
  }
  .header {
    padding: 30px 0px;
    height: 104px;
    margin: 0px;

    @media (max-width: 767px) {
      .header {
        margin-bottom: 40px;
        text-align: center;
      }
    }
  }

  .background {
    width: 100%;
    min-height: 530px;
    position: relative;
    background-image: url('/images/coming-soon-page/bg-coming-soon.svg');
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: contain;

    @media (max-width: 776px) {
      background: none;
      height: auto;
    }
  }

  .image-mobile {
    display: none;
    margin-bottom: 30px;

    img {
      width: 100%;
    }

    @media (max-width: 767px) {
      display: block;
    }
  }

  .text {
    position: absolute;
    bottom: 0px;
    left: 0px;
    max-width: 462px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.94;
    color: #232323;

    @media (max-width: 767px) {
      position: static;
      max-width: 100%;
      text-align: center;
      transform: translateY(0%);
    }
  }

  .description {
    margin: 20px 0px;
  }

  .navigation {
    font-size: 0px;
    display: flex;
    @media (max-width: 576px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .btn-blue {
      margin-right: 20px;

      @media (max-width: 576px) {
        margin-bottom: 20px;
        margin-right: 0px;
      }
    }
  }
}

.modal-login {
  background-image: url('/images/coming-soon-page/bg-modal-login.svg');
  background-repeat: repeat-x;
  background-position: 100% 100%;
  padding: 80px 100px 80px 100px;
  @media (max-width: 767px) {
    padding: 80px 30px 80px 30px;
  }
  .heading {
    text-align: center;
    h2 {
      font-weight: 700;
      line-height: 1.36;
      letter-spacing: 0.52px;
      color: #242424;
      font-size: 28px;
    }
  }

  .form {
    .form-group {
      display: flex;

      @media (max-width: 479px) {
        flex-direction: column;
      }

      .input {
        &:first-child {
          margin-right: 15px;
        }
      }
    }

    .status {
      font-size: 16px;
      margin-top: 30px;
      text-align: center;
      color: #ffffff;
      border-radius: 5px;
      background-color: red;
      padding: 15px;
    }
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
        margin-top: 10px;
        border-radius: 5px;
        border: solid 1px #dddddd;
        background-color: #ffffff;
        padding: 10px;
        font-size: 16px;
        outline: none;
      }
    }
    .select {
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
        outline: none;
      }
    }
  }

  .submit {
    text-align: center;
    .btn-blue {
      width: 100%;
      max-width: 236px;
    }
  }
}

.modal-request-information {
  background-image: url('/images/coming-soon-page/bg-modal-request-information.svg');
  background-repeat: no-repeat;
  background-position: 50% 100%;
  padding: 80px 100px 80px 100px;
  position: relative;
  @media (max-width: 767px) {
    background-size: 100%;
    padding: 80px 30px 80px 30px;
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
    background-color: rgba(0, 0, 0, 0.8);
    color: #ffffff;
  }

  .heading {
    text-align: center;
    h2 {
      font-weight: 700;
      line-height: 1.36;
      letter-spacing: 0.52px;
      color: #242424;
      font-size: 28px;
    }
  }

  .form {
    .form-group {
      display: flex;

      @media (max-width: 479px) {
        flex-direction: column;
      }

      .input {
        &:first-child {
          margin-right: 15px;
        }
      }
    }
    .status {
      font-size: 16px;
      margin-top: 30px;
      text-align: center;
      color: #ffffff;
      border-radius: 5px;
      background-color: red;
      padding: 15px;
    }
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
        border-radius: 5px;
        border: solid 1px #dddddd;
        background-color: #ffffff;
        padding: 10px;
        font-size: 16px;
        outline: none;
        font-weight: 700;
        @media (max-width: 992px) {
          margin-left: 0%;
          margin-top: 10px;
        }

        &::placeholder {
          font-weight: 400;
          color: #dddddd;
        }
      }
      .is-valid {
        border-color: #ff0000 !important;
      }
      .is-valid-text {
        font-size: 14px;
        color: red;
        margin-top: 5px;
        position: absolute;
      }
    }
    .select {
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
      }
    }

    .textarea {
      padding-bottom: 30px;
      position: relative;
      width: 100%;
      label {
        font-size: 16px;
      }
      textarea {
        display: block;
        width: 100%;
        height: 160px;
        margin-top: 10px;
        border-radius: 5px;
        border: solid 1px #dddddd;
        background-color: #ffffff;
        padding: 10px;
        font-size: 16px;
        outline: none;
      }
    }
    .submit {
      text-align: center;
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
        line-height: 1.36;
        letter-spacing: 0.52px;
      }
      h3 {
        font-size: 22px;
        line-height: 1.09;
        font-weight: 400;
        color: #242424;
      }
      p {
        font-weight: 500;
      }
    }
    .button {
      text-align: center;
      a {
        width: 100%;
        max-width: 236px;
      }
    }
  }
}
</style>
