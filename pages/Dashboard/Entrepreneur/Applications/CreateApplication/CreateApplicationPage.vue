<template>
  <div>
    <Preloader :show="preloader"></Preloader>
    <div class="edit-application-page">
      <div class="container">
        <div class="heading">
          <h2>Applications</h2>
          <div
            class="numbers"
            :class="[
              { 'first-step': step == 1 },
              { 'second-step': step == 2 },
              { 'third-step': step == 3 },
            ]"
          >
            <div class="number">1</div>
            <div class="number">2</div>
            <div class="number">3</div>
          </div>
        </div>
        <div class="content">
          <div class="steps">
            <FirstStepPage
              v-if="step == 1"
              :step-data="formSteps[1]"
              @nextStep="onNextStep"
            />
            <SecondStepPage
              v-if="step == 2"
              :step-data="formSteps[2]"
              @prevStep="onPrevStep"
              @nextStep="onNextStep"
            />
            <ThirdStepPage
              v-if="step == 3"
              :step-data="formSteps[3]"
              @prevStep="onPrevStep"
              @submitApplications="onSubmitApplications"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Preloader from '@components/Common/Preloader'
import { serialize } from 'object-to-formdata'
import Treeselect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
import { required, url } from 'vuelidate/lib/validators'

import FirstStepPage from './FirstStepPage'
import SecondStepPage from './SecondStepPage'
import ThirdStepPage from './ThirdStepPage'

export default {
  components: {
    Treeselect,
    Preloader,
    FirstStepPage,
    SecondStepPage,
    ThirdStepPage,
  },
  layout: 'LayoutApplication',
  props: ['scroll'],
  data() {
    return {
      applicationId: null,
      preloader: true,
      step: 1,
      errors: [],
      formSteps: {
        1: null,
        2: null,
        3: null,
      },
    }
  },
  validations: {
    formSteps: {
      3: {
        project_video: {
          url,
          required,
        },
      },
    },
  },
  created() {
    this.getApplication()
  },
  destroyed() {
    sessionStorage.removeItem('applicationId')
    sessionStorage.removeItem('applicationStep')
  },
  methods: {
    onNextStep(form) {
      this.formSteps[this.step] = form

      if (sessionStorage.getItem('applicationId')) {
        this.applicationId = sessionStorage.getItem('applicationId')
      }
      if (sessionStorage.getItem('applicationStep')) {
        this.step = sessionStorage.getItem('applicationStep')
      }

      this.formSteps[this.step] = form

      const dispatchType = this.applicationId
        ? 'UPDATEAPPLICATION'
        : 'CREATEAPPLICATION'

      const formData = this.applicationId
        ? {
            formData: serialize(this.formSteps[this.step], { indices: true }),
            id: this.applicationId,
          }
        : serialize(this.formSteps[this.step], { indices: true })

      this.$store
        .dispatch(dispatchType, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then((response) => {
          this.step++
          sessionStorage.setItem('applicationId', response.data.id)
          sessionStorage.setItem('applicationStep', this.step)
        })
        .catch((error) => {
          if (error.response) this.errors = error.response.data
        })
    },

    onPrevStep() {
      this.step--
      sessionStorage.setItem('applicationStep', this.step)
    },

    getApplication() {
      if (this.$route.params.id) {
        this.applicationId = this.$route.params.id
      }
      if (sessionStorage.getItem('applicationId')) {
        this.applicationId = sessionStorage.getItem('applicationId')
      }
      if (sessionStorage.getItem('applicationStep')) {
        this.step = sessionStorage.getItem('applicationStep')
      }

      if (this.applicationId) {
        this.$store
          .dispatch('GETAPPLICATION', this.applicationId)
          .then((response) => {
            this.formSteps[1] = response.data
            this.formSteps[2] = response.data
            this.formSteps[3] = response.data

            response.data.documents.forEach((file, index) => {
              index++
              this.formSteps[3].files['file_' + index].id = file.id
              this.formSteps[3].files['file_' + index].file_name =
                file.file_name
              this.formSteps[3].files['file_' + index].showFileName = true
            })
            this.preloader = false
          })
          .catch((error) => {
            this.errors = error.response.data
          })
      }
      this.preloader = false
    },

    onSubmitApplications(form) {
      Object.assign(this.formSteps, form)
      const wholeForm = Object.assign(
        this.formSteps[1],
        this.formSteps[2],
        this.formSteps[3]
      )
      console.log(this.formSteps[3])
      console.log(wholeForm)
      const formData = serialize(wholeForm, { indices: true })
      const id = this.applicationId
      this.$store
        .dispatch(
          'UPDATEAPPLICATION',
          { formData, id },
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        .then((response) => {
          sessionStorage.removeItem('applicationStep')
          sessionStorage.removeItem('applicationId')
          this.$router.push('/applications')
        })
        .catch((error) => {
          this.errors = error.response.data
        })
    },

    /* __________ THIRD STEP END __________ */
  },
}
</script>

<style lang="scss" scoped>
.edit-application-page {
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

    .numbers {
      display: flex;
      position: relative;

      &::before {
        content: '';
        width: 50%;
        left: 0px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        border: 1px dashed #dddddd;
      }

      &::after {
        content: '';
        width: 50%;
        right: 0px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        border: 1px dashed #dddddd;
      }

      .number {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f2f5f7;
        margin-right: 60px;
        z-index: 1;
        border: 2px solid #618cfa;
        color: #618cfa;
        font-size: 22px;
        @media (max-width: 991px) {
          margin-right: 30px;
          font-size: 20px;
        }
        @media (max-width: 576px) {
          margin-right: 10px;
          width: 30px;
          height: 30px;
          font-size: 14px;
        }

        &:last-child {
          margin-right: 0px;
        }
      }
    }

    .numbers {
      &.first-step {
        .number {
          &:nth-child(2) {
            border: 2px solid #dddddd;
            color: #dddddd;
          }

          &:nth-child(3) {
            border: 2px solid #dddddd;
            color: #dddddd;
          }
        }
      }

      &.second-step {
        &::before {
          border-color: #618cfa;
        }

        .number {
          &:nth-child(1) {
            border: solid 2px #618cfa;
            background-color: #618cfa;
            color: #ffffff;
          }

          &:nth-child(3) {
            border: 2px solid #dddddd;
            color: #dddddd;
          }
        }
      }

      &.third-step {
        &::before {
          border-color: #618cfa;
        }

        &::after {
          border-color: #618cfa;
        }

        .number {
          &:nth-child(1) {
            border: solid 2px #618cfa;
            background-color: #618cfa;
            color: #ffffff;
          }

          &:nth-child(2) {
            border: solid 2px #618cfa;
            background-color: #618cfa;
            color: #ffffff;
          }
        }
      }
    }
  }

  .content {
    overflow: hidden;
    position: relative;
    width: 100%;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 767px) {
      border-radius: 0px;
      padding: 30px;
    }
  }
}
</style>
