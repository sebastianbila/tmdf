<template>
  <client-only>
    <div class="navigation-menu">
      <div class="container">
        <div class="logo">
          <router-link to="/" exact
          ><img src="/images/header/logo.svg" alt="logo"
          /></router-link>
        </div>
        <div class="navigation">
          <div
            class="hamburger"
            :class="{ active: isActive }"
            @click="onClickHamburger"
          >
            <img src="/images/header/hamburger.svg" alt="hamburger" />
          </div>
          <div class="menu" :class="{ active: isActive }">
            <div class="menu-top">
              <div class="logo">
                <router-link to="/" exact
                ><img src="/images/header/logo.svg" alt="logo"
                /></router-link>
              </div>
              <div
                class="hamburger"
                :class="{ active: isActive }"
                @click="onClickHamburger"
              >
                <img src="/images/header/close.svg" alt="close" />
              </div>
            </div>
            <div class="menu-bottom">
              <ul class="header-menu">
                <li
                  v-click-outside="onClickOutsideSubMenuClose"
                  class="menu-has-children"
                >
                  <a @click.prevent="onClickSubMenu">How it works</a>
                  <ul v-show="isMenuHasChildrenActive" class="sub-menu">
                    <li>
                      <router-link to="/howitworksforinvestors" exact>
                        For investors</router-link
                      >
                    </li>
                    <li>
                      <router-link to="/howitworksforentrepreneurs" exact
                      >For entrepreneur</router-link
                      >
                    </li>
                  </ul>
                </li>
                <li>
                  <router-link to="/about" exact>About</router-link>
                </li>
                <li>
                  <router-link to="/projects" exact>Projects</router-link>
                </li>
                <template v-if="isTablet">
                  <li v-if="!isLoggedIn" class="login">
                    <router-link to="/login" exact>
                      <i class="fal fa-user-circle"></i>
                      <span>Login</span>
                    </router-link>
                  </li>
                  <li v-if="isLoggedIn" class="login">
                    <router-link
                      v-if="getUserInfo.role == Role.Entrepreneur"
                      to="/profile"
                      exact
                    >
                      <i class="fal fa-user-circle"></i>
                      <span>{{ getUserInfo.name }}</span>
                    </router-link>
                    <router-link
                      v-if="getUserInfo.role == Role.Investor"
                      to="/profile"
                      exact
                    >
                      <i class="fal fa-user-circle"></i>
                      <span>{{ getUserInfo.name }}</span>
                    </router-link>
                  </li>
                  <li v-if="!isLoggedIn" class="join">
                    <router-link to="/registration" exact> Join </router-link>
                  </li>
                </template>
              </ul>
            </div>
          </div>
        </div>
        <div v-if="!isTablet" class="autorization">
          <div class="menu">
            <ul>
              <li class="search">
                <div class="input" @click.prevent="">
                  <input type="text" placeholder="search" />
                  <i class="fal fa-search"></i>
                </div>
              </li>
              <li v-if="!isLoggedIn" class="login">
                <router-link to="/login" exact>
                  <i class="fal fa-user-circle"></i>
                  <span>Login</span>
                </router-link>
              </li>
              <li v-if="isLoggedIn" class="login">
                <router-link
                  v-if="getUserInfo.role == Role.Entrepreneur"
                  to="/profile"
                  exact
                >
                  <i class="fal fa-user-circle"></i>
                  <span>{{ getUserInfo.name }}</span>
                </router-link>
                <router-link
                  v-if="getUserInfo.role == Role.Investor"
                  to="/profile"
                  exact
                >
                  <i class="fal fa-user-circle"></i>
                  <span>{{ getUserInfo.name }}</span>
                </router-link>
              </li>
              <li v-if="!isLoggedIn" class="join">
                <router-link to="/registration" exact> Join </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </client-only>
</template>
<script>
import { ROLE } from '@/constants'
import ClickOutside from 'vue-click-outside'
export default {
  directives: {
    ClickOutside,
  },
  data() {
    return {
      isActive: false,
      isMenuHasChildrenActive: false,
      Role: ROLE,
      isTablet: false,
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
  created() {
    window.addEventListener('resize', this.onResize)
    this.onResize()
  },

  methods: {
    onResize() {
      if (window.matchMedia('(max-width: 991px)').matches) {
        this.isTablet = true
      } else {
        this.isTablet = false
      }
    },
    onClickOutsideSubMenuClose() {
      this.isMenuHasChildrenActive = false
    },
    onClickSubMenu() {
      this.isMenuHasChildrenActive = !this.isMenuHasChildrenActive
    },
    onClickHamburger() {
      this.isActive = !this.isActive
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
    margin-right: 20px;
    @media screen and (max-width: 991px) {
      min-width: auto;
    }
    .hamburger {
      display: none;

      @media screen and (max-width: 991px) {
        display: block;
      }

      i {
        font-size: 40px;
        width: 36px;
        text-align: center;
      }
    }
    .menu {
      @media screen and (max-width: 991px) {
        flex-direction: column;
        display: none;
        width: 100%;
        top: 100%;
        position: fixed;
        top: 0px;
        left: 0px;
        bottom: 0px;
        right: 0px;
        background: #fdfdfd;
        z-index: 10;
        padding: 48px 45px;
        box-shadow: none;
        border-radius: 0px;
        &.active {
          display: block;
        }
      }

      @media screen and (max-width: 767px) {
        flex-direction: column;
        display: none;
        width: 100%;
        top: 100%;
        position: fixed;
        top: 0px;
        left: 0px;
        bottom: 0px;
        right: 0px;
        background: #fdfdfd;
        z-index: 10;
        padding: 15px;
        box-shadow: none;
        border-radius: 0px;

        &.active {
          display: block;
        }
      }

      .menu-top {
        @media screen and (min-width: 991px) {
          display: none;
        }

        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        margin-bottom: 30px;

        .hamburger {
          i {
            font-size: 40px;
            width: 36px;
            text-align: center;
          }
        }
      }

      .menu-bottom {
        ul {
          list-style: none;
          padding: 0px;
          margin: 0px;
          display: flex;
          justify-content: space-between;
          align-items: center;

          @media screen and (max-width: 991px) {
            flex-direction: column;
            align-items: flex-start;
          }

          li {
            margin-right: 20px;

            @media screen and (max-width: 991px) {
              margin-right: 0px;

              i {
                font-size: 24px;
              }
            }

            &:last-child {
              margin-right: 0px;
            }

            a {
              display: block;
              font-size: 16px;
              color: #2c2c2d;
              transition: all 0.2s ease-in-out;
              text-decoration: none;
              font-weight: 600;
              text-transform: uppercase;

              &:hover,
              &:active,
              &.router-link-active {
                color: #618cfa;
              }

              @media screen and (max-width: 991px) {
                font-size: 30px;
                font-weight: 900;
                line-height: 28px;
                letter-spacing: 0.56px;
                padding: 15px;
                text-transform: uppercase;
              }
            }
          }

          .menu-has-children {
            cursor: pointer;
            position: relative;

            @media screen and (max-width: 991px) {
              padding-right: 0px;
              border-radius: 5px;

              > a {
                display: block;
                color: #242424;
                padding: 15px;

                &:hover,
                &:active {
                  color: #242424;
                }

                &:after {
                  position: static;
                  color: #242424;
                  margin-left: 10px;
                  line-height: 20px;
                }
              }
            }

            > a {
              position: relative;
              padding-right: 30px;
              position: relative;
              display: inline-block;

              &:hover,
              &:active {
                color: #618cfa;

                &:after {
                  color: #618cfa;
                }
              }

              &:after {
                display: inline-block;
                vertical-align: middle;
                transition: all 0.2s ease-in-out;
                color: #2c2c2d;
                font-size: 26px;
                line-height: 24px;
                right: 10px;
                top: 50%;
                transform: translateY(-50%);
                position: absolute;
                font-family: 'Font Awesome 5 Pro';
                content: '\f107';
                font-weight: 300;
              }
            }

            a.active:after {
              transform: translateY(-50%) rotate(-180deg);
            }
          }

          .sub-menu {
            z-index: 1;
            justify-content: space-between;
            flex-direction: column;
            padding: 25px 30px;
            border-radius: 5px;
            box-shadow: 0 5px 20px 0 #f5f5f5;
            background-color: #ffffff;
            position: absolute;
            left: -30px;
            top: calc(100% + 20px);
            list-style: none;
            box-shadow: 0 29px 21px 0 rgba(0, 0, 0, 0.07);
            align-items: flex-start;
            li {
              margin-right: 0px;
              margin-left: 0px;
              margin-bottom: 20px;

              &:last-child {
                margin-bottom: 0px;
              }

              a {
                display: block;
                font-size: 16px;
                color: #2c2c2d;
                display: block;
                &:hover,
                &:active {
                  color: #618cfa;
                }
              }

              i {
                color: #618cfa;
                display: inline-block;
                vertical-align: middle;
                font-size: 16px;
                margin-left: 5px;
              }
            }

            @media screen and (max-width: 991px) {
              padding: 0px;
              width: 100%;
              position: static;
              background-color: transparent;
              box-shadow: none;

              li {
                margin-right: 0px;
                margin-bottom: 0px;

                i {
                  font-size: 24px;
                }

                a {
                  display: block;
                  padding: 15px;
                  font-size: 30px;
                  font-weight: 900;
                  line-height: 28px;
                  letter-spacing: 0.56px;
                }
              }
            }
          }

          .login {
            a {
              display: flex;
              align-items: center;
              cursor: pointer;
              i {
                padding-right: 5px;
                font-size: 18px;
                @media screen and (max-width: 991px) {
                  display: none;
                }
              }
              span {
                padding-left: 0px;
              }
            }
          }
          .logout {
            a {
              display: flex;
              align-items: center;
              cursor: pointer;
              i {
                padding-right: 5px;
                font-size: 18px;
                @media screen and (max-width: 991px) {
                  display: none;
                }
              }

              span {
                color: #618cfa;
                padding-left: 0px;
              }
            }
          }

          .join {
            a {
              display: block;
              padding: 12px 44px;
              font-weight: 700;
              border-radius: 5px;
              background-color: #618cfa;
              color: #ffffff;
              cursor: pointer;

              @media (max-width: 991px) {
                font-weight: 900;
                padding: 15px 15px;
                border-radius: 0px;
                color: #618cfa;
                background: none;
                &:hover {
                  color: #618cfa;
                }
              }
            }
          }
        }
      }
    }
  }
  .autorization {
    .menu {
      ul {
        padding: 0px;
        margin: 0px;
        list-style: none;
        display: flex;
        align-items: center;
        li {
          margin-right: 20px;

          @media screen and (max-width: 991px) {
            margin-right: 0px;

            i {
              font-size: 24px;
            }
          }

          &:last-child {
            margin-right: 0px;
          }

          a {
            display: block;
            font-size: 16px;
            color: #2c2c2d;
            transition: all 0.2s ease-in-out;
            text-decoration: none;
            font-weight: 600;
            text-transform: uppercase;

            &:hover,
            &:active,
            &.router-link-active {
              color: #618cfa;
            }

            @media screen and (max-width: 991px) {
              font-size: 30px;
              font-weight: 900;
              line-height: 28px;
              letter-spacing: 0.56px;
              padding: 15px;
              text-transform: uppercase;
            }
          }
        }

        .menu-has-children {
          cursor: pointer;
          position: relative;

          @media screen and (max-width: 991px) {
            padding-right: 0px;
            border-radius: 5px;

            > a {
              display: block;
              color: #242424;
              padding: 15px;

              &:hover,
              &:active {
                color: #242424;
              }

              &:after {
                position: static;
                color: #242424;
                margin-left: 10px;
                line-height: 20px;
              }
            }
          }

          > a {
            position: relative;
            padding-right: 30px;
            position: relative;
            display: inline-block;

            &:hover,
            &:active {
              color: #618cfa;

              &:after {
                color: #618cfa;
              }
            }

            &:after {
              display: inline-block;
              vertical-align: middle;
              transition: all 0.2s ease-in-out;
              color: #2c2c2d;
              font-size: 26px;
              line-height: 24px;
              right: 10px;
              top: 50%;
              transform: translateY(-50%);
              position: absolute;
              font-family: 'Font Awesome 5 Pro';
              content: '\f107';
              font-weight: 300;
            }
          }

          a.active:after {
            transform: translateY(-50%) rotate(-180deg);
          }
        }

        .sub-menu {
          z-index: 1;
          justify-content: space-between;
          flex-direction: column;
          padding: 25px 30px;
          border-radius: 5px;
          box-shadow: 0 5px 20px 0 #f5f5f5;
          background-color: #ffffff;
          position: absolute;
          left: -30px;
          top: calc(100% + 20px);
          list-style: none;
          box-shadow: 0 29px 21px 0 rgba(0, 0, 0, 0.07);
          align-items: flex-start;
          li {
            margin-right: 0px;
            margin-left: 0px;
            margin-bottom: 20px;

            &:last-child {
              margin-bottom: 0px;
            }

            a {
              display: block;
              font-size: 16px;
              color: #2c2c2d;
              display: block;
              &:hover,
              &:active {
                color: #618cfa;
              }
            }

            i {
              color: #618cfa;
              display: inline-block;
              vertical-align: middle;
              font-size: 16px;
              margin-left: 5px;
            }
          }

          @media screen and (max-width: 991px) {
            padding: 0px;
            width: 100%;
            position: static;
            background-color: transparent;
            box-shadow: none;

            li {
              margin-right: 0px;
              margin-bottom: 0px;

              i {
                font-size: 24px;
              }

              a {
                display: block;
                padding: 15px;
                font-size: 30px;
                font-weight: 900;
                line-height: 28px;
                letter-spacing: 0.56px;
              }
            }
          }
        }
        .search {
          position: relative;
          i {
            top: 50%;
            transform: translateY(-50%);
            right: 10px;
            position: absolute;
            text-transform: uppercase;
            font-weight: 500;
          }
          .input {
            cursor: pointer;
            input {
              cursor: pointer;
              display: inline-block;
              width: 110px;
              height: 44px;
              border-radius: 5px;
              border: 1px solid transparent;
              background-color: transparent;
              padding: 10px;
              font-size: 16px;
              outline: none;
              font-weight: 700;
              padding-right: 32px;

              &::placeholder {
                text-transform: uppercase;
                font-weight: 500;
                color: #2c2c2d;
              }
            }
          }
        }

        .login {
          a {
            display: flex;
            align-items: center;
            cursor: pointer;
            i {
              padding-right: 5px;
              font-size: 18px;
              @media screen and (max-width: 991px) {
                display: none;
              }
            }
            span {
              padding-left: 0px;
            }
          }
        }
        .logout {
          a {
            display: flex;
            align-items: center;
            cursor: pointer;
            i {
              padding-right: 5px;
              font-size: 18px;
              @media screen and (max-width: 991px) {
                display: none;
              }
            }

            span {
              color: #618cfa;
              padding-left: 0px;
            }
          }
        }

        .join {
          a {
            display: block;
            padding: 12px 44px;
            font-weight: 700;
            border-radius: 5px;
            background-color: #618cfa;
            color: #ffffff;
            cursor: pointer;
            &:hover {
              color: #ffffff;
            }
            @media (max-width: 991px) {
              font-weight: 900;
              padding: 15px 15px;
              border-radius: 0px;
              color: #ffba27;
              background: none;
            }
          }
        }
      }
    }
  }
}
</style>
