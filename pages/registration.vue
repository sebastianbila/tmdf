<template>
  <div class="registration-page">
    <div class="container">
      <header class="header">
        <div class="logo">
          <router-link to="/" exact
            ><img src="/images/header/logo.svg" alt="logo"
          /></router-link>
        </div>
        <div class="help d-none d-sm-block">
          <span>Have an account already?</span>
          <router-link to="/login" exact>Login</router-link>
        </div>
        <div class="help d-block d-sm-none">
          <router-link to="/login" exact>Sign In</router-link>
        </div>
      </header>
      <main>
        <div class="form">
          <div class="heading">
            <h2>Please sign up to continue</h2>
          </div>
          <div class="description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <form @submit.prevent="onSubmitRegistration">
            <div class="input">
              <label for="">Name</label>
              <input
                v-model.trim="form.registration.name"
                type="text"
                :class="{
                  'is-valid': $v.form.registration.name.$error,
                }"
              />
              <div
                v-if="$v.form.registration.name.$error"
                class="is-valid-text"
              >
                <span v-if="!$v.form.registration.name.required"
                  >Name is required</span
                >
              </div>
            </div>
            <div class="select">
              <label for="">Role</label>
              <div class="vue-select">
                <treeselect
                  v-model="form.registration.role"
                  :clearable="false"
                  :searchable="false"
                  :options="roleOptions"
                  placeholder="Select role"
                />
              </div>
            </div>

            <div v-if="form.registration.role == 'agency'" class="input">
              <label>Agency Name</label>
              <input
                v-model.trim="form.registration.profile.company_name"
                type="text"
                :class="{
                  'is-valid': $v.form.registration.profile.company_name.$error,
                }"
              />
              <div
                v-if="$v.form.registration.profile.company_name.$error"
                class="is-valid-text"
              >
                <span v-if="!$v.form.registration.profile.company_name.required"
                  >Company name is required</span
                >
              </div>
            </div>

            <div v-if="form.registration.role == 'agency'" class="input">
              <label>Agency Website</label>
              <input
                v-model.trim="form.registration.profile.company_site"
                type="text"
                placeholder="http://"
                :class="{
                  'is-valid': $v.form.registration.profile.company_site.$error,
                }"
              />
              <div
                v-if="$v.form.registration.profile.company_site.$error"
                class="is-valid-text"
              >
                <span v-if="!$v.form.registration.profile.company_site.url"
                  >Url is not valid</span
                >
              </div>
            </div>

            <div v-if="form.registration.role == 'investor'" class="select">
              <label for="">Are you credited investor?</label>
              <div class="vue-select">
                <treeselect
                  v-model="form.registration.profile.is_credited"
                  :clearable="false"
                  :searchable="false"
                  :options="creditedInvestorGroupOptions"
                  placeholder="Select option"
                  :class="{
                    'is-valid': $v.form.registration.profile.is_credited.$error,
                  }"
                  @select="onCreditedInvestorSelect"
                />
                <div
                  v-if="$v.form.registration.profile.is_credited.$error"
                  class="is-valid-text"
                >
                  <span
                    v-if="!$v.form.registration.profile.is_credited.required"
                    >Сhoice is required</span
                  >
                </div>
              </div>
            </div>
            <div v-if="form.registration.role == 'investor'" class="select">
              <label for="">Do you belong to an angel group?</label>
              <div class="vue-select">
                <treeselect
                  v-model="form.registration.profile.is_company"
                  :clearable="false"
                  :searchable="false"
                  :options="angelGroupOptions"
                  placeholder="Select option"
                  :class="{
                    'is-valid': $v.form.registration.profile.is_company.$error,
                  }"
                  @select="onAngelGroupSelect"
                />
                <div
                  v-if="$v.form.registration.profile.is_company.$error"
                  class="is-valid-text"
                >
                  <span v-if="!$v.form.registration.profile.is_company.required"
                    >Сhoice is required</span
                  >
                </div>
              </div>
            </div>
            <div
              v-if="
                form.registration.role == 'investor' &&
                form.registration.profile.is_company == true
              "
              class="input"
            >
              <label>Which angel group?</label>
              <input
                v-model.trim="form.registration.profile.company_name"
                type="text"
                :class="{
                  'is-valid': $v.form.registration.profile.company_name.$error,
                }"
              />
              <div
                v-if="$v.form.registration.profile.company_name.$error"
                class="is-valid-text"
              >
                <span v-if="!$v.form.registration.profile.company_name.required"
                  >Company name is required</span
                >
              </div>
            </div>
            <div class="input">
              <label>Email Address</label>
              <input
                v-model.trim="form.registration.email"
                type="text"
                :class="{
                  'is-valid': $v.form.registration.email.$error,
                }"
              />
              <div
                v-if="$v.form.registration.email.$error"
                class="is-valid-text"
              >
                <span v-if="!$v.form.registration.email.required"
                  >Email is required</span
                >
                <span v-if="!$v.form.registration.email.email"
                  >Email is invalid</span
                >
              </div>
            </div>
            <div class="input">
              <label>Password</label>
              <input
                v-model.trim="form.registration.password"
                type="password"
                :class="{
                  'is-valid': $v.form.registration.password.$error,
                }"
              />
              <div
                v-if="$v.form.registration.password.$error"
                class="is-valid-text"
              >
                <span v-if="!$v.form.registration.password.required"
                  >Password is required</span
                >
                <span v-if="!$v.form.registration.password.minLength"
                  >Password must be at least
                  {{ $v.form.registration.password.$params.minLength.min }}
                  characters</span
                >
              </div>
            </div>
            <div class="navigation">
              <div class="submit">
                <input type="submit" value="Create account" />
              </div>
            </div>
            <div v-if="error" class="status">
              {{ error }}
            </div>
          </form>
          <div class="do-not-have-account">
            <span>Have an account?</span>
            <router-link to="/login" exact>Login</router-link>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import { serialize } from 'object-to-formdata'
import Treeselect from '@riophae/vue-treeselect'
import { validationMixin } from 'vuelidate'
import { email, minLength, required, url } from 'vuelidate/lib/validators'

export default {
  components: {
    Treeselect,
  },
  mixins: [validationMixin],
  data() {
    return {
      error: null,
      roleOptions: [
        {
          id: 'investor',
          label: 'Investor',
        },
        {
          id: 'entrepreneur',
          label: 'Entrepreneur',
        },
        {
          id: 'agency',
          label: 'Agency',
        },
      ],
      creditedInvestorGroupOptions: [
        {
          id: true,
          label: 'Yes',
        },
        {
          id: false,
          label: 'No',
        },
      ],
      angelGroupOptions: [
        {
          id: true,
          label: 'Yes',
        },
        {
          id: false,
          label: 'No',
        },
      ],
      form: {
        registration: {
          name: '',
          email: '',
          password: '',
          role: null,
          profile: {
            is_company: null,
            is_credited: null,
            company_name: '',
            company_site: '',
          },
        },
      },
    }
  },
  validations() {
    if (
      (this.form.registration.role === 'investor' &&
        this.form.registration.profile.is_company == null) ||
      this.form.registration.profile.is_company === false
    ) {
      return {
        form: {
          registration: {
            name: {
              required,
            },
            email: {
              email,
              required,
            },
            password: {
              required,
              minLength: minLength(6),
            },
            profile: {
              is_credited: {
                required,
              },
              is_company: {
                required,
              },
            },
          },
        },
      }
    } else if (
      this.form.registration.role === 'investor' &&
      this.form.registration.profile.is_company === true
    ) {
      return {
        form: {
          registration: {
            name: {
              required,
            },
            email: {
              email,
              required,
            },
            password: {
              required,
              minLength: minLength(6),
            },
            profile: {
              is_credited: {
                required,
              },
              is_company: {
                required,
              },
              company_name: {
                required,
              },
            },
          },
        },
      }
    }
    if (this.form.registration.role === 'agency') {
      return {
        form: {
          registration: {
            name: {
              required,
            },
            email: {
              email,
              required,
            },
            password: {
              required,
              minLength: minLength(6),
            },
            profile: {
              company_name: {
                required,
              },
              company_site: {
                url,
              },
            },
          },
        },
      }
    } else {
      return {
        form: {
          registration: {
            name: {
              required,
            },
            email: {
              email,
              required,
            },
            password: {
              required,
              minLength: minLength(6),
            },
          },
        },
      }
    }
  },
  created() {
    if (this.$store.getters.isLoggedIn) {
      this.$router.push('/')
    }
  },
  methods: {
    onAngelGroupSelect(option) {
      this.form.registration.profile.is_company = option.id
    },
    onCreditedInvestorSelect(option) {
      this.form.registration.profile.is_credited = option.id
    },
    onSubmitRegistration() {
      this.error = null
      this.$v.form.registration.$touch()
      if (this.$v.form.registration.$invalid) {
      } else {
        const formData = serialize(this.form.registration, {
          indices: true,
          booleansAsIntegers: true,
        })
        this.$store
          .dispatch('REGISTERATION', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((response) => {
            this.$router.push('/profile')
          })
          .catch((error) => {
            console.log(error.message)
            console.log(error.status)
            console.log(error.data)
            console.log(error.response)
            console.log(error)
            this.error = error.message.email
          })
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.registration-page {
  height: 100vh;
  background: url('/images/registration-page/bg-registration-page.svg'),
    $bg-grey;
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
        font-size: 16px;
        display: block;
        margin-bottom: 10px;
      }
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

      &::placeholder {
        color: #dddddd;
      }
    }
  }

  .select {
    padding-bottom: 30px;
    position: relative;
    width: 100%;

    label {
      font-size: 16px;
      display: block;
      margin-bottom: 10px;
    }
  }

  .textarea {
    padding-bottom: 30px;
    position: relative;
    width: 100%;

    label {
      font-size: 16px;
      display: block;
      margin-bottom: 10px;
    }

    textarea {
      display: block;
      width: 100%;
      height: 160px;
      border-radius: 5px;
      border: solid 1px #dddddd;
      background-color: #ffffff;
      padding: 10px;
      font-size: 16px;
      outline: none;
    }
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

  .submit {
    margin-bottom: 30px;

    input {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-family: $GTWalsheimPro;
      width: 236px;
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

      @media (max-width: 767px) {
        margin-right: 0px;
        margin-bottom: 15px;
        width: 100%;
        max-width: 230px;
        font-size: 16px;
        font-weight: 700;
        line-height: 1.5;
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
</style>
