<template>
  <div>
    <Preloader :show="preloader"></Preloader>
    <div class="applications-page">
      <div v-if="listApplications.length <= 0" class="submit-applications">
        <div class="container">
          <div class="heading">
            <h2>Applications</h2>
          </div>
          <div class="content">
            <div class="submit-application">
              <h3>
                You don't have any Applications. Want to start and add an
                Applications.
              </h3>
              <div class="submit">
                <router-link to="/application/calculator" exact
                  >Submit the application</router-link
                >
              </div>
              <div class="get-more-info">
                <a @click.prevent="openModalGetMoreInfo">Get More Info</a>
              </div>
            </div>
          </div>
        </div>
        <Modal
          :is-show-modal="isShowModalGetMoreInfo"
          width="1200"
          @isCloseModal="isCloseModalGetMoreInfo"
        >
          <div class="modal-get-more-info">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-5">
                  <div class="info">
                    <div class="title"><h3>Lorem ipsum dolor sit amet</h3></div>
                    <div class="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                    <div class="button d-none d-md-block">
                      <a @click.prevent="isCloseModalGetMoreInfo">Got it</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-7">
                  <div class="directions">
                    <div class="direction">
                      <div class="image">
                        <img
                          src="/static/images/submit-applications-page/bag.svg"
                          alt="bag"
                        />
                      </div>
                      <div class="text">
                        <div class="title"><h2>Investors</h2></div>
                        <div class="description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor
                        </div>
                      </div>
                    </div>
                    <div class="direction">
                      <div class="image">
                        <img
                          src="/static/images/submit-applications-page/ligiht.svg"
                          alt="ligiht"
                        />
                      </div>

                      <div class="text">
                        <div class="title"><h2>Investors</h2></div>
                        <div class="description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor
                        </div>
                      </div>
                    </div>
                    <div class="direction mb-0">
                      <div class="image">
                        <img
                          src="/static/images/submit-applications-page/user.svg"
                          alt="user"
                        />
                      </div>
                      <div class="text">
                        <div class="title"><h2>Investors</h2></div>
                        <div class="description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="button d-block d-md-none">
                    <a @click.prevent="isCloseModalGetMoreInfo">Got it</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
      <div v-if="listApplications.length > 0" class="list-applications">
        <div class="container">
          <div class="heading">
            <h2>Applications</h2>
          </div>
          <div class="content">
            <div class="list-applications-nav">
              <div class="tabs">
                <div
                  class="tab"
                  :class="{
                    active: isActiveTab('drafts'),
                    'not-empty': applicationsDraftCount > 0,
                  }"
                  @click.prevent="setActiveTab('drafts')"
                >
                  Drafts({{ applicationsDraftCount }})
                </div>
                <div
                  class="tab"
                  :class="{
                    active: isActiveTab('published'),
                    'not-empty': applicationsPublishedCount > 0,
                  }"
                  @click.prevent="setActiveTab('published')"
                >
                  Published ({{ applicationsPublishedCount }})
                </div>
                <div
                  class="tab"
                  :class="{
                    active: isActiveTab('approved'),
                    'not-empty': applicationsApprovedCount > 0,
                  }"
                  @click.prevent="setActiveTab('approved')"
                >
                  Approved ({{ applicationsApprovedCount }})
                </div>
              </div>
              <button
                type="button"
                class="btn-blue"
                @click="onAddNewApplication"
              >
                Add New Application+
              </button>
            </div>
            <div class="applications">
              <div v-show="isActiveTab('published')" class="published">
                <div
                  v-for="application in applicationsPublished"
                  :key="application.id"
                  class="application"
                >
                  <div class="info">
                    <div
                      class="thumbnauil"
                      @click="onEditApplication(application.id)"
                    >
                      <div class="icon"><i class="fal fa-camera-alt"></i></div>
                    </div>
                    <div class="text">
                      <div
                        class="title"
                        @click="onEditApplication(application.id)"
                      >
                        <h2>{{ application.project_title }}</h2>
                      </div>
                      <div class="description">
                        <p>{{ application.project_description }}</p>
                      </div>
                      <div class="author">
                        <span>By</span><b>{{ form.user.name }}</b>
                      </div>
                    </div>
                    <div class="nav">
                      <div
                        class="edit"
                        @click="onEditApplication(application.id)"
                      >
                        <i class="fal fa-pencil"></i>
                      </div>
                      <div
                        class="delete"
                        @click="onDeleteApplication(application.id)"
                      >
                        <i class="fal fa-trash-alt"></i>
                      </div>
                    </div>
                  </div>
                  <div class="progress-bar">
                    <div class="submited">
                      <i class="fad fa-check-circle"></i>
                      <span class="name">Submited</span>
                    </div>
                    <div class="being-reviewed">
                      <i class="fad fa-check-circle"></i>
                      <span class="name">Being Reviewed</span>
                    </div>
                    <div class="approved">
                      <i class="fad fa-check-circle"></i>
                      <span class="name">Approved</span>
                    </div>
                  </div>
                </div>
              </div>
              <div v-show="isActiveTab('drafts')" class="drafts">
                <div
                  v-for="application in applicationsDraft"
                  :key="application.id"
                  class="application"
                >
                  <div class="info">
                    <div class="thumbnauil">
                      <div class="icon"><i class="fal fa-camera-alt"></i></div>
                    </div>
                    <div class="text">
                      <div class="title">
                        <h2>{{ application.project_title }}</h2>
                      </div>
                      <div class="description">
                        <p>{{ application.project_description }}</p>
                      </div>
                      <div class="author">
                        <span>By</span><b>{{ form.user.name }}</b>
                      </div>
                    </div>
                    <div class="nav">
                      <div
                        class="edit"
                        @click="onEditApplication(application.id)"
                      >
                        <i class="fal fa-pencil"></i>
                      </div>
                      <div
                        class="delete"
                        @click="onDeleteApplication(application.id)"
                      >
                        <i class="fal fa-trash-alt"></i>
                      </div>
                    </div>
                  </div>
                  <div class="progress-bar">
                    <div class="submited">
                      <i class="fas fa-circle"></i>
                      <span class="name">Submited</span>
                    </div>
                    <div class="being-reviewed">
                      <i class="fas fa-circle"></i>
                      <span class="name">Being Reviewed</span>
                    </div>
                    <div class="approved">
                      <i class="fas fa-circle"></i>
                      <span class="name">Approved</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Preloader from '@components/Common/Preloader'
import Modal from '@components/Common/Modal'
export default {
  components: {
    Modal,
    Preloader,
  },
  layout: 'LayoutApplication',
  data() {
    return {
      preloader: true,
      listApplications: [],
      isShowModalGetMoreInfo: false,
      activeTab: 'drafts',
      form: {
        user: {
          avatar: null,
          media: null,
          name: null,
          email: null,
          completedOn: null,
          type: null,
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
  computed: {
    applicationsDraftCount() {
      let count = 0
      console.log(this.listApplications)
      count = this.listApplications.filter((aplication) => {
        return aplication.status == 'created'
      })
      return count.length
    },
    applicationsDraft() {
      return this.listApplications.filter((aplication) => {
        return aplication.status == 'created'
      })
    },
    applicationsPublishedCount() {
      let count = 0
      count = this.listApplications.filter((aplication) => {
        return aplication.status == 'submitted'
      })
      return count.length
    },
    applicationsPublished() {
      return this.listApplications.filter((aplication) => {
        return aplication.status == 'submitted'
      })
    },
    applicationsApprovedCount() {
      let count = 0
      count = this.listApplications.filter((aplication) => {
        return aplication.status == 'approved'
      })
      return count.length
    },
    applicationsApproved() {
      return this.listApplications.filter((aplication) => {
        return aplication.status == 'approved'
      })
    },
  },
  created() {
    this.getListApplications()
    this.getProfile()
  },
  methods: {
    onAddNewApplication() {
      sessionStorage.removeItem('applicationId')
      sessionStorage.removeItem('applicationStep')
      this.$router.push('/application/calculator')
    },
    onEditApplication(id) {
      sessionStorage.removeItem('applicationId')
      sessionStorage.removeItem('applicationStep')
      this.$router.push({ name: 'edit-application', params: { id } })
    },
    onDeleteApplication(id) {
      this.deleteApplication(id)
    },
    openModalGetMoreInfo() {
      this.isShowModalGetMoreInfo = true
    },
    isCloseModalGetMoreInfo() {
      this.isShowModalGetMoreInfo = false
    },
    getListApplications() {
      this.$store
        .dispatch('GETLISTAPPLICATIONS')
        .then((response) => {
          this.listApplications = response.data
          this.preloader = false
        })
        .catch((error) => {
          this.errors = error.response.data
        })
    },
    deleteApplication(id) {
      this.$store
        .dispatch('DELETEAPPLICATION', id)
        .then((response) => {
          this.getListApplications()
        })
        .catch((error) => {
          this.errors = error.response.data
        })
    },
    getProfile() {
      this.$store
        .dispatch('GETROFILE')
        .then((response) => {
          Object.assign(this.form.user, response.data)
        })
        .catch((error) => {
          this.errors = error.response.data
        })
    },
    isActiveTab(tab) {
      return this.activeTab === tab
    },
    setActiveTab(tab) {
      if (tab == 'drafts' && this.applicationsDraftCount > 0) {
        this.activeTab = tab
      } else if (tab == 'published' && this.applicationsPublishedCount > 0) {
        this.activeTab = tab
      } else if (tab == 'approved' && this.applicationsApprovedCount > 0) {
        this.activeTab = tab
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.applications-page {
  .submit-applications {
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
          width: 100%;
          left: 0px;
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
    }
    .content {
      .submit-application {
        background-image: url('/static/images/applications-page/bg-applications-left.svg'),
          url('/static/images/applications-page/bg-applications-right.svg');
        background-size: contain, contain;
        background-position: 0% 100%, 100% 100%;
        background-repeat: no-repeat;
        background-color: #ffffff;
        padding: 70px 50px;
        border-radius: 15px;
        color: #ffffff;

        @media (max-width: 992px) {
          background-image: url('/static/images/applications-page/bg-applications-left-mobile.svg'),
            url('/static/images/applications-page/bg-applications-right-mobile.svg');
          background-size: contain, contain;
          background-position: 0% 100%, 100% 100%;
        }

        @media (max-width: 767px) {
          border-radius: 0px;
          padding: 30px;
          height: calc(100vh - 97px);
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          background-size: 37px 260px, 37px 260px;
          background-position: 0% 50%, 100% 50%;
        }
        h3 {
          font-size: 18px;
          line-height: 1.5;
          text-align: center;
          color: #242424;
          font-weight: 500;
          max-width: 65%;
          margin: 0px auto;
          margin-bottom: 20px;
        }

        .submit {
          text-align: center;
          margin-bottom: 15px;
          @media (max-width: 767px) {
            text-align: center;
          }
          a {
            padding: 10px;
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
        }
        .get-more-info {
          text-align: center;
          a {
            text-decoration: none;
            font-size: 16px;
            font-weight: 700;
            line-height: 24px;
            color: #618cfa;
            text-transform: uppercase;
            cursor: pointer;
          }
        }
      }
    }
    .modal-get-more-info {
      background-repeat: no-repeat;
      background-position: 50% 100%;
      position: relative;

      .container-fluid {
        padding: 50px;
        @media (max-width: 767px) {
          padding: 50px 30px;
        }
      }

      .row {
        align-items: center;
      }
      .button {
        margin-bottom: 15px;
        @media (max-width: 767px) {
          text-align: center;
        }
        a {
          padding: 10px;
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
      }
      .info {
        @media (max-width: 768px) {
          margin-bottom: 30px;
        }
        .title {
          h3 {
            margin: 0px;
            margin-bottom: 12px;
            font-size: 18px;
            font-weight: 700;
            line-height: 20px;
            color: #242424;
          }
        }
        .description {
          font-size: 16px;
          line-height: 1.5;
          color: #6e6e6e;
          margin-bottom: 30px;
        }
      }

      .directions {
        padding: 30px;
        border-radius: 5px;
        background-color: #f2f5f7;

        @media (max-width: 576px) {
          padding: 15px;
        }
        @media (max-width: 991px) {
          margin-bottom: 30px;
        }
        .direction {
          display: flex;
          align-items: center;
          margin-bottom: 30px;
          @media (max-width: 768px) {
            justify-content: center !important;
          }
          @media (max-width: 360px) {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          &:nth-child(1) {
            .image {
              position: relative;
              &::after {
                width: 42px;
                height: 58px;
                content: '';
                background-image: url('/static/images/submit-applications-page/arrow-right.svg');
                background-size: contain;
                background-repeat: no-repeat;
                position: absolute;
                bottom: -40px;
                right: -20px;

                @media (max-width: 1200px) {
                  display: none;
                }
              }
            }
          }
          &:nth-child(2) {
            .image {
              position: relative;
              &::after {
                width: 54px;
                height: 58px;
                content: '';
                background-image: url('/static/images/submit-applications-page/arrow-left.svg');
                background-size: contain;
                background-repeat: no-repeat;
                position: absolute;
                bottom: -46px;
                left: -30px;
                @media (max-width: 1200px) {
                  display: none;
                }
              }
            }
          }
          &:nth-child(2) {
            justify-content: flex-end;
            @media (max-width: 768px) {
              justify-content: flex-start;
            }
          }
        }

        .image {
          min-width: 114px;
          margin-right: 20px;
          @media (max-width: 360px) {
            margin-right: 0px;
            margin-bottom: 15px;
          }
          img {
            box-shadow: 0 2px 22px 0 rgba(32, 49, 94, 0.13);
            border-radius: 50%;
          }
        }
        .text {
          max-width: 264px;
          .title {
            h2 {
              margin: 0px;
              font-size: 22px;
              font-weight: 700;
              line-height: 1.22;
              color: #232323;
              @media (max-width: 576px) {
                font-size: 16px;
              }
            }
          }
          .description {
            font-size: 14px;
            line-height: 1.43;
            color: #6e6e6e;
            line-height: 1.7;
            @media (max-width: 576px) {
              font-size: 13px;
            }
          }
        }
      }
    }
  }
  .list-applications {
    .heading {
      font-size: 22px;
      padding: 30px 0px;
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
    .list-applications-nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 30px;
      @media (max-width: 767px) {
        flex-direction: column;
      }
      .tabs {
        display: flex;
        @media (max-width: 767px) {
          margin-bottom: 30px;
        }
        @media (max-width: 479px) {
          width: 100%;
          flex-direction: column;
          align-items: center;
        }
        .tab {
          text-decoration: none;
          font-size: 18px;
          font-weight: 500;
          line-height: 20px;
          color: #9fa1a2;
          margin-right: 15px;
          cursor: pointer;
          @media (max-width: 479px) {
            margin-bottom: 30px;
            &:last-child {
              margin-bottom: 0px;
            }
          }
          &.not-empty {
            color: #110d0d;
          }
          &:last-child {
            margin-right: 0px;
          }
          &.active {
            color: #618cfa;
            text-shadow: 0 0 0.4px #618cfa, 0 0 0.4px #618cfa, 0 0 0.4px #618cfa;
          }
        }
      }
      button {
        font-family: $GTWalsheimPro;
        text-transform: capitalize;
      }
    }
    .content {
      @media (max-width: 767px) {
        border-radius: 0px;
        padding: 0px;
        padding-bottom: 30px;
      }
      .applications {
        .published {
          .application {
            margin-bottom: 30px;
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
            .info {
              display: flex;
              align-items: center;
              margin-bottom: 30px;
              @media (max-width: 767px) {
                flex-direction: column;
              }
              .nav {
                display: flex;
                cursor: pointer;
                position: absolute;
                right: 50px;
                top: 50px;
                @media (max-width: 767px) {
                  position: static;
                }
                .edit {
                  text-align: right;
                  i {
                    border-radius: 50%;
                    box-shadow: 0 5px 10px 0 #c1c1c1;
                    padding: 10px;
                    background-color: #618cfa;
                    color: #ffffff;
                    margin-right: 15px;
                  }
                }
                .delete {
                  i {
                    border-radius: 50%;
                    box-shadow: 0 5px 10px 0 #c1c1c1;
                    padding: 10px;
                    background-color: #242424;
                    color: #ffffff;
                    font-size: 16px;
                  }
                }
              }
              .thumbnauil {
                cursor: pointer;
                width: 100%;
                max-width: 280px;
                height: 180px;
                border-radius: 5px;
                margin-right: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-image: url('/static/images/applications-page/bg-application-thumbnauil-preview.svg');
                background-size: contain;
                background-repeat: no-repeat;
                @media (max-width: 767px) {
                  margin-right: 0px;
                  margin-bottom: 20px;
                }
                .icon {
                  i {
                    border-radius: 50%;
                    box-shadow: 0 5px 10px 0 #c1c1c1;
                    padding: 10px;
                    background-color: #ffffff;
                    color: #618cfa;
                    font-size: 20px;
                  }
                }
              }

              .text {
                max-width: 400px;
                @media (max-width: 767px) {
                  margin-bottom: 15px;
                }
                .title {
                  margin-bottom: 15px;
                  h2 {
                    margin: 0px;
                    font-weight: 700;
                    color: #242424;
                    line-height: 26px;
                    font-size: 26px;
                    cursor: pointer;
                  }
                }
                .description {
                  font-size: 15px;
                  line-height: 20px;
                  color: #6e6e6e;
                }
                .author {
                  span {
                    font-weight: 600;
                    font-size: 15px;
                    line-height: 1.69;
                    color: #242424;
                    margin-right: 5px;
                  }
                  b {
                    font-weight: 600;
                    font-size: 15px;
                    color: #618cfa;
                    text-decoration: none;
                  }
                }
              }
            }
            .progress-bar {
              display: flex;
              justify-content: space-between;
              align-items: center;
              position: relative;
              &::before {
                content: '';
                left: 2%;
                top: 50%;
                -webkit-transform: translateY(-50%);
                -ms-transform: translateY(-50%);
                transform: translateY(-50%);
                width: 98%;
                margin: 0px auto;
                height: 10px;
                position: absolute;
                background-color: #f2f5f7;
              }

              &::after {
                content: '';
                left: 2%;
                top: 50%;
                -webkit-transform: translateY(-50%);
                -ms-transform: translateY(-50%);
                transform: translateY(-50%);
                width: 48%;
                margin: 0px auto;
                height: 10px;
                position: absolute;
                background-color: #618cfa;
              }
              .submited {
                z-index: 1;
                position: relative;
                .name {
                  white-space: nowrap;
                  position: absolute;
                  top: 100%;
                  transform: translateX(-50%);
                  left: 50%;
                  font-size: 15px;
                  line-height: 22px;
                  color: #6e6e6e;
                }

                i {
                  font-size: 33px;
                  &:before {
                    color: #ffffff;
                  }
                  &::after {
                    color: #618cfa;
                    opacity: 1;
                  }
                }
              }
              .being-reviewed {
                z-index: 1;
                position: relative;
                .name {
                  white-space: nowrap;
                  position: absolute;
                  top: 100%;
                  transform: translateX(-50%);
                  left: 50%;
                  font-size: 15px;
                  line-height: 22px;
                  color: #6e6e6e;
                }
                i {
                  font-size: 33px;
                  &:before {
                    color: #ffffff;
                  }
                  &::after {
                    color: #618cfa;
                    opacity: 1;
                  }
                }
              }
              .approved {
                z-index: 1;
                position: relative;
                .name {
                  white-space: nowrap;
                  position: absolute;
                  top: 100%;
                  transform: translateX(-50%);
                  left: 50%;
                  font-size: 15px;
                  line-height: 22px;
                  color: #6e6e6e;
                }
                i {
                  font-size: 33px;
                  &:before {
                    color: #ffffff;
                  }
                  &::after {
                    color: #618cfa;
                    opacity: 1;
                  }
                }
              }
            }
          }
        }
        .drafts {
          .application {
            margin-bottom: 30px;
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
              width: 100%;
              max-width: 350px;
              margin: 0px auto;
            }
            .info {
              display: flex;
              align-items: center;
              margin-bottom: 30px;
              @media (max-width: 767px) {
                flex-direction: column;
              }
              .nav {
                display: flex;
                cursor: pointer;
                position: absolute;
                right: 50px;
                top: 50px;
                @media (max-width: 767px) {
                  position: static;
                }
                .edit {
                  text-align: right;
                  i {
                    border-radius: 50%;
                    box-shadow: 0 5px 10px 0 #c1c1c1;
                    padding: 10px;
                    background-color: #618cfa;
                    color: #ffffff;
                    margin-right: 15px;
                  }
                }
                .delete {
                  i {
                    border-radius: 50%;
                    box-shadow: 0 5px 10px 0 #c1c1c1;
                    padding: 10px;
                    background-color: #242424;
                    color: #ffffff;
                    font-size: 16px;
                  }
                }
              }
              .thumbnauil {
                cursor: pointer;
                width: 100%;
                max-width: 280px;
                height: 180px;
                border-radius: 5px;
                margin-right: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-image: url('/static/images/applications-page/bg-application-thumbnauil-preview.svg');
                background-size: contain;
                background-repeat: no-repeat;
                @media (max-width: 767px) {
                  margin-right: 0px;
                  margin-bottom: 20px;
                }
                .icon {
                  i {
                    border-radius: 50%;
                    box-shadow: 0 5px 10px 0 #c1c1c1;
                    padding: 10px;
                    background-color: #ffffff;
                    color: #618cfa;
                    font-size: 20px;
                  }
                }
              }

              .text {
                max-width: 400px;
                @media (max-width: 767px) {
                  margin-bottom: 15px;
                }
                .title {
                  margin-bottom: 15px;
                  h2 {
                    margin: 0px;
                    font-weight: 700;
                    color: #242424;
                    line-height: 26px;
                    font-size: 26px;
                    cursor: pointer;
                  }
                }
                .description {
                  font-size: 15px;
                  line-height: 20px;
                  color: #6e6e6e;
                }
                .author {
                  span {
                    font-weight: 600;
                    font-size: 15px;
                    line-height: 1.69;
                    color: #242424;
                    margin-right: 5px;
                  }
                  b {
                    font-weight: 600;
                    font-size: 15px;
                    color: #618cfa;
                    text-decoration: none;
                  }
                }
              }
            }
            .progress-bar {
              display: flex;
              justify-content: space-between;
              align-items: center;
              position: relative;
              &::before {
                content: '';
                left: 2%;
                top: 50%;
                -webkit-transform: translateY(-50%);
                -ms-transform: translateY(-50%);
                transform: translateY(-50%);
                width: 98%;
                margin: 0px auto;
                height: 10px;
                position: absolute;
                background-color: #f2f5f7;
              }

              .submited {
                z-index: 1;
                position: relative;
                .name {
                  white-space: nowrap;
                  position: absolute;
                  top: 100%;
                  transform: translateX(-50%);
                  left: 50%;
                  font-size: 15px;
                  line-height: 22px;
                  color: #6e6e6e;
                }

                i {
                  font-size: 33px;
                  color: #618cfa;
                }
              }
              .being-reviewed {
                z-index: 1;
                position: relative;
                .name {
                  white-space: nowrap;
                  position: absolute;
                  top: 100%;
                  transform: translateX(-50%);
                  left: 50%;
                  font-size: 15px;
                  line-height: 22px;
                  color: #6e6e6e;
                }
                i {
                  font-size: 33px;
                  color: #618cfa;
                }
              }
              .approved {
                z-index: 1;
                position: relative;
                .name {
                  white-space: nowrap;
                  position: absolute;
                  top: 100%;
                  transform: translateX(-50%);
                  left: 50%;
                  font-size: 15px;
                  line-height: 22px;
                  color: #6e6e6e;
                }
                i {
                  font-size: 33px;
                  color: #618cfa;
                }
              }
            }
          }
        }
      }
    }
    .submit {
      text-align: right;
      padding: 30px 0px;

      @media (max-width: 767px) {
        text-align: center;
      }
      input {
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
      .social {
        display: flex;
        align-items: center;
        margin-top: 20px;
        margin-bottom: 30px;
        .text {
          font-size: 14px;
          line-height: 1.93;
          color: #6e6e6e;
          margin-right: 10px;
        }
        .icons {
          display: flex;
          align-items: center;
          .icon {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            border: 1px solid #dddddd;
            margin-right: 5px;
            &:last-child {
              margin-right: 0px;
            }
            i {
              font-size: 14px;
              color: #6e6e6e;
            }
          }
        }
      }
    }
  }
}
</style>
