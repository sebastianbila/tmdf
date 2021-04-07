<template>
  <div class="first-step">
    <div class="step-content">
      <form>
        <div class="company">
          <div class="title">
            <h2>Company name</h2>
          </div>
          <div class="input">
            <div class="row">
              <div class="col-md-3">
                <label for="company-name">Company Name</label>
              </div>
              <div class="col-md-9">
                <input
                  id="company-name"
                  v-model.trim="form.company_name"
                  type="text"
                  placeholder="Company Name"
                  :class="{
                    'is-valid': $v.form.company_name.$error,
                  }"
                />
                <div v-if="$v.form.company_name.$error" class="is-valid-text">
                  <span v-if="!$v.form.company_name.required"
                    >Company Name is required</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="input">
            <div class="row">
              <div class="col-md-3">
                <label for="company-site">Company Site</label>
              </div>
              <div class="col-md-9">
                <input
                  id="company-site"
                  v-model.trim="form.company_site"
                  type="text"
                  placeholder="https://"
                  :class="{
                    'is-valid': $v.form.company_site.$error,
                  }"
                />
                <div v-if="$v.form.company_site.$error" class="is-valid-text">
                  <span v-if="!$v.form.company_site.required"
                    >Company Site is required</span
                  >
                  <span v-if="!$v.form.company_site.url"
                    >Company Site is Url</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="input">
            <div class="row">
              <div class="col-md-3">
                <label for="company_location">Location</label>
              </div>
              <div class="col-md-9">
                <input
                  id="company_location"
                  v-model.trim="form.company_location"
                  type="text"
                  placeholder="Add Location"
                  :class="{
                    'is-valid': $v.form.company_location.$error,
                  }"
                />
                <div
                  v-if="$v.form.company_location.$error"
                  class="is-valid-text"
                >
                  <span v-if="!$v.form.company_location.required"
                    >Location is required</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="select">
            <div class="row">
              <div class="col-md-3">
                <label for="">Employees</label>
              </div>
              <div class="col-md-9">
                <div class="vue-select">
                  <treeselect
                    v-model="form.company_employees"
                    :clearable="false"
                    :options="form.companyEmployeesOptions"
                    placeholder="Select Employees"
                    :class="{
                      'is-valid': $v.form.company_employees.$error,
                    }"
                  />
                </div>
                <div
                  v-if="$v.form.company_employees.$error"
                  class="is-valid-text"
                >
                  <span v-if="!$v.form.company_employees.required"
                    >Employees is required</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="input">
            <div class="row">
              <div class="col-md-3">
                <label for="company_markets">Markets</label>
              </div>
              <div class="col-md-9">
                <input
                  id="company_markets"
                  v-model.trim="form.company_markets"
                  type="text"
                  placeholder="Add Markets"
                  :class="{
                    'is-valid': $v.form.company_markets.$error,
                  }"
                />
                <div
                  v-if="$v.form.company_markets.$error"
                  class="is-valid-text"
                >
                  <span v-if="!$v.form.company_markets.required"
                    >Markets is required</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="textarea">
            <div class="row">
              <div class="col-md-3">
                <label for="high-concept-pitch">High-Concept Pitch</label>
              </div>
              <div class="col-md-9">
                <textarea
                  id="high-concept-pitch"
                  v-model.trim="form.company_concept"
                  type="text"
                  placeholder="High-Concept Pitch"
                  :class="{
                    'is-valid': $v.form.company_concept.$error,
                  }"
                ></textarea>
                <div
                  v-if="$v.form.company_concept.$error"
                  class="is-valid-text"
                >
                  <span v-if="!$v.form.company_concept.required"
                    >Concept is required</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="textarea">
            <div class="row">
              <div class="col-md-3">
                <label for="company_product">Product</label>
              </div>
              <div class="col-md-9">
                <textarea
                  id="company_product"
                  v-model.trim="form.company_product"
                  type="text"
                  placeholder="Product"
                  :class="{
                    'is-valid': $v.form.company_product.$error,
                  }"
                ></textarea>
                <div
                  v-if="$v.form.company_product.$error"
                  class="is-valid-text"
                >
                  <span v-if="!$v.form.company_product.required"
                    >Product is required</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="project">
          <div class="form-group">
            <div class="text">
              <div class="title">
                <h2>Project title</h2>
              </div>
              <div class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </div>
            </div>
            <div class="input">
              <div class="row">
                <div class="col-md-3">
                  <label for="project-title">Title</label>
                </div>
                <div class="col-md-9">
                  <input
                    id="project-title"
                    v-model.trim="form.project_title"
                    type="text"
                    placeholder="Title"
                    :class="{
                      'is-valid': $v.form.project_title.$error,
                    }"
                  />
                  <div
                    v-if="$v.form.project_title.$error"
                    class="is-valid-text"
                  >
                    <span v-if="!$v.form.project_title.required"
                      >Title is required</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="input">
              <div class="row">
                <div class="col-md-3">
                  <label for="project-sub-title">Subtitle (optional)</label>
                </div>
                <div class="col-md-9">
                  <input
                    id="project-sub-title"
                    v-model.trim="form.project_subtitle"
                    type="text"
                    placeholder="Subtitle"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="text">
              <div class="title">
                <h2>Project category</h2>
              </div>
              <div class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </div>
            </div>
            <div class="select">
              <div class="row">
                <div class="col-md-3">
                  <label for="">Industry</label>
                </div>
                <div class="col-md-9">
                  <div class="vue-select">
                    <treeselect
                      v-model="form.project_category"
                      :clearable="false"
                      :options="form.projectCategoryOptions"
                      placeholder="Select Industry"
                      :class="{
                        'is-valid': $v.form.project_category.$error,
                      }"
                    />
                  </div>
                  <div
                    v-if="$v.form.project_category.$error"
                    class="is-valid-text"
                  >
                    <span v-if="!$v.form.project_category.required"
                      >Industry is required</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="select">
              <div class="row">
                <div class="col-md-3">
                  <label for="">SubIndustry (optional)</label>
                </div>
                <div class="col-md-9">
                  <div class="vue-select">
                    <treeselect
                      v-model="form.project_subcategory"
                      :clearable="false"
                      :options="form.projectSubcategoryOptions"
                      placeholder="Select SubIndustry"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="text">
              <div class="title">
                <h2>Project description</h2>
              </div>
              <div class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </div>
            </div>
            <div class="textarea">
              <div class="row">
                <div class="col-md-3">
                  <label for="project-description">Description</label>
                </div>
                <div class="col-md-9">
                  <textarea
                    id="project-description"
                    v-model.trim="form.project_description"
                    type="text"
                    placeholder="Write about your project like you’re explaining it to a friend…"
                    :class="{
                      'is-valid': $v.form.project_description.$error,
                    }"
                  ></textarea>
                  <div
                    v-if="$v.form.project_description.$error"
                    class="is-valid-text"
                  >
                    <span v-if="!$v.form.project_description.required"
                      >Description is required</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="input">
              <div class="row">
                <div class="col-md-3">
                  <label for="project-price">Project Price</label>
                </div>
                <div class="col-md-9">
                  <input
                    id="project-price"
                    v-model="form.project_price"
                    type="text"
                    placeholder="Project Price"
                    :class="{
                      'is-valid': $v.form.project_price.$error,
                    }"
                  />
                  <div
                    v-if="$v.form.project_price.$error"
                    class="is-valid-text"
                  >
                    <span v-if="!$v.form.project_price.required"
                      >Project Price is required</span
                    >
                    <span v-if="!$v.form.project_price.numeric"
                      >Project price must be a number</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="navigation">
      <button type="button" class="next" @click="next">Next</button>
    </div>
  </div>
</template>
<script>
import Treeselect from '@riophae/vue-treeselect'
import {
  required,
  email,
  minLength,
  maxLengt,
  numeric,
  url,
} from 'vuelidate/lib/validators'
export default {
  components: {
    Treeselect,
  },
  props: ['stepData'],
  data() {
    return {
      step: 1,
      errors: null,
      form: {
        companyEmployeesOptions: [
          {
            id: '1',
            label: 'a',
          },
          {
            id: '2',
            label: 'b',
          },
          {
            id: '3',
            label: 'c',
          },
        ],
        projectCategoryOptions: [
          {
            id: 'a',
            label: 'a',
          },
          {
            id: 'b',
            label: 'b',
          },
          {
            id: 'c',
            label: 'c',
          },
        ],
        projectSubcategoryOptions: [
          {
            id: 'a',
            label: 'a',
          },
          {
            id: 'b',
            label: 'b',
          },
          {
            id: 'c',
            label: 'c',
          },
        ],
        company_name: null,
        company_site: null,
        company_location: null,
        company_employees: null,
        company_markets: null,
        company_concept: null,
        company_product: null,
        project_title: null,
        project_subtitle: null,
        project_category: null,
        project_subcategory: null,
        project_description: null,
        project_price: this.$store.getters.projectPrice,
        step: 1,
        status: 'created',
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
      company_name: {
        required,
      },
      company_site: {
        url,
        required,
      },
      company_location: {
        required,
      },
      company_employees: {
        required,
      },
      company_markets: {
        required,
      },
      company_concept: {
        required,
      },
      company_product: {
        required,
      },
      project_category: {
        required,
      },
      project_title: {
        required,
      },
      project_description: {
        required,
      },
      project_price: {
        numeric,
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
    next() {
      this.$v.form.$touch()
      if (this.$v.form.$invalid) {
      } else {
        this.$emit('nextStep', this.form)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.first-step {
  @media (max-width: 767px) {
    border-radius: 0px;
    padding: 30px;
  }
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
      .title {
        max-width: 400px;
        margin-bottom: 60px;
        h2 {
          margin: 0px;
          font-size: 18px;
          line-height: 1.22;
        }
      }

      .text {
        margin-bottom: 30px;
        max-width: 400px;
        .title {
          h2 {
            margin: 0px;
            margin-bottom: 10px;
            font-size: 18px;
            line-height: 1.22;
          }
        }
        .description {
          font-size: 15px;
          line-height: 20px;
          color: #6e6e6e;
          line-height: 1.7;
        }
      }
      .input {
        margin-bottom: 30px;
        .row {
          @media (max-width: 992px) {
            flex-direction: column;
            align-items: flex-start;
          }
        }
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
        margin-bottom: 30px;
        .row {
          @media (max-width: 992px) {
            flex-direction: column;
            align-items: flex-start;
          }
        }
        label {
          padding-top: 20px;
          font-size: 16px;
        }
        @media (max-width: 992px) {
          margin-left: 0%;
          margin-top: 10px;
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
