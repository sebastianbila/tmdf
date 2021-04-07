<template>
  <div>
    <Preloader :show="preloader"></Preloader>
    <div class="profile-page">
      <div class="container">
        <div class="heading">
          <h2>Profile</h2>
        </div>
        <div class="content">
          <div v-if="sendingForm" class="oveflow">
            <!--            TODO -->
            <!--            <Spinner size="60" :line-size="6" line-fg-color="#618cfa"></Spinner>-->
          </div>
          <div class="form">
            <form id="profile">
              <div class="header">
                <div class="avatar" @click="openModalAvatar">
                  <img
                    ref="avatar"
                    :src="
                      form.user.avatar
                        ? form.user.avatar
                        : '/images/profile-page/avatar.svg'
                    "
                    alt="avatar"
                  />
                  <i class="fal fa-camera"></i>
                </div>
                <span v-if="!editing" class="edit" @click="onEditSettings"
                  ><i class="fal fa-pencil"></i>Edit</span
                >
              </div>
              <div class="field">
                <div class="row">
                  <div class="col-md-auto col-fixed-170px">
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
                      {{ form.user.name ? form.user.name : 'Add Name' }}
                    </div>
                  </div>
                </div>
              </div>

              <div class="field">
                <div class="row">
                  <div class="col-md-auto col-fixed-170px">
                    <label for="founded">I founded</label>
                  </div>
                  <div class="col">
                    <div v-if="editing" class="input">
                      <input
                        id="founded"
                        v-model.trim="form.user.profile.founded"
                        type="text"
                        placeholder="Company"
                      />
                    </div>
                    <div
                      v-if="!editing"
                      class="value"
                      :class="{ 'add-value': !form.user.profile.founded }"
                    >
                      <span>{{
                        form.user.profile.founded
                          ? form.user.profile.founded
                          : 'Add worked'
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="row">
                  <div class="col-md-auto col-fixed-170px">
                    <label for="worked-at">I worked at</label>
                  </div>
                  <div class="col">
                    <div v-if="editing" class="input">
                      <input
                        id="worked-at"
                        v-model.trim="form.user.profile.worked_at"
                        type="text"
                        placeholder="Company"
                      />
                    </div>
                    <div
                      v-if="!editing"
                      class="value"
                      :class="{ 'add-value': !form.user.profile.worked_at }"
                    >
                      {{
                        form.user.profile.worked_at
                          ? form.user.profile.worked_at
                          : 'Add Field'
                      }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="row">
                  <div class="col-md-auto col-fixed-170px">
                    <label for="mini-resume">Mini-resume:</label>
                  </div>
                  <div class="col">
                    <div class="textarea">
                      <textarea
                        v-if="editing"
                        id="mini-resume"
                        v-model.trim="form.user.profile.mini_resume"
                        type="text"
                        placeholder="Tell us about yourself"
                      >
                      </textarea>
                    </div>
                    <div
                      v-if="!editing"
                      :class="{
                        'add-value': !form.user.profile.mini_resume,
                      }"
                      class="value"
                    >
                      {{
                        form.user.profile.mini_resume
                          ? form.user.profile.mini_resume
                          : 'Add mini resume'
                      }}
                    </div>
                  </div>
                </div>
              </div>

              <div class="field">
                <div class="row">
                  <div class="col-md-auto col-fixed-170px">
                    <label for="linkedin">LinkedIn</label>
                  </div>
                  <div class="col">
                    <div v-if="editing" class="input">
                      <input
                        id="linkedin"
                        v-model.trim="form.user.profile.linkedin"
                        type="text"
                        placeholder="https://"
                        :class="{
                          'is-valid': $v.form.user.profile.linkedin.$error,
                        }"
                      />
                      <div
                        v-if="$v.form.user.profile.linkedin.$error"
                        class="is-valid-text"
                      >
                        <span v-if="!$v.form.user.profile.linkedin.url"
                          >Url is invalid</span
                        >
                      </div>
                    </div>
                    <div
                      v-if="!editing"
                      class="value"
                      :class="{ 'add-value': !form.user.profile.linkedin }"
                    >
                      {{
                        form.user.profile.linkedin
                          ? form.user.profile.linkedin
                          : 'Add linkedin'
                      }}
                    </div>
                  </div>
                </div>
              </div>

              <div class="field">
                <div class="row">
                  <div class="col-md-auto col-fixed-170px">
                    <label for="worked-at">I studed at</label>
                  </div>
                  <div class="col">
                    <div class="row">
                      <div class="col">
                        <div v-if="editing" class="input">
                          <input
                            id="studed-at"
                            v-model.trim="form.user.profile.study_at"
                            type="text"
                            placeholder="College"
                            @keyup="onShowAdditionalFieldsStuded"
                          />
                        </div>
                        <div
                          v-if="!editing"
                          class="value"
                          :class="{
                            'add-value': !form.user.profile.study_at,
                          }"
                        >
                          {{
                            form.user.profile.study_at
                              ? form.user.profile.study_at
                              : 'Add Field'
                          }}
                        </div>
                      </div>

                      <div
                        v-if="
                          isShowAdditionalFieldsStuded ||
                          form.user.profile.study_at
                        "
                        class="col-lg-12 col-xl-3"
                      >
                        <div v-if="editing" class="select">
                          <div class="vue-select">
                            <treeselect
                              id="start-year-of-study"
                              v-model="form.user.profile.study_begin"
                              :clearable="false"
                              :options="studyBeginOptions"
                              placeholder="Start Year"
                              @select="onSelectBeginYear"
                            />
                          </div>
                        </div>
                        <div
                          v-if="!editing"
                          class="value"
                          :class="{
                            'add-value': !form.user.profile.study_begin,
                          }"
                        >
                          {{
                            form.user.profile.study_begin
                              ? form.user.profile.study_begin
                              : 'Add start year'
                          }}
                        </div>
                      </div>
                      <div
                        v-if="
                          isShowAdditionalFieldsStuded ||
                          form.user.profile.study_at
                        "
                        class="col-lg-12 col-xl-3"
                      >
                        <div v-if="editing" class="select">
                          <div class="vue-select">
                            <treeselect
                              id="end-year-of-study"
                              v-model="form.user.profile.study_end"
                              :clearable="false"
                              :options="studyEndOptions"
                              placeholder="End Year"
                              @select="onSelectEndYear"
                            />
                          </div>
                        </div>
                        <div
                          v-if="!editing"
                          class="value"
                          :class="{
                            'add-value': !form.user.profile.study_end,
                          }"
                        >
                          {{
                            form.user.profile.study_end
                              ? form.user.profile.study_end
                              : 'Add end year'
                          }}
                        </div>
                      </div>
                    </div>

                    <div
                      v-if="
                        isShowAdditionalFieldsStuded ||
                        form.user.profile.study_at
                      "
                      class="row"
                    >
                      <div
                        v-if="
                          isShowAdditionalFieldsStuded ||
                          form.user.profile.study_at
                        "
                        class="col-lg-12 col-xl-6"
                      >
                        <div v-if="editing" class="select">
                          <div class="vue-select">
                            <treeselect
                              id="degree-type"
                              v-model="form.user.profile.study_degree"
                              :clearable="false"
                              :options="degreeTypeOptions"
                              placeholder="Degree Type"
                            />
                          </div>
                        </div>
                        <div
                          v-if="!editing"
                          class="value"
                          :class="{
                            'add-value': !form.user.profile.study_degree,
                          }"
                        >
                          {{
                            form.user.profile.study_degree
                              ? form.user.profile.study_degree
                              : 'Add degree type'
                          }}
                        </div>
                      </div>
                      <div
                        v-if="
                          isShowAdditionalFieldsStuded ||
                          form.user.profile.study_at
                        "
                        class="col-lg-12 col-xl-6"
                      >
                        <div v-if="editing" class="select">
                          <div class="vue-select">
                            <treeselect
                              id="field-of-study"
                              v-model="form.user.profile.study_field"
                              :clearable="false"
                              :options="studyFieldOptions"
                              placeholder="Field of study"
                            />
                          </div>
                        </div>
                        <div
                          v-if="!editing"
                          class="value"
                          :class="{
                            'add-value': !form.user.profile.study_field,
                          }"
                        >
                          {{
                            form.user.profile.study_field
                              ? form.user.profile.study_field
                              : 'Add field study'
                          }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div v-if="editing && !sendingForm" class="navigation">
          <button
            type="buttom"
            class="btn-transparent"
            @click="onCancelSettings"
          >
            Cancel
          </button>
          <button type="submit" class="btn-blue" @click="onSubmitProfile">
            Save
          </button>
        </div>
      </div>
      <Modal
        :is-show-modal="isShowModalAvatar"
        width="400"
        title="Select Profile Photo"
        @isCloseModal="isCloseModalAvatar"
      >
        <div class="modal-profile-photo">
          <div class="drag-and-drop">
            <vue-avatar
              ref="vueavatar"
              :border-radius="200"
              :style="{ 'border-radius': '50%' }"
              :scale="scale"
              accept=".jpg, .jpeg, .png , .svg, .gif"
              placeholder-svg='<svg aria-hidden="true" width="50px" focusable="false" data-prefix="fas" data-icon="camera" class="svg-inline--fa fa-camera fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" fill-opacity="0.5" d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"></path></svg>'
              @vue-avatar-editor:image-ready="onImageReady"
            >
            </vue-avatar>
          </div>
          <div class="range">
            <label>Zoom : {{ scale }}x</label>
            <input
              v-model.number="scale"
              type="range"
              min="1"
              max="3"
              step="0.02"
            />
          </div>
          <div v-if="!imageReady" class="nav flex-column">
            <label>Drag files to upload, or</label>
            <button
              type="button"
              class="btn-blue"
              @click="$refs.vueavatar.$refs.input.click()"
            >
              CHOOSE FILE
            </button>
          </div>
          <div v-if="imageReady" class="nav">
            <button type="button" class="btn-transparent" @click="resetAvatar">
              RESET
            </button>
            <button type="button" class="btn-blue" @click="uploadAvatar">
              UPLOAD
            </button>
          </div>
        </div>
      </Modal>
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
import vuescroll from 'vuescroll'
import { validationMixin } from 'vuelidate'
// import Spinner from 'vue-simple-spinner'
export default {
  components: {
    Modal,
    VueAvatar,
    Treeselect,
    Preloader,
    // Spinner,
  },
  mixins: [validationMixin],
  layout: 'LayoutApplication',
  data() {
    return {
      ops: {
        vuescroll: {
          mode: 'native',
          sizeStrategy: 'percent',
          detectResize: true,
          locking: true,
        },
        scrollPanel: {
          scrollingY: true,
          scrollingX: false,
        },
        rail: {},
        bar: {
          onlyShowBarOnScroll: false,
          background: '#989898',
        },
      },
      sendingForm: false,
      preloader: true,
      editing: false,
      errors: [],
      isShowModalAvatar: false,
      isShowAdditionalFieldsStuded: false,
      scale: 1,
      imageReady: false,
      canvas: null,
      startYearBegin: 1980,
      startYearEnd: 1980,
      degreeTypeOptions: [
        {
          id: 'Type1',
          label: 'Type1',
        },
        {
          id: 'Type2',
          label: 'Type2',
        },
        {
          id: 'Type3',
          label: 'Type3',
        },
      ],
      studyFieldOptions: [
        {
          id: 'Field1',
          label: 'Field1',
        },
        {
          id: 'Field2',
          label: 'Field2',
        },
        {
          id: 'Field3',
          label: 'Field3',
        },
      ],
      form: {
        user: {
          avatar: null,
          media: null,
          name: null,
          email: null,
          completedOn: null,
          profile: {
            study_at: null,
            study_begin: null,
            study_end: null,
            study_degree: null,
            study_field: null,
            worked_at: null,
            founded: null,
            mini_resume: null,
            linkedin: null,
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
        profile: {
          linkedin: {
            url,
          },
        },
      },
    },
  },
  computed: {
    userId() {
      return this.$store.getters.getUserInfo.userid
    },
    userType() {
      return this.$store.getters.getUserInfo.type
    },
    studyBeginOptions() {
      const currentYear = new Date().getFullYear()
      const years = []
      let startYear = this.startYearBegin
      for (let i = startYear; i <= currentYear; i++) {
        years.push({
          id: startYear.toString(),
          label: startYear.toString(),
        })
        startYear++
      }
      return years
    },
    studyEndOptions() {
      const currentYear = new Date().getFullYear()
      const years = []
      let startYear = this.startYearEnd
      for (let i = startYear; i <= currentYear; i++) {
        years.push({
          id: startYear.toString(),
          label: startYear.toString(),
        })
        startYear++
      }
      return years
    },
  },
  created() {
    this.getProfile()
    this.onShowAdditionalFieldsStuded()
  },
  methods: {
    onShowAdditionalFieldsStuded() {
      if (this.form.user.profile.study_at) {
        this.isShowAdditionalFieldsStuded = true
      } else {
        this.isShowAdditionalFieldsStuded = false
      }
    },
    onEditSettings() {
      this.editing = true
    },
    onCancelSettings() {
      this.$v.form.$reset()
      this.editing = false
    },
    onSubmitProfile() {
      this.$v.form.user.$touch()
      if (this.$v.form.user.$invalid) {
      } else {
        this.sendingForm = true
        const formData = serialize(this.form.user)
        this.$store
          .dispatch('CREATEPROFILE', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((response) => {
            this.editing = false
            this.sendingForm = false
          })
          .catch((error) => {
            this.errors = error.response.data
          })
      }
    },
    onSelectBeginYear(option) {
      if (option.id > this.form.user.profile.study_end) {
        this.form.user.profile.study_end = option.id
      }
    },
    onSelectEndYear(option) {
      if (option.id < this.form.user.profile.study_begin) {
        this.form.user.profile.study_begin = option.id
      }
    },
    resetAvatar() {
      this.$refs.vueavatar.resetImage()
      this.$refs.vueavatar.$refs.input.value = null
      this.imageReady = false
    },
    uploadAvatar() {
      const imageScaled = this.$refs.vueavatar.getImageScaled()
      this.$refs.avatar.src = imageScaled.toDataURL()
      const image = imageScaled.toDataURL('image/jpeg')
      const file = this.dataURLtoFile(image, 'avatar')
      this.form.user.media = file
      this.isShowModalAvatar = false
      this.editing = true
    },
    dataURLtoFile(dataurl, filename) {
      const arr = dataurl.split(',')
      const mime = arr[0].match(/:(.*?);/)[1]
      const bstr = atob(arr[1])
      let n = bstr.length
      const u8arr = new Uint8Array(n)
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      return new File([u8arr], filename + '.' + mime.replace('image/', ''), {
        type: mime,
      })
    },
    onImageReady() {
      this.scale = 1
      this.imageReady = true
      this.$refs.vueavatar.$refs.input.value = null
    },
    openModalAvatar() {
      this.isShowModalAvatar = true
    },
    isCloseModalAvatar() {
      this.isShowModalAvatar = false
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
.profile-page {
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
  }

  .content {
    position: relative;
    width: 100%;
    padding: 50px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #ffffff;
    @media (max-width: 767px) {
      border-radius: 0px;
      padding: 30px;
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
      background-color: rgba(0, 0, 0, 0.5);
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

      .header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
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
        .avatar {
          position: relative;
          display: inline-block;
          margin-bottom: 40px;
          cursor: pointer;
          img {
            width: 120px;
            box-shadow: 0 2px 22px 0 rgba(32, 49, 94, 0.13);
            border-radius: 50%;
          }
          i {
            bottom: 0px;
            right: 0px;
            position: absolute;
            border-radius: 50%;
            box-shadow: 0 2px 22px 0 rgba(32, 49, 94, 0.13);
            background-color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #618cfa;
            width: 42px;
            height: 42px;
            font-size: 22px;
          }
        }
      }
      .field {
        padding: 30px;
        border-radius: 10px;
        background-color: #f2f5f7;
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0px;
        }
        .row {
          align-items: center;
          &:nth-child(2) {
            margin-top: 30px;

            @media (max-width: 1199px) {
              margin-top: 0px;
            }
          }
        }

        .col-fixed-170px {
          flex: 0 0 170px;
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
            margin-top: 4px;
            font-size: 14px;
            color: red;
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
            width: 100%;
            height: 120px;
            resize: none;
            display: block;
            border-radius: 5px;
            border: none;
            border: solid 1px #dddddd;
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
          padding: 10px;
          font-weight: 700;
          border-radius: 5px;
          word-break: break-word;
          @media (max-width: 1199px) {
            margin-top: 10px;
          }
        }
        .add-value {
          font-weight: 400;
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
  .modal-profile-photo {
    background-repeat: no-repeat;
    background-position: 50% 100%;
    padding: 30px;
    position: relative;
    .drag-and-drop {
      position: relative;
      text-align: center;
      margin: 0px auto;
      margin-bottom: 10px;
      padding-top: 100%;
      cursor: pointer;
      i {
        font-size: 30px;
        color: #979797;
      }
    }

    .range {
      max-width: 260px;
      margin: 0px auto;
      margin-bottom: 20px;

      label {
        width: 100%;
        text-align: center;
        font-size: 16px;
        color: #000000;
        display: inline-block;
        margin-bottom: 10px;
      }
      input[type='range'] {
        width: 100%;
      }
    }

    label {
      display: block;
      width: 100%;
      text-align: center;
      font-size: 16px;
      color: #000000;
      margin-bottom: 20px;
    }
    .nav {
      display: flex;
      align-items: center;
      justify-content: flex-end;
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
}
</style>
