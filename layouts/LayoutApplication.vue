<template>
  <div class="layout-applications">
    <aside class="sidebar" :class="{ active: isSideBarActive }">
      <div class="logo">
        <router-link to="/"
          ><img src="/images/sidebar-aplications/logo-white.svg"
        /></router-link>
      </div>
      <div
        class="close"
        :class="{ active: isSideBarActive }"
        @click="onSideBarActive"
      >
        <img src="/images/header-aplications/close-white.svg" />
      </div>
      <nav class="menu">
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
      </nav>
    </aside>
    <main>
      <NavigationMenu
        :is-nav-bar-active="isNavBarActive"
        @onSideBarActive="onSideBarActive"
      ></NavigationMenu>
      <Nuxt />
    </main>
  </div>
</template>
<script>
import NavigationMenu from '@components/Landing/NavigationMenu'

export default {
  components: {
    NavigationMenu,
  },
  data() {
    return {
      isSideBarActive: false,
      isNavBarActive: false,
    }
  },
  methods: {
    onSubmitLogout() {
      this.$store.dispatch('auth/LOGOUT').then(() => {
        this.$router.push('/')
      })
    },
    onSideBarActive() {
      this.isSideBarActive = !this.isSideBarActive
      this.isNavBarActive = this.isSideBarActive
    },
  },
}
</script>
<style lang="scss" scoped>
.layout-applications {
  display: flex;
  background-color: #f2f5f7;
  min-height: 100%;

  .sidebar {
    min-width: 286px;
    background-color: #618cfa;
    min-height: 100vh;
    padding: 30px;
    @media (max-width: 991px) {
      position: absolute;
      right: -286px;
      z-index: 1;
    }
    @media (max-width: 575px) {
      display: none;
    }

    &.active {
      right: 0px;
    }

    .logo {
      margin-bottom: 60px;
      @media (max-width: 991px) {
        display: none;
      }
    }

    .close {
      margin-bottom: 30px;
      text-align: right;
      height: 37px;
      display: none;
      align-items: center;
      justify-content: flex-end;
      @media (max-width: 991px) {
        display: flex;
      }
    }

    .menu {
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

            &.router-link-active {
              opacity: 0.8;
            }
          }
        }
      }
    }
  }

  main {
    width: 100%;
    padding: 60px;

    @media (max-width: 991px) {
      padding: 0px;
    }

    .container {
      margin: 0px;
      @media (max-width: 767px) {
        padding: 0px;
      }
    }
  }
}
</style>
