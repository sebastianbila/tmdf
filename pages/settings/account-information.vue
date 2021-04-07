<template>
  <div>
    <Preloader :show="preloader"></Preloader>
    <div class="edit-profile-page">
      <div class="container">
        <div class="heading">
          <h2>Settings</h2>
          <router-link class="back" to="/settings">Back</router-link>
        </div>
        <div class="content">
          <div class="form">
            <div class="title">
              <h2>Account information</h2>
              <span v-if="!editing" class="edit" @click="onEditSettings"
                ><i class="fal fa-pencil"></i>Edit</span
              >
            </div>
            <form id="profile">
              <div class="field">
                <div class="row">
                  <div class="col-md-auto col-fixed-200px">
                    <label for="name">Name</label>
                  </div>
                  <div class="col">
                    <div v-if="editing" class="input">
                      <input
                        id="name"
                        v-model.trim="form.user.name"
                        type="text"
                        placeholder="Name"
                        :class="{
                          'is-valid': $v.form.user.name.$error,
                        }"
                      />
                      <div
                        v-if="$v.form.user.name.$error"
                        class="is-valid-text"
                      >
                        <span v-if="!$v.form.user.name.required"
                          >Name is required</span
                        >
                      </div>
                    </div>
                    <div
                      v-if="!editing"
                      class="value"
                      :class="{ 'add-value': !form.user.name }"
                    >
                      {{ form.user.name ? form.user.name : 'Add name' }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="row">
                  <div class="col-md-auto col-fixed-200px">
                    <label for="email">Email Address</label>
                  </div>
                  <div class="col">
                    <div v-if="editing" class="input">
                      <input
                        id="email"
                        v-model.trim="form.user.email"
                        type="text"
                        placeholder="Email Address"
                        :class="{
                          'is-valid': $v.form.user.email.$error,
                        }"
                      />
                      <div
                        v-if="$v.form.user.email.$error"
                        class="is-valid-text"
                      >
                        <span v-if="!$v.form.user.email.required"
                          >Email is required</span
                        >
                      </div>
                    </div>
                    <div
                      v-if="!editing"
                      class="value"
                      :class="{ 'add-value': !form.user.email }"
                    >
                      {{ form.user.email ? form.user.email : 'Add email' }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="row">
                  <div class="col-md-auto col-fixed-200px">
                    <label for="company-name">Company Name</label>
                  </div>
                  <div class="col">
                    <div v-if="editing" class="input">
                      <input
                        id="company-name"
                        v-model.trim="form.user.profile.company_name"
                        type="text"
                        placeholder="Company Name"
                      />
                    </div>
                    <div
                      v-if="!editing"
                      class="value"
                      :class="{
                        'add-value': !form.user.profile.company_name,
                      }"
                    >
                      {{
                        form.user.profile.company_name
                          ? form.user.profile.company_name
                          : 'Add company name'
                      }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="row">
                  <div class="col-md-auto col-fixed-200px">
                    <label for="company-site">Company Site</label>
                  </div>
                  <div class="col">
                    <div v-if="editing" class="input">
                      <input
                        id="company-site"
                        v-model.trim="form.user.profile.company_site"
                        type="text"
                        placeholder="Company Site"
                      />
                      <div
                        v-if="$v.form.user.profile.company_site.$error"
                        class="is-valid-text"
                      >
                        <span v-if="!$v.form.user.profile.company_site.url"
                          >Url is invalid</span
                        >
                      </div>
                    </div>
                    <div
                      v-if="!editing"
                      class="value"
                      :class="{ 'add-value': !form.user.company_site }"
                    >
                      {{
                        form.user.profile.company_site
                          ? form.user.profile.company_site
                          : 'Add company site'
                      }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="row">
                  <div class="col-md-auto col-fixed-200px">
                    <label for="company-location">Company Location</label>
                  </div>
                  <div class="col">
                    <div v-if="editing" class="input">
                      <input
                        id="company-location"
                        v-model.trim="form.user.profile.company_location"
                        type="text"
                        placeholder="Company Location"
                      />
                    </div>
                    <div
                      v-if="!editing"
                      class="value"
                      :class="{
                        'add-value': !form.user.profile.company_location,
                      }"
                    >
                      {{
                        form.user.profile.company_location
                          ? form.user.profile.company_location
                          : 'Add company location'
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
            @click="onSubmitAccountInformation"
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
import {
  required,
  email,
  minLength,
  maxLengt,
  numeric,
  url,
} from 'vuelidate/lib/validators'
import { VueAvatar } from 'vue-avatar-editor-improved'
export default {
  components: {
    Modal,
    VueAvatar,
    Treeselect,
    Preloader,
  },
  layout: 'LayoutApplication',
  data() {
    return {
      preloader: true,
      editing: false,
      errors: [],
      form: {
        user: {
          avatar: null,
          name: null,
          email: null,
          completedOn: null,
          profile: {
            company_location: null,
            company_name: null,
            company_site: null,
            founded: null,
            is_company: null,
            linkedin: null,
            mini_resume: null,
            study_at: null,
            study_begin: null,
            study_degree: null,
            study_end: null,
            study_field: null,
            worked_at: null,
          },
        },
      },
    }
  },
  validations: {
    form: {
      user: {
        name: {
          required,
        },
        email: {
          email,
          required,
        },
        profile: {
          company_site: {
            url,
          },
        },
      },
    },
  },
  created() {
    this.getProfile()
  },
  methods: {
    onEditSettings() {
      this.editing = true
    },
    onCancelSettings() {
      this.$v.form.$reset()
      this.editing = false
    },
    onSubmitAccountInformation() {
      this.$v.form.user.$touch()
      if (this.$v.form.$invalid) {
      } else {
        const formData = serialize(this.form.user)
        this.$store
          .dispatch('UPDATEACCOUNT', formData, {
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
    getProfile() {
      this.$store
        .dispatch('GETROFILE')
        .then((response) => {
          if (response.status == 200) {
            Object.assign(this.form.user, response.data)
            this.preloader = false
          }
        })
        .catch((error) => {
          this.errors = error.response.data
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.edit-profile-page {
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
          word-break: break-word;
          @media (max-width: 767px) {
            margin-top: 10px;
          }
        }
        .add-value {
          color: #999999;
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
