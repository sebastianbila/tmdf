<template>
  <div>
    <Preloader :show="preloader"></Preloader>
    <div class="change-your-password-page">
      <div class="container">
        <div class="heading">
          <h2>Settings</h2>
          <router-link class="back" to="/settings">Back</router-link>
        </div>
        <div class="content">
          <div class="form">
            <div class="title">
              <h2>Change your password</h2>
              <span v-if="!editing" class="edit" @click="onEditSettings"
                ><i class="fal fa-pencil"></i>Edit</span
              >
            </div>
            <form id="change-your-password-page">
              <div class="field">
                <div class="row">
                  <div class="col-md-auto col-fixed-200px">
                    <label for="old-password">Old Password</label>
                  </div>
                  <div class="col">
                    <div v-if="editing" class="input">
                      <input
                        id="old-password"
                        v-model.trim="form.passwordChange.old_password"
                        type="text"
                        placeholder="Old Password"
                        :class="{
                          'is-valid':
                            $v.form.passwordChange.old_password.$error,
                        }"
                      />
                      <div
                        v-if="$v.form.passwordChange.old_password.$error"
                        class="is-valid-text"
                      >
                        <span
                          v-if="!$v.form.passwordChange.old_password.required"
                          >Old Password is required</span
                        >
                      </div>
                    </div>
                    <div
                      v-if="!editing"
                      class="value"
                      :class="{
                        'add-value': !form.passwordChange.old_password,
                      }"
                    >
                      {{
                        form.passwordChange.old_password
                          ? form.passwordChange.old_password
                          : 'Add old password'
                      }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="row">
                  <div class="col-md-auto col-fixed-200px">
                    <label for="password">Password</label>
                  </div>
                  <div class="col">
                    <div v-if="editing" class="input">
                      <input
                        id="password"
                        v-model.trim="form.passwordChange.password"
                        type="text"
                        placeholder="Password"
                        :class="{
                          'is-valid': $v.form.passwordChange.password.$error,
                        }"
                      />
                      <div
                        v-if="$v.form.passwordChange.password.$error"
                        class="is-valid-text"
                      >
                        <span v-if="!$v.form.passwordChange.password.required"
                          >Password is required</span
                        >
                        <span v-if="!$v.form.passwordChange.password.minLength"
                          >Password must be at least{{
                            $v.form.passwordChange.password.$params.minLength
                              .min
                          }}characters</span
                        >
                      </div>
                    </div>
                    <div
                      v-if="!editing"
                      class="value"
                      :class="{
                        'add-value': !form.passwordChange.password,
                      }"
                    >
                      {{
                        form.passwordChange.password
                          ? form.passwordChange.password
                          : 'Add password'
                      }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="row">
                  <div class="col-md-auto col-fixed-200px">
                    <label for="confirm-password">Confirm Password</label>
                  </div>
                  <div class="col">
                    <div v-if="editing" class="input">
                      <input
                        id="confirm-password"
                        v-model.trim="form.passwordChange.password_confirmation"
                        type="text"
                        placeholder="Confirm Password"
                        :class="{
                          'is-valid':
                            $v.form.passwordChange.password_confirmation.$error,
                        }"
                      />
                      <div
                        v-if="
                          $v.form.passwordChange.password_confirmation.$error
                        "
                        class="is-valid-text"
                      >
                        <span
                          v-if="
                            !$v.form.passwordChange.password_confirmation
                              .sameAsPassword
                          "
                          >Passwords must be identical</span
                        >
                      </div>
                    </div>
                    <div
                      v-if="!editing"
                      class="value"
                      :class="{
                        'add-value': !form.passwordChange.password_confirmation,
                      }"
                    >
                      {{
                        form.passwordChange.password_confirmation
                          ? form.passwordChange.password_confirmation
                          : 'Add confirmation password'
                      }}
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div v-if="editing" class="navigation">
          <button
            type="buttom"
            class="btn-transparent"
            @click="onCancelSettings"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="btn-blue"
            @click="onSubmitChangeYourPassword"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Preloader from '@components/Common/Preloader'
import Treeselect from '@riophae/vue-treeselect'
import { serialize } from 'object-to-formdata'
import Modal from '@components/Common/Modal'
import { required, minLength, sameAs } from 'vuelidate/lib/validators'
import { VueAvatar } from 'vue-avatar-editor-improved'
import { validationMixin } from 'vuelidate'
export default {
  mixins: [validationMixin],
  layout: 'LayoutApplication',
  data() {
    return {
      preloader: true,
      editing: false,
      errors: [],
      form: {
        passwordChange: {
          old_password: null,
          password: null,
          confirm_password: null,
        },
      },
    }
  },
  validations: {
    form: {
      passwordChange: {
        old_password: {
          required,
        },
        password: {
          required,
          minLength: minLength(6),
        },
        password_confirmation: {
          sameAsPassword: sameAs('password'),
        },
      },
    },
  },
  components: {
    Modal,
    VueAvatar,
    Treeselect,
    Preloader,
  },
  created() {
    this.preloader = false
  },
  methods: {
    onEditSettings() {
      this.editing = true
    },
    onCancelSettings() {
      this.$v.form.$reset()
      this.editing = false
    },
    onSubmitChangeYourPassword() {
      this.$v.form.passwordChange.$touch()
      if (this.$v.form.passwordChange.$invalid) {
      } else {
        const formData = serialize(this.form.passwordChange)
        this.$store
          .dispatch('PASSWORDCHANGE', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((response) => {
            this.editing = false
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
.change-your-password-page {
  .heading {
    font-size: 22px;
    padding: 30px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 767px) {
      padding: 30px;
    }
    h2 {
      margin: 0px;
      @media (max-width: 991px) {
        font-size: 22px;
      }
      @media (max-width: 576px) {
        font-size: 18px;
      }
    }
    .back {
      text-decoration: none;
      font-size: 18px;
      font-weight: 700;
      line-height: 1.11;
      color: #618cfa;
    }
  }
  .content {
    overflow: hidden;
    position: relative;
    width: 100%;
    padding: 70px 50px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #ffffff;
    @media (max-width: 767px) {
      border-radius: 0px;
      padding: 30px;
    }

    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 30px;
      height: 36px;

      h2 {
        margin: 0px;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.11;
        color: #242424;
      }
      .edit {
        display: inline-block;
        text-decoration: none;
        font-size: 16px;
        font-weight: 700;
        line-height: 36px;
        letter-spacing: 0.3px;
        color: #618cfa;
        cursor: pointer;
        i {
          border-radius: 50%;
          padding: 10px;
          background-color: #618cfa;
          color: #ffffff;
          margin-right: 5px;
        }
      }
    }

    .form {
      position: relative;
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      @media (max-width: 767px) {
        border-radius: 0px;
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

      .field {
        padding: 30px;
        border-radius: 10px;
        background-color: #f2f5f7;
        margin-bottom: 20px;
        .row {
          align-items: center;
          &:nth-child(2) {
            margin-top: 30px;
          }
        }

        .col-fixed-200px {
          flex: 0 0 200px;
          @media (max-width: 767px) {
            flex: 0 0 auto;
          }
        }

        .input {
          position: relative;
          label {
            cursor: pointer;
            font-size: 16px;
          }
          input {
            display: block;
            width: 100%;
            height: 44px;
            border-radius: 5px;
            border: 1px solid #dddddd;
            background-color: #ffffff;
            padding: 10px;
            font-size: 16px;
            outline: none;
            font-weight: 700;
            @media (max-width: 767px) {
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
          position: relative;
          label {
            font-size: 16px;
          }
          .vue-select {
            @media (max-width: 767px) {
              margin-top: 10px;
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
        .textarea {
          position: relative;
          label {
            cursor: pointer;
            font-size: 16px;
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
            font-weight: 700;
            @media (max-width: 767px) {
              margin-top: 10px;
            }
            @media (max-width: 992px) {
              margin-left: 0%;
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
        .checkbox {
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
        .value {
          height: 44px;
          padding: 10px;
          font-weight: 700;
          display: flex;
          align-items: center;
          border-radius: 5px;
          color: #999999;
          word-break: break-word;
          @media (max-width: 767px) {
            margin-top: 10px;
          }
        }
      }
    }
  }

  .navigation {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 30px 0px;
    font-size: 0px;
    @media (max-width: 767px) {
      justify-content: center;
      padding: 30px;
    }
    .btn-transparent {
      margin-right: 20px;
    }
    .btn-blue {
      width: 100%;
      max-width: 236px;
    }
  }
}
</style>
