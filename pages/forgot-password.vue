<template>
  <div class="forgot-password-page">
    <div class="container">
      <header class="header">
        <div class="logo">
          <router-link to="/" exact
            ><img src="/images/header/logo.svg" alt="logo"
          /></router-link>
        </div>
        <div class="help d-none d-sm-block">
          <span>New to our site?</span
          ><router-link to="/registration" exact>Sign Up</router-link>
        </div>
        <div class="help d-block d-sm-none">
          <router-link to="/registration" exact>Sign Up</router-link>
        </div>
      </header>
      <main>
        <div class="form">
          <div class="heading">
            <h2>Forgot Password?</h2>
          </div>
          <div class="description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <form @submit.prevent="onSubmitForgotPassword">
            <div class="input">
              <label>Email Address</label>
              <input
                v-model.trim="form.forgotPassword.email"
                type="text"
                :class="{
                  'is-valid': $v.form.forgotPassword.email.$error,
                }"
              />
              <div
                v-if="$v.form.forgotPassword.email.$error"
                class="is-valid-text"
              >
                <span v-if="!$v.form.forgotPassword.email.required"
                  >Email is required</span
                >
                <span v-if="!$v.form.forgotPassword.email.email"
                  >Email is invalid</span
                >
              </div>
            </div>
            <div class="navigation">
              <div class="back">
                <router-link to="/login" exact>Back</router-link>
              </div>
              <div class="submit">
                <input type="submit" value="send" />
              </div>
            </div>
            <div v-if="this.errors" class="status">
              {{ this.errors.message.email[0] }}
            </div>
          </form>
          <div class="do-not-have-account">
            <span>Don't have an account?</span>
            <router-link to="/registration" exact>Sign Up</router-link>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import { serialize } from 'object-to-formdata'
import { ROLE } from '@/constants'
import {
  required,
  email,
  minLength,
  maxLengt,
  numeric,
} from 'vuelidate/lib/validators'
import Cookies from 'js-cookie'
import { validationMixin } from 'vuelidate'
export default {
  mixins: [validationMixin],
  data() {
    return {
      form: {
        forgotPassword: {
          email: '',
        },
      },
      errors: null,
    }
  },
  validations: {
    form: {
      forgotPassword: {
        email: {
          email,
          required,
        },
      },
    },
  },
  created() {
    if (this.$store.getters.isLoggedIn) {
      this.$router.push('/')
    }
  },
  methods: {
    onSubmitForgotPassword() {
      this.errors = null
      this.$v.form.forgotPassword.$touch()
      if (this.$v.form.forgotPassword.$invalid) {
      } else {
        const formData = serialize(this.form.forgotPassword)
        this.$store
          .dispatch('FORGOTPASSWORD', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((response) => {
            console.log(response)
          })
          .catch((error) => {
            this.errors = error.response.data
          })
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.forgot-password-page {
  background: url('/images/login-page/bg-login-page.svg'), $bg-grey;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  min-height: 100%;

  .container {
    min-height: 100%;
    padding: 0px 30px;
    @media (max-width: 576px) {
      padding: 0px;
    }
  }

  main {
    padding: 50px 0px;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 0px;

    @media (max-width: 576px) {
      padding: 30px;
      background-color: #ffffff;
    }
    .logo {
      @media (max-width: 576px) {
        margin-right: 30px;
      }
    }
  }

  .heading {
    h2 {
      margin: 0px;
    }
  }

  .description {
    line-height: 27px;
    font-size: 16px;
    color: #6e6e6e;

    @media (max-width: 576px) {
      font-size: 14px;
      line-height: 20px;
    }
  }

  .help {
    span {
      font-size: 16px;
      font-weight: 500;
      line-height: 2.25;
      letter-spacing: 0.3px;
      color: #6e6e6e;
      margin-right: 5px;
      @media (max-width: 576px) {
        line-height: 17px;
        height: calc(100vh - 114px);
        border-radius: 0px;
        background-color: #f2f5f7;
      }
    }
    a {
      font-weight: 700;
      color: #618cfa;
      text-decoration: none;
      white-space: nowrap;
    }
  }

  .form {
    position: relative;
    width: 100%;
    max-width: 563px;
    margin: 0px auto;
    padding: 47px 56px;
    border-radius: 15px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 576px) {
      height: calc(100vh - 114px);
      border-radius: 0px;
      padding: 30px;
      background-color: #f2f5f7;
    }

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
        display: block;
        font-size: 16px;
        margin-bottom: 10px;
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
    .forgot-password {
      padding-bottom: 30px;
      font-weight: 500;
      font-size: 14px;
      line-height: 27px;
      color: #618cfa;
      cursor: pointer;
    }
    .checkbox {
      padding-bottom: 30px;
      display: flex;
      align-items: center;
      label {
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        padding-left: 10px;
      }
      input[type='checkbox'] {
        width: 28px;
        height: 28px;
        border-radius: 5px;
        border: solid 1px #dddddd;
        background-color: #ffffff;
        -webkit-appearance: none;
        outline: none;
        cursor: pointer;
        &:checked:before {
          font-family: 'Font Awesome 5 Pro';
          font-weight: bold;
          color: rgba(0, 0, 0, 0.7);
          content: '\f00c';
          font-size: 15px;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }

    .navigation {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;

      .back {
        a {
          font-family: $GTWalsheimPro;
          text-decoration: none;
          text-transform: uppercase;
          font-weight: 700;
          font-size: 16px;
          line-height: 24px;
          color: #618cfa;
          margin-right: 20px;
        }
      }
      .submit {
        width: 100%;
        max-width: 236px;
        input {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-family: $GTWalsheimPro;
          width: 100%;
          height: 48px;
          border-radius: 5px;
          background-color: #618cfa;
          color: #ffffff;
          font-size: 16px;
          font-weight: 700;
          text-decoration: none;
          text-align: center;
          text-transform: uppercase;
          outline: none;
          border: none;
          cursor: pointer;
        }
      }
    }
    .do-not-have-account {
      span {
        font-size: 16px;
        font-weight: 500;
        line-height: 1.69;
        color: #242424;
        margin-right: 5px;
      }
      a {
        font-weight: 700;
        color: #618cfa;
        text-decoration: none;
        white-space: nowrap;
      }
    }
  }
}
</style>
