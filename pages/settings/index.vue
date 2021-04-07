<template>
  <div>
    <Preloader :show="preloader"></Preloader>
    <div class="settings-page">
      <div class="container">
        <div class="heading">
          <h2>Settings</h2>
        </div>
        <div class="content">
          <router-link
            class="setting"
            tag="div"
            to="/settings/account-information"
          >
            <div class="text">
              <div class="title">Account information</div>
              <div class="description">
                See your account information like your phone number and email
                address.
              </div>
            </div>
            <div class="arrow"><i class="far fa-chevron-right"></i></div>
          </router-link>
          <router-link
            class="setting"
            tag="div"
            to="/settings/change-your-password"
          >
            <div class="text">
              <div class="title">Change your password</div>
              <div class="description">
                Lorem ipsum dolor sit amet, consectetur
              </div>
            </div>
            <div class="arrow"><i class="far fa-chevron-right"></i></div>
          </router-link>
          <router-link
            class="setting"
            tag="div"
            to="/settings/deactivate-account"
          >
            <div class="text">
              <div class="title">Deactivate account</div>
              <div class="description">
                Lorem ipsum dolor sit amet, consectetur
              </div>
            </div>
            <div class="arrow"><i class="far fa-chevron-right"></i></div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Preloader from '@components/Common/Preloader'

export default {
  components: {
    Preloader,
  },
  layout: 'LayoutApplication',
  data() {
    return {
      preloader: true,
    }
  },
  created() {
    this.preloader = false
  },
}
</script>

<style lang="scss" scoped>
.settings-page {
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
    .setting {
      display: flex;
      justify-content: space-between;
      align-items: center;
      overflow: hidden;
      position: relative;
      width: 100%;
      padding: 30px 50px;
      border-radius: 15px;
      background-color: #ffffff;
      margin-bottom: 30px;
      cursor: pointer;
      @media (max-width: 767px) {
        border-radius: 0px;
        padding: 30px;
        padding-right: 50px;
      }

      .text {
        .title {
          font-size: 18px;
          font-weight: 700;
          color: #242424;
          margin-bottom: 10px;
        }

        .description {
          font-size: 14px;
          color: #6e6e6e;
        }
      }

      .arrow {
        position: absolute;
        right: 20px;

        i {
          color: #618cfa;
          font-size: 30px;
        }
      }
    }
  }
}
</style>
