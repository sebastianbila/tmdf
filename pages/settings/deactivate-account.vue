<template>
  <div>
    <Preloader :show="preloader"></Preloader>
    <div class="account-information-page">
      <div class="container">
        <div class="heading">
          <h2>Settings</h2>
          <router-link class="back" to="/settings">Back</router-link>
        </div>
        <div class="content">
          <div class="title">
            <h2>Deactivate account</h2>
          </div>
          <div class="text">
            <div class="title">This will deactivate your accaunt</div>
            <div class="description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in.
              </p>
            </div>
          </div>
        </div>
        <div class="navivgation">
          <button type="button" class="submit" @click="showConfirmModal">
            Deactivate
          </button>
        </div>
      </div>
    </div>
    <ConfirmModal
      :is-show-modal-confirm="isShowModalConfirm"
      width="400"
      title="Confirm Deactivetion"
    >
      <div class="modal-confirm">
        <div class="nav">
          <button
            type="button"
            class="btn-transparent"
            @click="isCloseConfirmModa"
          >
            Cancel
          </button>
          <button type="button" class="btn-blue" @click="onDeactivateAccount">
            Ok
          </button>
        </div>
      </div>
    </ConfirmModal>
  </div>
</template>
<script>
import ConfirmModal from '@components/Common/ConfirmModal'
import Preloader from '@components/Common/Preloader'
export default {
  components: {
    Preloader,
    ConfirmModal,
  },
  layout: 'LayoutApplication',
  data() {
    return {
      preloader: true,
      isShowModalConfirm: false,
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
      errors: [],
    }
  },
  created() {
    this.preloader = false
  },
  methods: {
    showConfirmModal() {
      this.isShowModalConfirm = true
    },

    isCloseConfirmModa() {
      this.isShowModalConfirm = false
    },

    onDeactivateAccount(id) {
      this.$store
        .dispatch('DEACTIVATEACCOUNT', id)
        .then((response) => {
          if (response.status == 200) {
            localStorage.removeItem('token')
            this.$router.push('/')
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
.account-information-page {
  display: flex;
  background-color: #f2f5f7;
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
      h2 {
        margin: 0px;
        margin-bottom: 30px;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.11;
        color: #242424;
      }
    }

    .text {
      .title {
        font-size: 16px;
        font-weight: 700;
        line-height: 1.25;
        color: #242424;
      }
      .description {
        font-size: 14px;
        font-style: normal;
        line-height: 1.57;
        color: #6e6e6e;
      }
    }
  }
  .navivgation {
    text-align: right;
    padding: 30px 0px;
    font-size: 0px;
    @media (max-width: 767px) {
      text-align: center;
    }

    .submit {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-family: $GTWalsheimPro;
      width: 236px;
      height: 48px;
      border-radius: 5px;
      background-color: #fa7261;
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
  }
}
.modal-confirm {
  padding: 30px;
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
</style>
