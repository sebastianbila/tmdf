<template>
  <div>
    <Preloader :show="preloader"></Preloader>
  <div class="edit-application-page">
    <div class="container">
      <div class="heading">
        <h2>Published Application</h2>
        <router-link class="back" to="/applications">Back to All</router-link>
      </div>
      <div class="content">
        <div class="text">
          <div class="title">
            <h2>Smile: The Modular Shelf Made</h2>
          </div>
          <div class="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </div>
        </div>
        <div class="previw">
          <div class="play"><i class="fas fa-play"></i></div>
        </div>
        <div class="user d-block d-lg-none">
          <div class="team">2 Founders, 3 Team Meambers</div>
          <div class="author">
            <div class="avatar">
              <img
                :src="
                  form.user.avatar
                    ? form.user.avatar
                    : '/images/edit-profile-page/avatar.svg'
                "
                alt="avatar"
              />
            </div>
            <div class="name">
              By <span>{{ form.user.name }}</span>
            </div>
            <button type="more" class="more">More</button>
          </div>
        </div>
        <div class="meta">
          <div class="field-of-activity">
            <i class="fas fa-list"></i>
            <span> Product Design </span>
          </div>
          <div class="location">
            <i class="fal fa-map-marker-alt"></i>
            <span> The Scottish Borders, UK </span>
          </div>
        </div>
        <div class="tabs-oveflow">
          <div class="tabs">
            <div class="tab" :class="{ active: isActiveTab('description') }">
              Description
            </div>
            <div class="tab" :class="{ active: isActiveTab('documents') }">
              Documents
            </div>
            <div class="tab" :class="{ active: isActiveTab('updates') }">
              Updates (0)
            </div>
            <div class="tab" :class="{ active: isActiveTab('followers') }">
              Followers (0)
            </div>
          </div>
        </div>
        <div class="tabs-content">
          <div class="row">
            <div class="col">
              <div
                v-show="isActiveTab('description')"
                class="project-description"
              >
                <h3>Description</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat.
                </p>
              </div>
              <div v-show="isActiveTab('documents')" class="project-documents">
                Documents111111
              </div>
              <div v-show="isActiveTab('updates')" class="project-updates">
                updates22222222
              </div>
              <div v-show="isActiveTab('followers')" class="project-followers">
                followers3333333
              </div>
            </div>
            <div class="col-md-auto col-fixed-260px d-none d-lg-block">
              <div class="user">
                <div class="team">2 Founders, 3 Team Meambers</div>
                <div class="author">
                  <div class="avatar">
                    <img
                      :src="
                        form.user.avatar
                          ? form.user.avatar
                          : '/images/edit-profile-page/avatar.svg'
                      "
                      alt="avatar"
                    />
                  </div>
                  <div class="name">
                    By <span>{{ form.user.name }}</span>
                  </div>
                </div>
                <div class="description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore…
                    <router-link to="/profile" tag="a">See More</router-link>
                  </p>
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
import { serialize } from 'object-to-formdata'
import Treeselect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
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
    Preloader,
  },
  layout: 'LayoutApplication',
  props: ['scroll'],
  data() {
    return {
      preloader: true,
      applicationId: null,
      step: 1,
      errors: [],
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
        firstStep: {
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
        secondStep: {
          founderRoleOptions: [
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
          teamRoleOptions: [
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
            users: {
              founder: {
                email: null,
                role: 'admin',
                showFounderForm: false,
                showFounderList: false,
              },
              team: {
                email: null,
                role: 'admin',
                showTeamForm: false,
                showTeamList: false,
              },
            },
            data: {
              investors: {
                name: null,
                url: null,
                showInvestorsForm: false,
                showInvestorsList: false,
              },
              incubator: {
                name: null,
                url: null,
                showIncubatorForm: false,
                showIncubatorList: false,
              },
              advisors: {
                name: null,
                url: null,
                showAdvisorsForm: false,
                showAdvisorsList: false,
              },
              partners: {
                name: null,
                url: null,
                showPartnersForm: false,
                showPartnersList: false,
              },
            },
          },
          users: {
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
        thirdStep: {
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
      },
    }
  },
  validations: {
    form: {
      firstStep: {
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
      secondStep: {
        fields: {
          users: {
            founder: {
              email: {
                email,
                required,
              },
              role: {
                required,
              },
            },
            team: {
              email: {
                email,
                required,
              },
              role: {
                required,
              },
            },
          },
          data: {
            investors: {
              name: {
                required,
              },
              url: {
                url,
                required,
              },
            },
            incubator: {
              name: {
                required,
              },
              url: {
                url,
                required,
              },
            },
            advisors: {
              name: {
                required,
              },
              url: {
                url,
                required,
              },
            },
            partners: {
              name: {
                required,
              },
              url: {
                url,
                required,
              },
            },
          },
        },
      },
      thirdStep: {
        project_video: {
          url,
          required,
        },
      },
    },
  },
  created() {
    this.getProfile()
    this.getApplication()
  },
  destroyed() {
    sessionStorage.removeItem('applicationId')
    sessionStorage.removeItem('applicationStep')
  },
  methods: {
    isActiveTab(tab) {
      return this.activeTab === tab
    },
    setActiveTab(tab) {
      this.activeTab = tab
    },

    getApplication() {
      if (this.$route.params.id) {
        this.applicationId = this.$route.params.id
        this.$store
          .dispatch('GETAPPLICATION', this.applicationId)
          .then((response) => {
            if (response.status == 200) {
              Object.assign(this.form.firstStep, response.data)
              Object.assign(this.form.secondStep, response.data)
              Object.assign(this.form.thirdStep, response.data)

              response.data.documents.forEach((file, index) => {
                index++
                this.form.thirdStep.files['file_' + index].id = file.id
                this.form.thirdStep.files['file_' + index].file_name =
                  file.file_name
                this.form.thirdStep.files['file_' + index].showFileName = true
              })

              if (sessionStorage.getItem('applicationStep')) {
                this.step = sessionStorage.getItem('applicationStep')
              }
              this.preloader = false
            }
          })
          .catch((error) => {
            this.errors = error.response.data
          })
      }
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
    // onSubmitApplications() {
    //   const wholeForm = Object.assign(this.form.firstStep, this.form.secondStep, this.form.thirdStep);
    //   const formData = serialize(wholeForm, { indices: true });
    //   let id = this.applicationId;
    //   this.$store
    //     .dispatch(
    //       "UPDATEAPPLICATION",
    //       { formData, id },
    //       {
    //         headers: {
    //           "Content-Type": "multipart/form-data",
    //         },
    //       },
    //     )
    //     .then((response) => {
    //       sessionStorage.removeItem("applicationStep");
    //       sessionStorage.removeItem("applicationId");
    //       this.$router.push("/applications");
    //     })
    //     .catch((error) => {
    //       this.errors = error.response.data;
    //     });
    // },

    // onAccepterdTheTermsOfService(event) {
    //   this.form.thirdStep.acccepterdTheTermsOfService = !event.target.checked;
    // },

    // onFileUploadTriggerClick(fileIndex) {
    //   this.$refs[fileIndex].click();
    // },

    // onFileUpload(fileIndex) {
    //   this.form.thirdStep.files[fileIndex].file = this.$refs[fileIndex].files[0];
    //   this.form.thirdStep.files[fileIndex].file_name = this.$refs[fileIndex].files[0].name;
    //   this.form.thirdStep.files[fileIndex].showFileName = true;

    //   this.form.thirdStep.documents.push({
    //     file: this.form.thirdStep.files[fileIndex].file,
    //   });
    // },

    // onDeleteFileFromUpload(fileIndex) {
    //   this.form.thirdStep.files[fileIndex].file = null;
    //   this.form.thirdStep.files[fileIndex].file_name = null;
    //   this.form.thirdStep.files[fileIndex].showFileName = false;
    //   this.$refs[fileIndex].value = null;

    //   this.form.thirdStep.documents = this.form.thirdStep.documents.filter((element) => {
    //     return element.id != this.form.thirdStep.files[fileIndex].id;
    //   });
    // },

    // next() {
    //   if (this.step == 1) {
    //     this.$v.form.firstStep.$touch();
    //     if (this.$v.form.firstStep.$invalid) {
    //       return;
    //     } else {
    //       if (this.$route.params.id) {
    //         const formData = serialize(this.form.firstStep);
    //         let id = this.applicationId;
    //         this.$store
    //           .dispatch(
    //             "UPDATEAPPLICATION",
    //             { formData, id },
    //             {
    //               headers: {
    //                 "Content-Type": "multipart/form-data",
    //               },
    //             },
    //           )
    //           .then((response) => {
    //             if (response.status == 200) {
    //               this.step++;
    //               sessionStorage.setItem("applicationStep", this.step);
    //               this.scroll.scrollTo(
    //                 {
    //                   y: 0,
    //                 },
    //                 0,
    //               );
    //             }
    //           })
    //           .catch((error) => {
    //             this.errors = error.response.data;
    //           });
    //       }
    //     }
    //   }
    //   if (this.step == 2) {
    //     const formData = serialize(this.form.secondStep, { indices: true });
    //     let id = this.applicationId;
    //     this.$store
    //       .dispatch(
    //         "UPDATEAPPLICATION",
    //         { formData, id },
    //         {
    //           headers: {
    //             "Content-Type": "multipart/form-data",
    //           },
    //         },
    //       )
    //       .then((response) => {
    //         if (response.status == 200) {
    //           this.step++;
    //           sessionStorage.setItem("applicationStep", this.step);
    //           this.scroll.scrollTo(
    //             {
    //               y: 0,
    //             },
    //             0,
    //           );
    //         }
    //       })
    //       .catch((error) => {
    //         this.errors = error.response.data;
    //       });
    //   }
    // },
    // prev() {
    //   this.step--;
    //   sessionStorage.setItem("applicationStep", this.step);
    //   this.scroll.scrollTo(
    //     {
    //       y: 0,
    //     },
    //     0,
    //   );
    // },
    // saveToDrafts() {
    //   this.$router.push("/applications");
    // },
    // onSubmitFounderForm() {
    //   this.$v.form.secondStep.fields.users.founder.$touch();
    //   if (this.$v.form.secondStep.fields.users.founder.$invalid) {
    //     return;
    //   } else {
    //     this.form.secondStep.users.founder.push({
    //       email: this.form.secondStep.fields.users.founder.email.toLowerCase(),
    //       role: this.form.secondStep.fields.users.founder.role,
    //     });
    //     this.form.secondStep.fields.users.founder.email = null;
    //     this.form.secondStep.fields.users.founder.role = null;
    //     this.form.secondStep.fields.users.founder.showFounderForm = false;
    //     this.form.secondStep.fields.users.founder.showFounderList = true;
    //     this.$v.form.secondStep.fields.users.founder.$reset();
    //   }
    // },
    // onCancelFounderForm() {
    //   this.form.secondStep.fields.users.founder.email = null;
    //   this.form.secondStep.fields.users.founder.showFounderForm = false;
    //   this.$v.form.secondStep.fields.users.founder.$reset();
    // },
    // onDeleteFounderForm(index) {
    //   this.form.secondStep.users.founder.splice(index, 1);
    // },
    // isShowFounderForm() {
    //   this.form.secondStep.fields.users.founder.showFounderForm = true;
    // },

    // onSubmitTeamForm() {
    //   this.$v.form.secondStep.fields.users.team.$touch();
    //   if (this.$v.form.secondStep.fields.users.team.$invalid) {
    //     return;
    //   } else {
    //     this.form.secondStep.users.team.push({
    //       email: this.form.secondStep.fields.users.team.email.toLowerCase(),
    //       role: this.form.secondStep.fields.users.team.role,
    //     });
    //     this.form.secondStep.fields.users.team.email = null;
    //     this.form.secondStep.fields.users.team.role = null;
    //     this.form.secondStep.fields.users.team.showTeamForm = false;
    //     this.form.secondStep.fields.users.team.showTeamList = true;
    //     this.$v.form.secondStep.fields.users.team.$reset();
    //   }
    // },
    // onCancelTeamForm() {
    //   this.form.secondStep.fields.users.team.email = null;
    //   this.form.secondStep.fields.users.team.role = null;
    //   this.form.secondStep.fields.users.team.showTeamForm = false;
    //   this.$v.form.secondStep.fields.users.team.$reset();
    // },
    // onDeleteTeamForm(index) {
    //   this.form.secondStep.users.team.splice(index, 1);
    // },
    // isShowTeamForm() {
    //   this.form.secondStep.fields.users.team.showTeamForm = true;
    // },

    // onSubmitInvestorsForm() {
    //   this.$v.form.secondStep.fields.data.investors.$touch();
    //   if (this.$v.form.secondStep.fields.data.investors.$invalid) {
    //     return;
    //   } else {
    //     this.form.secondStep.data.investors.push({
    //       name: this.form.secondStep.fields.data.investors.name,
    //       url: this.form.secondStep.fields.data.investors.url,
    //     });

    //     this.form.secondStep.fields.data.investors.name = null;
    //     this.form.secondStep.fields.data.investors.url = null;
    //     this.form.secondStep.fields.data.investors.showInvestorsForm = false;
    //     this.form.secondStep.fields.data.investors.showInvestorsList = true;
    //     this.$v.form.secondStep.fields.data.investors.$reset();
    //   }
    // },

    // onCancelInvestorsForm() {
    //   this.form.secondStep.fields.data.investors.name = null;
    //   this.form.secondStep.fields.data.investors.url = null;
    //   this.form.secondStep.fields.data.investors.showInvestorsForm = false;
    //   this.$v.form.secondStep.fields.data.investors.$reset();
    // },
    // onDeleteInvestorsForm(index) {
    //   this.form.secondStep.data.investors.splice(index, 1);
    // },
    // isShowInvestorsForm() {
    //   this.form.secondStep.fields.data.investors.showInvestorsForm = true;
    // },

    // onSubmitIncubatorForm() {
    //   this.$v.form.secondStep.fields.data.incubator.$touch();
    //   if (this.$v.form.secondStep.fields.data.incubator.$invalid) {
    //     return;
    //   } else {
    //     this.form.secondStep.data.incubator.push({
    //       name: this.form.secondStep.fields.data.incubator.name,
    //       url: this.form.secondStep.fields.data.incubator.url,
    //     });
    //     this.form.secondStep.fields.data.incubator.name = null;
    //     this.form.secondStep.fields.data.incubator.url = null;
    //     this.form.secondStep.fields.data.incubator.showIncubatorForm = false;
    //     this.form.secondStep.fields.data.incubator.showIncubatorList = true;
    //     this.$v.form.secondStep.fields.data.incubator.$reset();
    //   }
    // },
    // onCancelIncubatorForm() {
    //   this.form.secondStep.fields.data.incubator.name = null;
    //   this.form.secondStep.fields.data.incubator.url = null;
    //   this.form.secondStep.fields.data.incubator.showIncubatorForm = false;
    //   this.$v.form.secondStep.fields.data.incubator.$reset();
    // },

    // onDeleteIncubatorForm(index) {
    //   this.form.secondStep.data.incubator.splice(index, 1);
    // },
    // isShowIncubatorForm() {
    //   this.form.secondStep.fields.data.incubator.showIncubatorForm = true;
    // },

    // onSubmitAdvisorsForm() {
    //   this.$v.form.secondStep.fields.data.advisors.$touch();
    //   if (this.$v.form.secondStep.fields.data.advisors.$invalid) {
    //     return;
    //   } else {
    //     this.form.secondStep.data.advisors.push({
    //       name: this.form.secondStep.fields.data.advisors.name,
    //       url: this.form.secondStep.fields.data.advisors.url,
    //     });
    //     this.form.secondStep.fields.data.advisors.name = null;
    //     this.form.secondStep.fields.data.advisors.url = null;
    //     this.form.secondStep.fields.data.advisors.showAdvisorsForm = false;
    //     this.form.secondStep.fields.data.advisors.showAdvisorsList = true;
    //     this.$v.form.secondStep.fields.data.advisors.$reset();
    //   }
    // },
    // onCancelAdvisorsForm() {
    //   this.form.secondStep.fields.data.advisors.name = null;
    //   this.form.secondStep.fields.data.advisors.url = null;
    //   this.form.secondStep.fields.data.advisors.showAdvisorsForm = false;
    //   this.$v.form.secondStep.fields.data.advisors.$reset();
    // },

    // onDeleteAdvisorsForm(index) {
    //   this.form.secondStep.data.advisors.splice(index, 1);
    // },
    // isShowAdvisorsForm() {
    //   this.form.secondStep.fields.data.advisors.showAdvisorsForm = true;
    // },

    // onSubmitPartnersForm() {
    //   this.$v.form.secondStep.fields.data.partners.$touch();
    //   if (this.$v.form.secondStep.fields.data.partners.$invalid) {
    //     return;
    //   } else {
    //     this.form.secondStep.data.partners.push({
    //       name: this.form.secondStep.fields.data.partners.name,
    //       url: this.form.secondStep.fields.data.partners.url,
    //     });
    //     this.form.secondStep.fields.data.partners.name = null;
    //     this.form.secondStep.fields.data.partners.url = null;
    //     this.form.secondStep.fields.data.partners.showPartnersForm = false;
    //     this.form.secondStep.fields.data.partners.showPartnersList = true;
    //     this.$v.form.secondStep.fields.data.partners.$reset();
    //   }
    // },
    // onCancelPartnersForm() {
    //   this.form.secondStep.fields.data.partners.name = null;
    //   this.form.secondStep.fields.data.partners.url = null;
    //   this.form.secondStep.fields.data.partners.showPartnersForm = false;
    //   this.$v.form.secondStep.fields.data.partners.$reset();
    // },

    // onDeletePartnersForm(index) {
    //   this.form.secondStep.data.partners.splice(index, 1);
    // },
    // isShowPartnersForm() {
    //   this.form.secondStep.fields.data.partners.showPartnersForm = true;
    // },
  },
}
</script>

<style lang="scss" scoped>
.edit-application-page {
  overflow: hidden;
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
    .col-fixed-260px {
      flex: 0 0 260px;
      @media (max-width: 767px) {
        flex: 0 0 auto;
      }
    }
    .text {
      text-align: center;
      margin-bottom: 40px;
      .title {
        h2 {
          font-family: $Inter;
          font-size: 26px;
          font-weight: 700;
          line-height: 0.77;
          color: #242424;
          line-height: 1.2;
        }
      }
      .description {
        font-size: 15px;
        color: #6e6e6e;
        line-height: 1.7;
      }
    }
    .previw {
      width: 100%;
      object-fit: contain;
      background-color: #00000084;
      border-radius: 10px;
      position: relative;
      padding-top: 60%;

      @media (max-width: 991px) {
        margin-bottom: 20px;
      }

      .play {
        i {
          color: #ffffff;
          font-size: 60px;
          transform: translate(-50%, -50%);
          position: absolute;
          left: 50%;
          top: 50%;
        }
      }
    }
    .meta {
      display: flex;
      align-items: center;
      font-size: 0px;
      margin: 20px 0px;
      flex-wrap: wrap;
      .field-of-activity {
        margin: 5px;
        i {
          margin-right: 5px;
          font-size: 15px;
        }
        span {
          font-size: 15px;
          font-weight: 600;
          line-height: 1.47;
          color: #242424;
        }
      }
      .location {
        margin: 5px;
        i {
          margin-right: 5px;
          font-size: 15px;
        }
        span {
          font-size: 15px;
          font-weight: 600;
          line-height: 1.47;
          color: #242424;
        }
      }
    }
    .tabs-oveflow {
      margin: 40px 0px;
      overflow-x: auto;
      background-color: #f2f5f7;
      border-radius: 10px;
      .tabs {
        display: inline-flex;
        justify-content: flex-start;
        padding: 20px 30px;
        .tab {
          width: 100%;
          margin-right: 40px;
          font-size: 18px;
          font-weight: 700;
          line-height: 1.11;
          color: #242424;
          white-space: nowrap;
          cursor: pointer;
          &:last-child {
            margin-right: 0px;
          }
          &:hover,
          &:active {
            color: #618cfa;
          }
        }
      }
    }

    .tabs-content {
      .project-description {
        h3 {
          margin: 0px;
          margin-bottom: 20px;
          font-size: 23px;
          line-height: 1.04;
          color: #242424;
          font-weight: 400;
        }
        p {
          font-size: 18px;
          line-height: 1.56;
          color: #6e6e6e;
        }
      }
    }
    .user {
      border-radius: 10px;
      padding: 12px;
      border: 1px solid #d8dee1;
      @media (max-width: 991px) {
        border: none;
        padding: 0px;
      }
      .author {
        display: flex;
        align-items: center;
        .avatar {
          img {
            border: 3px solid #618cfa;
            width: 40px;
            box-shadow: 0 2px 22px 0 rgba(32, 49, 94, 0.13);
            border-radius: 50%;
            margin-right: 5px;
          }
        }
        .name {
          font-size: 15px;
          font-weight: 700;
          line-height: 1.33;
          color: #242424;
          text-transform: capitalize;
          span {
            color: #618cfa;
          }
        }
      }
      .team {
        font-size: 12px;
        font-weight: 600;
        line-height: 1.83;
        color: #242424;
        margin-bottom: 10px;
      }
      .description {
        font-size: 14px;
        line-height: 1.7;
        color: #6e6e6e;
        a {
          font-weight: 600;
          color: #618cfa;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          display: none;
        }
      }
      .more {
        display: none;
        margin-left: 10px;
        text-transform: uppercase;
        background: #ffffff;
        padding: 5px 8px;
        border-radius: 10px;
        border: 1px solid #618cfa;
        font-family: $GTWalsheimPro;
        font-size: 14px;
        font-weight: 700;
        font-style: normal;
        line-height: 1.71;
        letter-spacing: 0.09px;
        color: #618cfa;
        @media (max-width: 991px) {
          display: block;
        }
      }
    }
  }
}
</style>
