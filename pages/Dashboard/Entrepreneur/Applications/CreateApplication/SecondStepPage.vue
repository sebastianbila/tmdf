<template>
  <div class="second-step">
    <div class="step-content">
      <form>
        <div class="title">
          <h2>About Your Team</h2>
        </div>
        <div class="founders">
          <div class="title">
            <h3>Founders</h3>
          </div>
          <div class="author">
            <div class="avatar">
              <img
                :src="
                  user.avatar
                    ? user.avatar
                    : '/images/edit-profile-page/avatar.svg'
                "
                alt="avatar"
              />
            </div>
            <div class="text">
              <div class="name">
                {{ user.name }}
              </div>
            </div>
          </div>
        </div>
        <div class="member-group">
          <div class="text">
            <div class="title">
              <h3><b>Founder</b> (optional)</h3>
            </div>
            <div class="description">People who work at your startup</div>
          </div>
          <div
            v-if="
              form.roles.founder.length && form.fields.roles.founder.showList
            "
            class="list"
          >
            <div v-for="(member, index) in form.roles.founder" :key="index">
              <template v-if="member['user_id'] !== user.id">
                <div
                  v-if="!form.fields.roles.founder.edit[index]"
                  class="member"
                >
                  <div class="info">
                    <span class="email">
                      <div class="icon"><i class="fas fa-envelope"></i></div>
                      <b>Email:</b
                      ><a :href="`mailto:${member.email}`">{{
                        member.email
                      }}</a>
                    </span>
                    <span class="url">
                      <span class="icon"><i class="fas fa-user-tag"></i></span>
                      <span class="role"><b>Role:</b>{{ member.role }}</span>
                    </span>
                  </div>
                  <div class="nav">
                    <div
                      class="edit"
                      @click="handleEditMember('roles', 'founder', index)"
                    >
                      <i class="fal fa-pencil"></i>
                    </div>
                    <div
                      class="delete"
                      @click="handleDeleteMember('roles', 'founder', index)"
                    >
                      <i class="fal fa-trash-alt"></i>
                    </div>
                  </div>
                </div>
                <div v-if="form.fields.roles.founder.edit[index]" class="form">
                  <RoleMemberForm
                    :email="member.email"
                    :role="member.role"
                    :options="form.memberRoleOptions"
                    @onSubmit="
                      handleSubmitMemberForm($event, 'roles', 'founder', index)
                    "
                    @onCancel="
                      handleCancelMemberForm('roles', 'founder', index)
                    "
                  />
                </div>
              </template>
            </div>
          </div>
          <div class="add-member">
            <div
              v-if="!form.fields.roles.founder.showForm"
              class="link"
              @click="handleShowAddMemberForm('roles', 'founder')"
            >
              Add a founder +
            </div>
            <div v-if="form.fields.roles.founder.showForm" class="form">
              <RoleMemberForm
                :options="form.memberRoleOptions"
                @onSubmit="handleSubmitMemberForm($event, 'roles', 'founder')"
                @onCancel="handleCancelMemberForm('roles', 'founder')"
              />
            </div>
          </div>
        </div>

        <div class="member-group">
          <div class="text">
            <div class="title">
              <h3><b>Team</b> (optional)</h3>
            </div>
            <div class="description">People who work at your startup</div>
          </div>
          <div
            v-if="
              form.fields.roles.team.showList ||
              (form.data && form.data.hasOwnProperty('team'))
            "
            class="list"
          >
            <div v-for="(member, index) in form.roles.team" :key="index">
              <div v-if="!form.fields.roles.team.edit[index]" class="member">
                <div class="info">
                  <span class="email"
                    ><div class="icon"><i class="fas fa-envelope"></i></div>
                    <b>Email:</b
                    ><a :href="`mailto:${member.email}`">{{ member.email }}</a>
                  </span>
                  <span class="url"
                    ><span class="icon"><i class="fas fa-user-tag"></i></span
                    ><span class="role"><b>Role:</b>{{ member.role }}</span>
                  </span>
                </div>
                <div class="nav">
                  <div
                    class="edit"
                    @click="handleEditMember('roles', 'team', index)"
                  >
                    <i class="fal fa-pencil"></i>
                  </div>
                  <div
                    class="delete"
                    @click="handleDeleteMember('roles', 'team', index)"
                  >
                    <i class="fal fa-trash-alt"></i>
                  </div>
                </div>
              </div>
              <div v-if="form.fields.roles.team.edit[index]" class="form">
                <RoleMemberForm
                  :email="member.email"
                  :role="member.role"
                  :options="form.memberRoleOptions"
                  @onSubmit="
                    handleSubmitMemberForm($event, 'roles', 'team', index)
                  "
                  @onCancel="handleCancelMemberForm('roles', 'team', index)"
                />
              </div>
            </div>
          </div>
          <div class="add-member">
            <div
              v-if="!form.fields.roles.team.showForm"
              class="link"
              @click="handleShowAddMemberForm('roles', 'team')"
            >
              Add an employee +
            </div>
            <div v-if="form.fields.roles.team.showForm" class="form">
              <RoleMemberForm
                :options="form.memberRoleOptions"
                @onSubmit="handleSubmitMemberForm($event, 'roles', 'team')"
                @onCancel="handleCancelMemberForm('roles', 'team')"
              />
            </div>
          </div>
        </div>

        <div class="member-group">
          <div class="text">
            <div class="title">
              <h3>
                <b>Previous Investors</b>
                (optional)
              </h3>
            </div>
            <div class="description">
              People who invested during past fundraising rounds
            </div>
          </div>
          <div
            v-if="
              form.fields.data.investors.showList ||
              (form.data && form.data.hasOwnProperty('investors'))
            "
            class="list"
          >
            <div v-for="(member, index) in form.data.investors" :key="index">
              <div
                v-if="!form.fields.data.investors.edit[index]"
                class="member"
              >
                <div class="info">
                  <span class="name"
                    ><div class="icon"><i class="fas fa-user"></i></div>
                    <b>Name:</b> {{ member.name }}</span
                  >
                  <span class="url"
                    ><span class="icon"><i class="fab fa-linkedin"></i></span
                    ><b>Url:</b
                    ><a :href="`${member.url}`">{{ member.url }}</a></span
                  >
                </div>
                <div class="nav">
                  <div
                    class="edit"
                    @click="handleEditMember('data', 'investors', index)"
                  >
                    <i class="fal fa-pencil"></i>
                  </div>
                  <div
                    class="delete"
                    @click="handleDeleteMember('data', 'investors', index)"
                  >
                    <i class="fal fa-trash-alt"></i>
                  </div>
                </div>
              </div>
              <div v-if="form.fields.data.investors.edit[index]" class="form">
                <UrlMemberForm
                  :name="member.name"
                  :url="member.url"
                  @onSubmit="
                    handleSubmitMemberForm($event, 'data', 'investors', index)
                  "
                  @onCancel="handleCancelMemberForm('data', 'investors', index)"
                />
              </div>
            </div>
          </div>
          <div class="add-member">
            <div
              v-if="!form.fields.data.investors.showForm"
              class="link"
              @click="handleShowAddMemberForm('data', 'investors')"
            >
              Add an investor +
            </div>
            <div v-if="form.fields.data.investors.showForm" class="form">
              <UrlMemberForm
                @onSubmit="handleSubmitMemberForm($event, 'data', 'investors')"
                @onCancel="handleCancelMemberForm('data', 'investors')"
              />
            </div>
          </div>
        </div>

        <div class="member-group">
          <div class="text">
            <div class="title">
              <h3>
                <b>Incubator</b>
                (optional)
              </h3>
            </div>
            <div class="description">
              People who invested during past fundraising rounds
            </div>
          </div>
          <div
            v-if="
              form.fields.data.incubator.showList ||
              (form.data && form.data.hasOwnProperty('incubator'))
            "
            class="list"
          >
            <div v-for="(member, index) in form.data.incubator" :key="index">
              <div
                v-if="!form.fields.data.incubator.edit[index]"
                class="member"
              >
                <div class="info">
                  <span class="name"
                    ><div class="icon"><i class="fas fa-user"></i></div>
                    <b>Name:</b> {{ member.name }}</span
                  >
                  <span class="url"
                    ><span class="icon"><i class="fab fa-linkedin"></i></span
                    ><b>Url:</b
                    ><a :href="`${member.url}`">{{ member.url }}</a></span
                  >
                </div>
                <div class="nav">
                  <div
                    class="edit"
                    @click="handleEditMember('data', 'incubator', index)"
                  >
                    <i class="fal fa-pencil"></i>
                  </div>
                  <div
                    class="delete"
                    @click="handleDeleteMember('data', 'incubator', index)"
                  >
                    <i class="fal fa-trash-alt"></i>
                  </div>
                </div>
              </div>
              <div v-if="form.fields.data.incubator.edit[index]" class="form">
                <UrlMemberForm
                  :name="member.name"
                  :url="member.url"
                  @onSubmit="
                    handleSubmitMemberForm($event, 'data', 'incubator', index)
                  "
                  @onCancel="handleCancelMemberForm('data', 'incubator', index)"
                />
              </div>
            </div>
          </div>
          <div class="add-member">
            <div
              v-if="!form.fields.data.incubator.showForm"
              class="link"
              @click="handleShowAddMemberForm('data', 'incubator')"
            >
              Add an incubator +
            </div>
            <div v-if="form.fields.data.incubator.showForm" class="form">
              <UrlMemberForm
                @onSubmit="handleSubmitMemberForm($event, 'data', 'incubator')"
                @onCancel="handleCancelMemberForm('data', 'incubator')"
              />
            </div>
          </div>
        </div>

        <div class="member-group">
          <div class="text">
            <div class="title">
              <h3>
                <b>Advisors</b>
                (optional)
              </h3>
            </div>
            <div class="description">
              People who invested during past fundraising rounds
            </div>
          </div>
          <div
            v-if="
              form.fields.data.advisors.showList ||
              (form.data && form.data.hasOwnProperty('advisors'))
            "
            class="list"
          >
            <div v-for="(member, index) in form.data.advisors" :key="index">
              <div v-if="!form.fields.data.advisors.edit[index]" class="member">
                <div class="info">
                  <span class="name"
                    ><div class="icon"><i class="fas fa-user"></i></div>
                    <b>Name:</b> {{ member.name }}</span
                  >
                  <span class="url"
                    ><span class="icon"><i class="fab fa-linkedin"></i></span
                    ><b>Url:</b
                    ><a :href="`${member.url}`">{{ member.url }}</a></span
                  >
                </div>
                <div class="nav">
                  <div
                    class="edit"
                    @click="handleEditMember('data', 'advisors', index)"
                  >
                    <i class="fal fa-pencil"></i>
                  </div>
                  <div
                    class="delete"
                    @click="handleDeleteMember('data', 'advisors', index)"
                  >
                    <i class="fal fa-trash-alt"></i>
                  </div>
                </div>
              </div>
              <div v-if="form.fields.data.advisors.edit[index]" class="form">
                <UrlMemberForm
                  :name="member.name"
                  :url="member.url"
                  @onSubmit="
                    handleSubmitMemberForm($event, 'data', 'advisors', index)
                  "
                  @onCancel="handleCancelMemberForm('data', 'advisors', index)"
                />
              </div>
            </div>
          </div>
          <div class="add-member">
            <div
              v-if="!form.fields.data.advisors.showForm"
              class="link"
              @click="handleShowAddMemberForm('data', 'advisors')"
            >
              Add an advisor +
            </div>
            <div v-if="form.fields.data.advisors.showForm" class="form">
              <UrlMemberForm
                @onSubmit="handleSubmitMemberForm($event, 'data', 'advisors')"
                @onCancel="handleCancelMemberForm('data', 'advisors')"
              />
            </div>
          </div>
        </div>

        <div class="member-group">
          <div class="text">
            <div class="title">
              <h3>
                <b>Partners</b>
                (optional)
              </h3>
            </div>
            <div class="description">
              People who invested during past fundraising rounds
            </div>
          </div>
          <div
            v-if="
              form.fields.data.partners.showList ||
              (form.data && form.data.hasOwnProperty('partners'))
            "
            class="list"
          >
            <div v-for="(member, index) in form.data.partners" :key="index">
              <div v-if="!form.fields.data.partners.edit[index]" class="member">
                <div class="info">
                  <span class="name"
                    ><div class="icon"><i class="fas fa-user"></i></div>
                    <b>Name:</b> {{ member.name }}</span
                  >
                  <span class="url"
                    ><span class="icon"><i class="fab fa-linkedin"></i></span
                    ><b>Url:</b
                    ><a :href="`${member.url}`">{{ member.url }}</a></span
                  >
                </div>
                <div class="nav">
                  <div
                    class="edit"
                    @click="handleEditMember('data', 'partners', index)"
                  >
                    <i class="fal fa-pencil"></i>
                  </div>
                  <div
                    class="delete"
                    @click="handleDeleteMember('data', 'partners', index)"
                  >
                    <i class="fal fa-trash-alt"></i>
                  </div>
                </div>
              </div>
              <div v-if="form.fields.data.partners.edit[index]" class="form">
                <UrlMemberForm
                  :name="member.name"
                  :url="member.url"
                  @onSubmit="
                    handleSubmitMemberForm($event, 'data', 'partners', index)
                  "
                  @onCancel="handleCancelMemberForm('data', 'partners', index)"
                />
              </div>
            </div>
          </div>
          <div class="add-member">
            <div
              v-if="!form.fields.data.partners.showForm"
              class="link"
              @click="handleShowAddMemberForm('data', 'partners')"
            >
              Add a partner +
            </div>
            <div v-if="form.fields.data.partners.showForm" class="form">
              <UrlMemberForm
                @onSubmit="handleSubmitMemberForm($event, 'data', 'partners')"
                @onCancel="handleCancelMemberForm('data', 'partners')"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="navigation">
      <button type="button" class="save-to-drafts" @click="saveToDrafts">
        Save to drafts
      </button>
      <button type="button" class="prev" @click="prev">Prev</button>
      <button type="button" class="next" @click="next">Next</button>
    </div>
  </div>
</template>

<script>
import Treeselect from '@riophae/vue-treeselect'
import RoleMemberForm from '@components/Dashboard/Applications/RoleMemberForm'
import UrlMemberForm from '@components/Dashboard/Applications/UrlMemberForm'
export default {
  components: {
    Treeselect,
    RoleMemberForm,
    UrlMemberForm,
  },
  props: ['stepData'],
  data() {
    return {
      preloader: true,
      step: 1,
      errors: [],
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
      form: {
        memberRoleOptions: [
          {
            id: 'admin',
            label: 'Admin',
          },
          {
            id: 'member',
            label: 'Member',
          },
          {
            id: 'owner',
            label: 'Owner',
          },
        ],
        fields: {
          roles: {
            founder: {
              showForm: false,
              showList: true,
              edit: {},
            },
            team: {
              showForm: false,
              showList: true,
              edit: {},
            },
          },
          data: {
            investors: {
              showForm: false,
              showList: true,
              edit: {},
            },
            incubator: {
              showForm: false,
              showList: true,
              edit: {},
            },
            advisors: {
              showForm: false,
              showList: true,
              edit: {},
            },
            partners: {
              showForm: false,
              showList: true,
              edit: {},
            },
          },
        },

        roles: {
          founder: [],
          team: [],
        },
        data: {
          investors: [],
          incubator: [],
          advisors: [],
          partners: [],
        },

        step: 2,
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
  created() {
    this.getProfile()
  },
  methods: {
    getProfile() {
      this.$store
        .dispatch('GETROFILE')
        .then((response) => {
          Object.assign(this.user, response.data)
        })
        .catch((error) => {
          this.errors = error.response.data
        })
    },
    next() {
      this.$emit('nextStep', this.form)
    },
    prev() {
      this.$emit('prevStep')
    },
    saveToDrafts() {
      this.$router.push('/applications')
    },
    handleWatchUpdate(newData) {
      if (!newData) return

      const update = Object.keys(this.form).reduce(function (accumulator, key) {
        if (newData.hasOwnProperty(key)) accumulator[key] = newData[key]
        return accumulator
      }, {})

      Object.assign(this.form, update)
    },
    handleCloseMemberEditForm(category, type, index) {
      this.form.fields[category][type].edit = {
        ...this.form.fields[category][type].edit,
        [index]: false,
      }
    },
    handleShowAddMemberForm(category, type) {
      this.form.fields[category][type].showForm = true
    },
    handleSubmitMemberForm(response, category, type, index = undefined) {
      if (this.form[category] == null) {
        this.form[category] = {}
      }
      if (!this.form[category].hasOwnProperty(type)) {
        this.form[category][type] = []
      }
      const result = { ...response, edit: false }

      if (typeof index === 'number' && ~index) {
        this.form[category][type].splice(index, 1, result)
        this.handleCloseMemberEditForm(category, type, index)
      } else {
        this.form[category][type].push(result)
        this.form.fields[category][type].showForm = false
        this.form.fields[category][type].showList = true
      }
    },
    handleCancelMemberForm(category, type, index) {
      if (typeof index === 'number' && ~index) {
        this.handleCloseMemberEditForm(category, type, index)
      } else {
        this.form.fields[category][type].showForm = false
      }
    },
    handleEditMember(category, type, index) {
      const state = this.form.fields[category][type].edit[index] || false
      this.form.fields[category][type].edit = {
        ...this.form.fields[category][type].edit,
        [index]: !state,
      }
    },
    handleDeleteMember(category, type, index) {
      this.form[category][type].splice(index, 1)
      delete this.form.fields[category][type].edit[index]
    },
  },
}
</script>

<style lang="scss" scoped>
.second-step {
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
        h2 {
          margin: 0px;
          margin-bottom: 30px;
          font-size: 18px;
          line-height: 1.22;
          color: #242424;
        }
      }
      .founders {
        margin-bottom: 40px;
        .title {
          h3 {
            margin: 0px;
            margin-bottom: 30px;
            font-size: 16px;
            font-weight: 700;
            line-height: 1.22;
            color: #242424;
          }
        }
        .author {
          display: flex;
          align-items: center;
          width: 100%;
          margin-bottom: 10px;
          .avatar {
            position: relative;
            display: inline-block;
            text-align: center;
            margin-right: 10px;
            cursor: pointer;
            img {
              border: 4px solid #618cfa;
              width: 60px;
              box-shadow: 0 2px 22px 0 rgba(32, 49, 94, 0.3);
              border-radius: 50%;
            }
          }
          .text {
            .name {
              font-size: 16px;
              font-weight: 700;
              line-height: 1.22;
              color: #618cfa;
              text-transform: capitalize;
            }
          }
        }
      }

      .member-group {
        margin-bottom: 40px;
        .text {
          margin-bottom: 10px;

          .title {
            h3 {
              margin: 0px;
              font-size: 16px;
              line-height: 1.22;
              font-weight: 400;
              color: #242424;
            }
          }
          .description {
            font-size: 14px;
            line-height: 1.7;
            color: #6e6e6e;
          }
        }

        .list {
          margin-bottom: 10px;
          .member {
            display: inline-flex;
            align-items: center;
            padding: 10px 20px;
            width: 100%;
            height: 100%;
            border-radius: 10px;
            box-shadow: 0 2px 4px 0 #00000019;
            background-color: #f2f5f7;
            margin-bottom: 15px;
            position: relative;
            span {
              font-size: 16px;
              font-weight: 600;
              line-height: 1.5;
              color: #242424;
            }

            .info {
              display: flex;
              flex-direction: column;
              b {
                font-weight: 700;
                margin-right: 5px;
              }
              .email,
              .url {
                display: inline-flex;
                align-items: center;
              }
              .name {
                display: inline-flex;
                align-items: center;
                margin-bottom: 5px;
              }
            }
            .icon {
              i {
                width: 26px;
                font-size: 20px;
                color: #618cfa;
                margin-right: 10px;
              }
            }
            .nav {
              display: flex;
              position: absolute;
              right: 30px;
              .edit {
                margin-left: auto;
                cursor: pointer;
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
              .delete {
                margin-left: auto;
                cursor: pointer;
                i {
                  font-size: 16px;
                  border-radius: 50%;
                  box-shadow: 0 5px 10px 0 #c1c1c1;
                  padding: 10px;
                  background-color: #242424;
                  margin-left: 10px;
                  color: #ffffff;
                }
              }
            }
          }
        }

        .add-member {
          .link {
            font-size: 14px;
            font-weight: 500;
            line-height: 1.5;
            color: #618cfa;
            cursor: pointer;
          }
        }
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
</style>
