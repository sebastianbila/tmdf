<template>
  <div class="navigation-menu">
    <div class="container">
      <div class="logo">
        <router-link to="/" exact
          ><img src="/images/header-aplications/logo-white.svg"
        /></router-link>
      </div>
      <div class="navigation">
        <div
          class="hamburger"
          :class="{ active: isActive }"
          @click="onClickHamburger"
        >
          <img
            src="/images/header-aplications/hamburger-white.svg"
            alt="hamburger"
          />
        </div>
        <div class="menu" :class="{ active: isActive }">
          <div class="menu-top">
            <div class="logo">
              <router-link to="/" exact
                ><img
                  src="/images/header-aplications/logo-white.svg"
                  alt="logo"
              /></router-link>
            </div>
            <div
              class="hamburger"
              :class="{ active: isActive }"
              @click="onClickHamburger"
            >
              <img
                src="/images/header-aplications/close-white.svg"
                alt="close"
              />
            </div>
          </div>
          <div class="menu-bottom">
            <ul>
              <li>
                <router-link to="/applications" exact
                  ><i class="fal fa-file-alt"></i
                  ><span>Applications</span></router-link
                >
              </li>

              <li>
                <router-link to="/messages" exact
                  ><i class="fal fa-comment-alt-lines"></i
                  ><span>Messages</span></router-link
                >
              </li>
              <li>
                <router-link to="/profile" exact
                  ><i class="fal fa-user-circle"></i
                  ><span>Profile</span></router-link
                >
              </li>
              <li>
                <router-link to="/settings" exact
                  ><i class="fal fa-cog"></i><span>Settings</span></router-link
                >
              </li>
              <li>
                <a @click.prevent="onSubmitLogout"
                  ><i class="fal fa-sign-out-alt"></i><span>Logout</span></a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ClickOutside from 'vue-click-outside'
import { ROLE } from '@/constants'
export default {
  directives: {
    ClickOutside,
  },
  props: ['isNavBarActive'],
  data() {
    return {
      isActive: false,
      isMenuHasChildrenActive: false,
      role: ROLE,
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    },
    getUserInfo() {
      return this.$store.getters.getUserInfo
    },
  },
  watch: {
    isNavBarActive(newVaulue, oldValue) {
      this.isActive = newVaulue
    },
  },
  methods: {
    onClickOutsideSubMenuClose() {
      this.isMenuHasChildrenActive = false
    },
    onClickSubMenu() {
      this.isMenuHasChildrenActive = !this.isMenuHasChildrenActive
    },
    onClickHamburger() {
      this.isActive = !this.isActive
      this.$emit('onSideBarActive')
    },
    logout() {
      this.$store.dispatch('LOGOUT').then(() => {
        this.$router.push('/')
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.navigation-menu {
  background-color: #618cfa;

  display: none;
  @media (max-width: 991px) {
    display: block;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 30px;
    background-color: transparent;

    @media (max-width: 991px) {
      border-radius: 0px;
      background-position: 50% 50%;
      background-repeat: no-repeat;
    }
  }

  .logo {
    margin-right: 20px;
  }
  .navigation {
    white-space: nowrap;
    @media screen and (max-width: 991px) {
      min-width: auto;
    }
    .hamburger {
      i {
        font-size: 40px;
        width: 36px;
        text-align: center;
        color: #ffffff;
      }
    }
    .menu {
      flex-direction: column;
      display: none;
      width: 100%;
      top: 100%;
      position: fixed;
      top: 0px;
      left: 0px;
      bottom: 0px;
      right: 0px;
      background-color: #618cfa;

      z-index: 10;
      padding: 0px;
      box-shadow: none;
      border-radius: 0px;

      &.active {
        display: block;
      }

      @media (min-width: 576px) {
        display: none !important;
      }
      .menu-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px;

        .hamburger {
          i {
            font-size: 40px;
            width: 36px;
            text-align: center;
            color: #242424;
          }
        }
      }

      .menu-bottom {
        padding: 30px;
        ul {
          list-style: none;
          padding: 0px;
          margin: 0px;
          li {
            display: flex;
            align-items: center;
            margin-bottom: 30px;
            &:last-child {
              margin: 0px -30px;
              padding: 30px;
              border-top: 1px solid rgba(255, 255, 255, 0.3);
            }
            &:hover {
              opacity: 0.8;
            }

            i {
              min-width: 20px;
              font-size: 20px;
              text-align: center;
              margin-right: 10px;
              color: #ffffff;
              display: inline-block;
            }
            a {
              text-decoration: none;
              font-size: 16px;
              letter-spacing: 0.4px;
              color: #ffffff;
              cursor: pointer;

              &:hover,
              &:active,
              &.router-link-active {
                opacity: 0.8;
              }
            }
          }
        }
      }
    }
  }
}
</style>
