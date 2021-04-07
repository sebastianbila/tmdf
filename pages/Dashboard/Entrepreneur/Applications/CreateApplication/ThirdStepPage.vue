<template>
  <div class="third-step">
    <div class="step-content">
      <form>
        <div class="project-documents">
          <div class="text">
            <div class="title">
              <h2>Project documents</h2>
            </div>
            <div class="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </div>
          </div>
          <div class="drop-file">
            <label for="">1. Executive Summary</label>
            <div
              class="file-upload"
              @click="onFileUploadTriggerClick('file_1')"
            >
              <div v-if="!form.files.file_1.showFileName" class="file-label">
                <i class="far fa-paperclip"></i
                ><span>Drop the document, or select a file.</span>
              </div>
              <div
                v-if="form.files.file_1.showFileName"
                class="file-name"
                @click.stop
              >
                <span class="icon"><i class="fal fa-file-alt"></i></span
                ><span>{{ form.files.file_1.file_name }}</span
                ><span
                  class="delete"
                  @click.stop="onDeleteFileFromUpload('file_1')"
                  ><i class="fal fa-trash-alt"></i
                ></span>
              </div>
              <input
                ref="file_1"
                type="file"
                @change="onFileUpload('file_1')"
              />
            </div>
          </div>
          <div class="drop-file">
            <label for="">2. Executive Summary</label>
            <div
              class="file-upload"
              @click="onFileUploadTriggerClick('file_2')"
            >
              <div v-if="!form.files.file_2.showFileName" class="file-label">
                <i class="far fa-paperclip"></i
                ><span>Drop the document, or select a file.</span>
              </div>
              <div
                v-if="form.files.file_2.showFileName"
                class="file-name"
                @click.stop
              >
                <span class="icon"><i class="fal fa-file-alt"></i></span
                ><span>{{ form.files.file_2.file_name }}</span
                ><span
                  class="delete"
                  @click.stop="onDeleteFileFromUpload('file_2')"
                  ><i class="fal fa-trash-alt"></i
                ></span>
              </div>
              <input
                ref="file_2"
                type="file"
                @change="onFileUpload('file_2')"
              />
            </div>
          </div>
          <div class="drop-file">
            <label for="">3. Executive Summary</label>
            <div
              class="file-upload"
              @click="onFileUploadTriggerClick('file_3')"
            >
              <div v-if="!form.files.file_3.showFileName" class="file-label">
                <i class="far fa-paperclip"></i
                ><span>Drop the document, or select a file.</span>
              </div>
              <div
                v-if="form.files.file_3.showFileName"
                class="file-name"
                @click.stop
              >
                <span class="icon"><i class="fal fa-file-alt"></i></span
                ><span>{{ form.files.file_3.file_name }}</span
                ><span
                  class="delete"
                  @click.stop="onDeleteFileFromUpload('file_3')"
                  ><i class="fal fa-trash-alt"></i
                ></span>
              </div>
              <input
                ref="file_3"
                type="file"
                @change="onFileUpload('file_3')"
              />
            </div>
          </div>
          <div class="drop-file">
            <label for="">4. Executive Summary</label>
            <div
              class="file-upload"
              @click="onFileUploadTriggerClick('file_4')"
            >
              <div v-if="!form.files.file_4.showFileName" class="file-label">
                <i class="far fa-paperclip"></i
                ><span>Drop the document, or select a file.</span>
              </div>
              <div
                v-if="form.files.file_4.showFileName"
                class="file-name"
                @click.stop
              >
                <span class="icon"><i class="fal fa-file-alt"></i></span
                ><span>{{ form.files.file_4.file_name }}</span
                ><span
                  class="delete"
                  @click.stop="onDeleteFileFromUpload('file_4')"
                  ><i class="fal fa-trash-alt"></i
                ></span>
              </div>
              <input
                ref="file_4"
                type="file"
                @change="onFileUpload('file_4')"
              />
            </div>
          </div>
          <div class="drop-file">
            <label for="">5. Executive Summary</label>
            <div
              class="file-upload"
              @click="onFileUploadTriggerClick('file_5')"
            >
              <div v-if="!form.files.file_5.showFileName" class="file-label">
                <i class="far fa-paperclip"></i
                ><span>Drop the document, or select a file.</span>
              </div>
              <div
                v-if="form.files.file_5.showFileName"
                class="file-name"
                @click.stop
              >
                <span class="icon"><i class="fal fa-file-alt"></i></span
                ><span>{{ form.files.file_5.file_name }}</span
                ><span
                  class="delete"
                  @click.stop="onDeleteFileFromUpload('file_5')"
                  ><i class="fal fa-trash-alt"></i
                ></span>
              </div>
              <input
                ref="file_5"
                type="file"
                @change="onFileUpload('file_5')"
              />
            </div>
          </div>
          <div class="complite-changes">
            <span
              ><b>20%</b> complete, <b>20%</b> chance of getting
              investment</span
            ><i class="fas fa-info-circle"></i>
          </div>
        </div>
        <hr />
        <div class="other-documents">
          <div class="other-group">
            <div class="text">
              <div class="title">
                <h2>Other Documents (optional)</h2>
              </div>
              <div class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </div>
            </div>
            <div class="drop-file">
              <div
                class="file-upload"
                @click="onFileUploadTriggerClick('file_6')"
              >
                <div v-if="!form.files.file_6.showFileName" class="file-label">
                  <i class="far fa-paperclip"></i
                  ><span>Drop the document, or select a file.</span>
                </div>
                <div
                  v-if="form.files.file_6.showFileName"
                  class="file-name"
                  @click.stop
                >
                  <span class="icon"><i class="fal fa-file-alt"></i></span
                  ><span>{{ form.files.file_6.file_name }}</span
                  ><span
                    class="delete"
                    @click.stop="onDeleteFileFromUpload('file_6')"
                    ><i class="fal fa-trash-alt"></i
                  ></span>
                </div>
                <input
                  ref="file_6"
                  type="file"
                  @change="onFileUpload('file_6')"
                />
              </div>
            </div>
            <hr />
            <div class="text">
              <div class="title">
                <h2>Project video (optional)</h2>
              </div>
              <div class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </div>
            </div>

            <div class="input">
              <div class="row">
                <div class="col-md-3">
                  <label for="youtube-or-vimeo">Link a Youtube or Vimeo</label>
                </div>
                <div class="col-md-9">
                  <div class="input">
                    <input
                      v-model="form.project_video"
                      type="text"
                      placeholder="https://"
                      :class="{
                        'is-valid': $v.form.project_video.$error,
                      }"
                    />
                    <div
                      v-if="$v.form.project_video.$error"
                      class="is-valid-text"
                    >
                      <span v-if="!$v.form.project_video.required"
                        >Url is required</span
                      >
                      <span v-if="!$v.form.project_video.url"
                        >Url is invalid</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="checkbox">
            <input
              id="accepted"
              type="checkbox"
              @input="onAccepterdTheTermsOfService"
            />
            <label for="accepted"
              >I have read and accepted the
              <a href="">Terms of Service</a></label
            >
          </div>
        </div>
      </form>
    </div>
    <div class="navigation">
      <button type="button" class="save-to-drafts" @click="saveToDrafts">
        Save to drafts
      </button>
      <button type="button" class="prev" @click="prev">Prev</button>
      <button
        type="submit"
        class="submit"
        :disabled="form.acccepterdTheTermsOfService"
        @click="onSubmitApplications"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import { required, url } from 'vuelidate/lib/validators'
export default {
  props: ['stepData'],
  data() {
    return {
      form: {
        files: {
          file_1: {
            id: null,
            file: null,
            file_name: null,
            showFileName: false,
          },
          file_2: {
            id: null,
            file: null,
            file_name: null,
            showFileName: false,
          },
          file_3: {
            id: null,
            file: null,
            file_name: null,
            showFileName: false,
          },
          file_4: {
            id: null,
            file: null,
            file_name: null,
            showFileName: false,
          },
          file_5: {
            id: null,
            file: null,
            file_name: null,
            showFileName: false,
          },
          file_6: {
            id: null,
            file: null,
            file_name: null,
            showFileName: false,
          },
        },
        acccepterdTheTermsOfService: true,
        project_video: null,
        documents: [],
        step: 3,
        status: 'submitted',
      },
    }
  },
  watch: {
    stepData: {
      immediate: true,
      deep: true,
      handler(newData) {
        this.handleWatchUpdate(newData)
      },
    },
  },
  validations: {
    form: {
      project_video: {
        url,
        required,
      },
    },
  },
  methods: {
    handleWatchUpdate(newData) {
      if (!newData) return

      const update = Object.keys(this.form).reduce(function (accumulator, key) {
        if (newData.hasOwnProperty(key)) accumulator[key] = newData[key]
        return accumulator
      }, {})

      Object.assign(this.form, update)
    },
    saveToDrafts() {
      this.$router.push('/applications')
    },
    onSubmitApplications() {
      this.$v.form.$touch()
      if (this.$v.form.$invalid) {
      } else {
        this.$emit('submitApplications', this.form)
      }
    },
    prev() {
      this.$emit('prevStep')
    },
    onAccepterdTheTermsOfService(event) {
      this.form.acccepterdTheTermsOfService = !event.target.checked
    },

    onFileUploadTriggerClick(fileIndex) {
      this.$refs[fileIndex].click()
    },

    onFileUpload(fileIndex) {
      this.form.files[fileIndex].file = this.$refs[fileIndex].files[0]
      this.form.files[fileIndex].file_name = this.$refs[fileIndex].files[0].name
      this.form.files[fileIndex].showFileName = true

      this.form.documents.push({
        file: this.form.files[fileIndex].file,
      })
    },

    onDeleteFileFromUpload(fileIndex) {
      this.form.files[fileIndex].file = null
      this.form.files[fileIndex].file_name = null
      this.form.files[fileIndex].showFileName = false
      this.$refs[fileIndex].value = null

      this.form.documents = this.form.documents.filter((element) => {
        return element.id != this.form.files[fileIndex].id
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.third-step {
  .step-content {
    overflow: hidden;
    position: relative;
    width: 100%;
    padding: 70px 50px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #ffffff;
    form {
      max-width: 800px;
      hr {
        margin: 60px 0px;
        transform: translateX(-50%);
        width: 1000%;
        border: none;
        height: 1px;
        background-color: rgba(97, 140, 250, 0.3);
        color: rgba(97, 140, 250, 0.3);
      }
      .form-group {
        margin-bottom: 80px;
      }

      .text {
        margin-bottom: 20px;
        max-width: 400px;
        .title {
          h2 {
            margin: 0px;
            margin-bottom: 10px;
            font-size: 16px;
            line-height: 1.22;
            color: #242424;
          }
        }
        .description {
          font-size: 14px;
          line-height: 1.7;
          color: #6e6e6e;
          margin-bottom: 10px;
        }
      }

      .checkbox {
        margin-bottom: 30px;
        display: flex;
        align-items: center;
        label {
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          padding-left: 10px;
          user-select: none;
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
            width: 26px;
            height: 26px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
        a {
          text-decoration: none;
          font-weight: 700;
          color: #618cfa;
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
      .drop-file {
        padding-bottom: 30px;
        position: relative;
        width: 100%;
        label {
          font-size: 16px;
          font-weight: 700;
        }
        .file-upload {
          display: flex;
          align-items: center;
          height: 76px;
          border-radius: 5px;
          border: solid 1px #dddddd;
          background-color: #f2f5f7;
          padding: 10px 30px;

          outline: none;
          width: 100%;
          cursor: pointer;
          margin-top: 10px;

          @media (max-width: 992px) {
            margin-left: 0%;
            margin-top: 10px;
          }
          &::placeholder {
            font-weight: 400;
            color: #dddddd;
          }
          .file-label {
            span {
              font-size: 16px;
            }
            i {
              font-size: 16px;
              border-radius: 50%;
              box-shadow: 0 5px 10px 0 #c1c1c1;
              padding: 10px;
              background-color: #ffffff;
              margin-right: 10px;
              color: #000000;
            }
          }

          .file-name {
            padding: 10px 20px;
            width: 100%;
            height: 100%;
            border-radius: 10px;
            box-shadow: 0 2px 4px 0 #00000019;
            background-color: #ffffff;
            display: flex;
            align-items: center;
            span {
              font-size: 16px;
              font-weight: 600;
              line-height: 1.5;
              color: #242424;
            }
            .icon {
              i {
                width: 26px;
                font-size: 24px;
                color: #618cfa;
                margin-right: 10px;
              }
            }
            .delete {
              margin-left: auto;
              i {
                font-size: 16px;
                border-radius: 50%;
                box-shadow: 0 5px 10px 0 #c1c1c1;
                padding: 10px;
                background-color: #618cfa;
                margin-left: 10px;
                color: #ffffff;
              }
            }
          }
        }
        input {
          display: none;
          width: 100%;
          height: 44px;
          border-radius: 5px;
          border: solid 1px #dddddd;
          background-color: #ffffff;
          padding: 10px;
          font-size: 16px;
          outline: none;
          font-weight: 700;
          margin-left: 300px;
          &::placeholder {
            font-weight: 400;
            color: #dddddd;
          }

          @media (max-width: 992px) {
            margin-left: 0%;
            margin-top: 10px;
          }
        }
      }
      .input {
        margin-bottom: 10px;
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

      .complite-changes {
        display: inline-flex;
        align-items: center;
        padding: 50px 30px;
        border-radius: 20px;
        background-color: #f5b325;
        height: 20px;
        font-size: 22px;
        line-height: 1.22;
        color: #ffffff;

        i {
          font-size: 40px;
          margin-left: 30px;
        }
      }
    }
  }
  .navigation {
    text-align: right;
    padding: 30px 0px;
    font-size: 0px;
    @media (max-width: 767px) {
      text-align: center;
    }
    .save-to-drafts {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-family: $GTWalsheimPro;
      width: 236px;
      height: 48px;
      border-radius: 5px;
      background-color: transparent;
      color: #618cfa;
      font-size: 16px;
      font-weight: 700;
      text-decoration: none;
      text-align: center;
      text-transform: uppercase;
      outline: none;
      border: solid 1px #618cfa;
      cursor: pointer;
      margin-right: 20px;

      @media (max-width: 767px) {
        width: 100%;
        max-width: 230px;
        font-size: 16px;
        font-weight: 700;
        line-height: 1.5;
      }
    }
    .prev {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-family: $GTWalsheimPro;
      width: 236px;
      height: 48px;
      border-radius: 5px;
      background-color: transparent;
      color: #618cfa;
      font-size: 16px;
      font-weight: 700;
      text-decoration: none;
      text-align: center;
      text-transform: uppercase;
      outline: none;
      border: solid 1px #618cfa;
      cursor: pointer;
      margin-right: 20px;

      @media (max-width: 767px) {
        width: 100%;
        max-width: 230px;
        font-size: 16px;
        font-weight: 700;
        line-height: 1.5;
      }
    }
    .next {
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
        width: 100%;
        max-width: 230px;
        font-size: 16px;
        font-weight: 700;
        line-height: 1.5;
      }
    }
    .submit {
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

      &:disabled {
        opacity: 0.5;
      }

      @media (max-width: 767px) {
        width: 100%;
        max-width: 230px;
        font-size: 16px;
        font-weight: 700;
        line-height: 1.5;
      }
    }
  }
}
</style>
