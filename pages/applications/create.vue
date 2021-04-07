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
            <div v-if="step == 1" class="first-step">
              <div class="form">
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
                            v-model.trim="form.firstStep.company_name"
                            type="text"
                            placeholder="Company Name"
                            :class="{
                              'is-valid': $v.form.firstStep.company_name.$error,
                            }"
                          />
                          <div
                            v-if="$v.form.firstStep.company_name.$error"
                            class="is-valid-text"
                          >
                            <span
                              v-if="!$v.form.firstStep.company_name.required"
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
                            v-model.trim="form.firstStep.company_site"
                            type="text"
                            placeholder="https://"
                            :class="{
                              'is-valid': $v.form.firstStep.company_site.$error,
                            }"
                          />
                          <div
                            v-if="$v.form.firstStep.company_site.$error"
                            class="is-valid-text"
                          >
                            <span
                              v-if="!$v.form.firstStep.company_site.required"
                              >Company Site is required</span
                            >
                            <span v-if="!$v.form.firstStep.company_site.url"
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
                            v-model.trim="form.firstStep.company_location"
                            type="text"
                            placeholder="Add Location"
                            :class="{
                              'is-valid':
                                $v.form.firstStep.company_location.$error,
                            }"
                          />
                          <div
                            v-if="$v.form.firstStep.company_location.$error"
                            class="is-valid-text"
                          >
                            <span
                              v-if="
                                !$v.form.firstStep.company_location.required
                              "
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
                              v-model="form.firstStep.company_employees"
                              :clearable="false"
                              :options="form.firstStep.companyEmployeesOptions"
                              placeholder="Select Employees"
                              :class="{
                                'is-valid':
                                  $v.form.firstStep.company_employees.$error,
                              }"
                            />
                          </div>
                          <div
                            v-if="$v.form.firstStep.company_employees.$error"
                            class="is-valid-text"
                          >
                            <span
                              v-if="
                                !$v.form.firstStep.company_employees.required
                              "
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
                            v-model.trim="form.firstStep.company_markets"
                            type="text"
                            placeholder="Add Markets"
                            :class="{
                              'is-valid':
                                $v.form.firstStep.company_markets.$error,
                            }"
                          />
                          <div
                            v-if="$v.form.firstStep.company_markets.$error"
                            class="is-valid-text"
                          >
                            <span
                              v-if="!$v.form.firstStep.company_markets.required"
                              >Markets is required</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="textarea">
                      <div class="row">
                        <div class="col-md-3">
                          <label for="high-concept-pitch"
                            >High-Concept Pitch</label
                          >
                        </div>
                        <div class="col-md-9">
                          <textarea
                            id="high-concept-pitch"
                            v-model.trim="form.firstStep.company_concept"
                            type="text"
                            placeholder="High-Concept Pitch"
                            :class="{
                              'is-valid':
                                $v.form.firstStep.company_concept.$error,
                            }"
                          ></textarea>
                          <div
                            v-if="$v.form.firstStep.company_concept.$error"
                            class="is-valid-text"
                          >
                            <span
                              v-if="!$v.form.firstStep.company_concept.required"
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
                            v-model.trim="form.firstStep.company_product"
                            type="text"
                            placeholder="Product"
                            :class="{
                              'is-valid':
                                $v.form.firstStep.company_product.$error,
                            }"
                          ></textarea>
                          <div
                            v-if="$v.form.firstStep.company_product.$error"
                            class="is-valid-text"
                          >
                            <span
                              v-if="!$v.form.firstStep.company_product.required"
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt.
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
                              v-model.trim="form.firstStep.project_title"
                              type="text"
                              placeholder="Title"
                              :class="{
                                'is-valid':
                                  $v.form.firstStep.project_title.$error,
                              }"
                            />
                            <div
                              v-if="$v.form.firstStep.project_title.$error"
                              class="is-valid-text"
                            >
                              <span
                                v-if="!$v.form.firstStep.project_title.required"
                                >Title is required</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="input">
                        <div class="row">
                          <div class="col-md-3">
                            <label for="project-sub-title"
                              >Subtitle (optional)</label
                            >
                          </div>
                          <div class="col-md-9">
                            <input
                              id="project-sub-title"
                              v-model.trim="form.firstStep.project_subtitle"
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt.
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
                                v-model="form.firstStep.project_category"
                                :clearable="false"
                                :options="form.firstStep.projectCategoryOptions"
                                placeholder="Select Industry"
                                :class="{
                                  'is-valid':
                                    $v.form.firstStep.project_category.$error,
                                }"
                              />
                            </div>
                            <div
                              v-if="$v.form.firstStep.project_category.$error"
                              class="is-valid-text"
                            >
                              <span
                                v-if="
                                  !$v.form.firstStep.project_category.required
                                "
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
                                v-model="form.firstStep.project_subcategory"
                                :clearable="false"
                                :options="
                                  form.firstStep.projectSubcategoryOptions
                                "
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt.
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
                              v-model.trim="form.firstStep.project_description"
                              type="text"
                              placeholder="Write about your project like you’re explaining it to a friend…"
                              :class="{
                                'is-valid':
                                  $v.form.firstStep.project_description.$error,
                              }"
                            ></textarea>
                            <div
                              v-if="
                                $v.form.firstStep.project_description.$error
                              "
                              class="is-valid-text"
                            >
                              <span
                                v-if="
                                  !$v.form.firstStep.project_description
                                    .required
                                "
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
                              v-model="form.firstStep.project_price"
                              type="text"
                              placeholder="Project Price"
                              :class="{
                                'is-valid':
                                  $v.form.firstStep.project_price.$error,
                              }"
                            />
                            <div
                              v-if="$v.form.firstStep.project_price.$error"
                              class="is-valid-text"
                            >
                              <span
                                v-if="!$v.form.firstStep.project_price.required"
                                >Project Price is required</span
                              >
                              <span
                                v-if="!$v.form.firstStep.project_price.numeric"
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
            </div>

            <div v-if="step == 2" class="second-step">
              <div class="form">
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
                            form.user.avatar
                              ? form.user.avatar
                              : '/images/edit-profile-page/avatar.svg'
                          "
                          alt="avatar"
                        />
                      </div>
                      <div class="text">
                        <div class="name">
                          {{ form.user.name }}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="member-group">
                    <div class="text">
                      <div class="title">
                        <h3><b>Founder</b> (optional)</h3>
                      </div>
                      <div class="description">
                        People who work at your startup
                      </div>
                    </div>
                    <div
                      v-if="
                        form.secondStep.fields.members.founders.showList ||
                        (form.secondStep.data &&
                          form.secondStep.data.hasOwnProperty('founders'))
                      "
                      class="list"
                    >
                      <div
                        v-for="(member, index) in form.secondStep.members
                          .founders"
                        :key="index"
                      >
                        <div v-if="!member.edit" class="member">
                          <div class="info">
                            <span class="email"
                              ><div class="icon">
                                <i class="fas fa-envelope"></i>
                              </div>
                              <b>Email:</b
                              ><a :href="`mailto:${member.email}`">{{
                                member.email
                              }}</a></span
                            >
                            <span class="url"
                              ><span class="icon"
                                ><i class="fas fa-user-tag"></i></span
                              ><span class="role"
                                ><b>Role:</b>{{ member.role }}</span
                              ></span
                            >
                          </div>
                          <div class="nav">
                            <div class="edit" @click="handleEditMember(member)">
                              <i class="fal fa-pencil"></i>
                            </div>
                            <div
                              class="delete"
                              @click="handleDeleteMember('founders', index)"
                            >
                              <i class="fal fa-trash-alt"></i>
                            </div>
                          </div>
                        </div>
                        <div v-if="member.edit" class="form">
                          <RoleMemberForm
                            :email="member.email"
                            :role="member.role"
                            :options="form.secondStep.memberRoleOptions"
                            @onSubmit="
                              handleSubmitMemberForm($event, 'founders', index)
                            "
                            @onCancel="
                              handleCancelMemberForm('founders', index)
                            "
                          />
                        </div>
                      </div>
                    </div>
                    <div class="add-member">
                      <div
                        v-if="!form.secondStep.fields.members.founders.showForm"
                        class="link"
                        @click="handleShowAddMemberForm('founders')"
                      >
                        Add a founder +
                      </div>
                      <div
                        v-if="form.secondStep.fields.members.founders.showForm"
                        class="form"
                      >
                        <RoleMemberForm
                          :options="form.secondStep.memberRoleOptions"
                          @onSubmit="handleSubmitMemberForm($event, 'founders')"
                          @onCancel="handleCancelMemberForm('founders')"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="member-group">
                    <div class="text">
                      <div class="title">
                        <h3><b>Team</b> (optional)</h3>
                      </div>
                      <div class="description">
                        People who work at your startup
                      </div>
                    </div>
                    <div
                      v-if="
                        form.secondStep.fields.members.team.showList ||
                        (form.secondStep.data &&
                          form.secondStep.data.hasOwnProperty('team'))
                      "
                      class="list"
                    >
                      <div
                        v-for="(member, index) in form.secondStep.members.team"
                        :key="index"
                      >
                        <div v-if="!member.edit" class="member">
                          <div class="info">
                            <span class="email"
                              ><div class="icon">
                                <i class="fas fa-envelope"></i>
                              </div>
                              <b>Email:</b
                              ><a :href="`mailto:${member.email}`">{{
                                member.email
                              }}</a></span
                            >
                            <span class="url"
                              ><span class="icon"
                                ><i class="fas fa-user-tag"></i></span
                              ><span class="role"
                                ><b>Role:</b>{{ member.role }}</span
                              ></span
                            >
                          </div>
                          <div class="nav">
                            <div class="edit" @click="handleEditMember(member)">
                              <i class="fal fa-pencil"></i>
                            </div>
                            <div
                              class="delete"
                              @click="handleDeleteMember('team', index)"
                            >
                              <i class="fal fa-trash-alt"></i>
                            </div>
                          </div>
                        </div>
                        <div v-if="member.edit" class="form">
                          <RoleMemberForm
                            :email="member.email"
                            :role="member.role"
                            :options="form.secondStep.memberRoleOptions"
                            @onSubmit="
                              handleSubmitMemberForm($event, 'team', index)
                            "
                            @onCancel="handleCancelMemberForm('team', index)"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="add-member">
                      <div
                        v-if="!form.secondStep.fields.members.team.showForm"
                        class="link"
                        @click="handleShowAddMemberForm('team')"
                      >
                        Add an employee +
                      </div>
                      <div
                        v-if="form.secondStep.fields.members.team.showForm"
                        class="form"
                      >
                        <RoleMemberForm
                          :options="form.secondStep.memberRoleOptions"
                          @onSubmit="handleSubmitMemberForm($event, 'team')"
                          @onCancel="handleCancelMemberForm('team')"
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
                        form.secondStep.fields.members.investors.showList ||
                        (form.secondStep.members &&
                          form.secondStep.members.hasOwnProperty('members'))
                      "
                      class="list"
                    >
                      <div
                        v-for="(member, index) in form.secondStep.members
                          .investors"
                        :key="index"
                      >
                        <div v-if="!member.edit" class="member">
                          <div class="info">
                            <span class="name"
                              ><div class="icon">
                                <i class="fas fa-user"></i>
                              </div>
                              <b>Name:</b> {{ member.name }}</span
                            >
                            <span class="url"
                              ><span class="icon"
                                ><i class="fab fa-linkedin"></i></span
                              ><b>Url:</b
                              ><a :href="`${member.url}`">{{
                                member.url
                              }}</a></span
                            >
                          </div>
                          <div class="nav">
                            <div class="edit" @click="handleEditMember(member)">
                              <i class="fal fa-pencil"></i>
                            </div>
                            <div
                              class="delete"
                              @click="handleDeleteMember('investors', index)"
                            >
                              <i class="fal fa-trash-alt"></i>
                            </div>
                          </div>
                        </div>
                        <div v-if="member.edit" class="form">
                          <UrlMemberForm
                            :name="member.name"
                            :url="member.url"
                            @onSubmit="
                              handleSubmitMemberForm($event, 'investors', index)
                            "
                            @onCancel="
                              handleCancelMemberForm('investors', index)
                            "
                          />
                        </div>
                      </div>
                    </div>
                    <div class="add-member">
                      <div
                        v-if="
                          !form.secondStep.fields.members.investors.showForm
                        "
                        class="link"
                        @click="handleShowAddMemberForm('investors')"
                      >
                        Add an investor +
                      </div>
                      <div
                        v-if="form.secondStep.fields.members.investors.showForm"
                        class="form"
                      >
                        <UrlMemberForm
                          @onSubmit="
                            handleSubmitMemberForm($event, 'investors')
                          "
                          @onCancel="handleCancelMemberForm('investors')"
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
                        form.secondStep.fields.members.incubator.showList ||
                        (form.secondStep.members &&
                          form.secondStep.members.hasOwnProperty('incubator'))
                      "
                      class="list"
                    >
                      <div
                        v-for="(member, index) in form.secondStep.members
                          .incubator"
                        :key="index"
                      >
                        <div v-if="!member.edit" class="member">
                          <div class="info">
                            <span class="name"
                              ><div class="icon">
                                <i class="fas fa-user"></i>
                              </div>
                              <b>Name:</b> {{ member.name }}</span
                            >
                            <span class="url"
                              ><span class="icon"
                                ><i class="fab fa-linkedin"></i></span
                              ><b>Url:</b
                              ><a :href="`${member.url}`">{{
                                member.url
                              }}</a></span
                            >
                          </div>
                          <div class="nav">
                            <div class="edit" @click="handleEditMember(member)">
                              <i class="fal fa-pencil"></i>
                            </div>
                            <div
                              class="delete"
                              @click="handleDeleteMember('incubator', index)"
                            >
                              <i class="fal fa-trash-alt"></i>
                            </div>
                          </div>
                        </div>
                        <div v-if="member.edit" class="form">
                          <UrlMemberForm
                            :name="member.name"
                            :url="member.url"
                            @onSubmit="
                              handleSubmitMemberForm($event, 'incubator', index)
                            "
                            @onCancel="
                              handleCancelMemberForm('incubator', index)
                            "
                          />
                        </div>
                      </div>
                    </div>
                    <div class="add-member">
                      <div
                        v-if="
                          !form.secondStep.fields.members.incubator.showForm
                        "
                        class="link"
                        @click="handleShowAddMemberForm('incubator')"
                      >
                        Add an incubator +
                      </div>
                      <div
                        v-if="form.secondStep.fields.members.incubator.showForm"
                        class="form"
                      >
                        <UrlMemberForm
                          @onSubmit="
                            handleSubmitMemberForm($event, 'incubator')
                          "
                          @onCancel="handleCancelMemberForm('incubator')"
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
                        form.secondStep.fields.members.advisors.showList ||
                        (form.secondStep.members &&
                          form.secondStep.members.hasOwnProperty('advisors'))
                      "
                      class="list"
                    >
                      <div
                        v-for="(member, index) in form.secondStep.members
                          .advisors"
                        :key="index"
                      >
                        <div v-if="!member.edit" class="member">
                          <div class="info">
                            <span class="name"
                              ><div class="icon">
                                <i class="fas fa-user"></i>
                              </div>
                              <b>Name:</b> {{ member.name }}</span
                            >
                            <span class="url"
                              ><span class="icon"
                                ><i class="fab fa-linkedin"></i></span
                              ><b>Url:</b
                              ><a :href="`${member.url}`">{{
                                member.url
                              }}</a></span
                            >
                          </div>
                          <div class="nav">
                            <div class="edit" @click="handleEditMember(member)">
                              <i class="fal fa-pencil"></i>
                            </div>
                            <div
                              class="delete"
                              @click="handleDeleteMember('advisors', index)"
                            >
                              <i class="fal fa-trash-alt"></i>
                            </div>
                          </div>
                        </div>
                        <div v-if="member.edit" class="form">
                          <UrlMemberForm
                            :name="member.name"
                            :url="member.url"
                            @onSubmit="
                              handleSubmitMemberForm($event, 'advisors', index)
                            "
                            @onCancel="
                              handleCancelMemberForm('advisors', index)
                            "
                          />
                        </div>
                      </div>
                    </div>
                    <div class="add-member">
                      <div
                        v-if="!form.secondStep.fields.members.advisors.showForm"
                        class="link"
                        @click="handleShowAddMemberForm('advisors')"
                      >
                        Add an advisor +
                      </div>
                      <div
                        v-if="form.secondStep.fields.members.advisors.showForm"
                        class="form"
                      >
                        <UrlMemberForm
                          @onSubmit="handleSubmitMemberForm($event, 'advisors')"
                          @onCancel="handleCancelMemberForm('advisors')"
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
                        form.secondStep.fields.members.partners.showList ||
                        (form.secondStep.members &&
                          form.secondStep.members.hasOwnProperty('partners'))
                      "
                      class="list"
                    >
                      <div
                        v-for="(member, index) in form.secondStep.members
                          .partners"
                        :key="index"
                      >
                        <div v-if="!member.edit" class="member">
                          <div class="info">
                            <span class="name"
                              ><div class="icon">
                                <i class="fas fa-user"></i>
                              </div>
                              <b>Name:</b> {{ member.name }}</span
                            >
                            <span class="url"
                              ><span class="icon"
                                ><i class="fab fa-linkedin"></i></span
                              ><b>Url:</b
                              ><a :href="`${member.url}`">{{
                                member.url
                              }}</a></span
                            >
                          </div>
                          <div class="nav">
                            <div class="edit" @click="handleEditMember(member)">
                              <i class="fal fa-pencil"></i>
                            </div>
                            <div
                              class="delete"
                              @click="handleDeleteMember('partners', index)"
                            >
                              <i class="fal fa-trash-alt"></i>
                            </div>
                          </div>
                        </div>
                        <div v-if="member.edit" class="form">
                          <UrlMemberForm
                            :name="member.name"
                            :url="member.url"
                            @onSubmit="
                              handleSubmitMemberForm($event, 'partners', index)
                            "
                            @onCancel="
                              handleCancelMemberForm('partners', index)
                            "
                          />
                        </div>
                      </div>
                    </div>
                    <div class="add-member">
                      <div
                        v-if="!form.secondStep.fields.members.partners.showForm"
                        class="link"
                        @click="handleShowAddMemberForm('partners')"
                      >
                        Add a partner +
                      </div>
                      <div
                        v-if="form.secondStep.fields.members.partners.showForm"
                        class="form"
                      >
                        <UrlMemberForm
                          @onSubmit="handleSubmitMemberForm($event, 'partners')"
                          @onCancel="handleCancelMemberForm('partners')"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div v-if="step == 3" class="third-step">
              <div class="form">
                <form>
                  <div class="project-documents">
                    <div class="text">
                      <div class="title">
                        <h2>Project documents</h2>
                      </div>
                      <div class="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt.
                      </div>
                    </div>
                    <div class="drop-file">
                      <label for="">1. Executive Summary</label>
                      <div
                        class="file-upload"
                        @click="onFileUploadTriggerClick('file_1')"
                      >
                        <div
                          v-if="!form.thirdStep.files.file_1.showFileName"
                          class="file-label"
                        >
                          <i class="far fa-paperclip"></i
                          ><span>Drop the document, or select a file.</span>
                        </div>
                        <div
                          v-if="form.thirdStep.files.file_1.showFileName"
                          class="file-name"
                          @click.stop
                        >
                          <span class="icon"
                            ><i class="fal fa-file-alt"></i></span
                          ><span>{{
                            form.thirdStep.files.file_1.file_name
                          }}</span
                          ><span
                            class="delete"
                            @click.stop="onDeleteFileFromUpload('file_1')"
                            ><i class="fal fa-trash-alt"></i
                          ></span>
                        </div>
                        <input
                          ref="file_1"
                          type="file"
                          @change="onFileUpload('file_1')"
                        />
                      </div>
                    </div>
                    <div class="drop-file">
                      <label for="">2. Executive Summary</label>
                      <div
                        class="file-upload"
                        @click="onFileUploadTriggerClick('file_2')"
                      >
                        <div
                          v-if="!form.thirdStep.files.file_2.showFileName"
                          class="file-label"
                        >
                          <i class="far fa-paperclip"></i
                          ><span>Drop the document, or select a file.</span>
                        </div>
                        <div
                          v-if="form.thirdStep.files.file_2.showFileName"
                          class="file-name"
                          @click.stop
                        >
                          <span class="icon"
                            ><i class="fal fa-file-alt"></i></span
                          ><span>{{
                            form.thirdStep.files.file_2.file_name
                          }}</span
                          ><span
                            class="delete"
                            @click.stop="onDeleteFileFromUpload('file_2')"
                            ><i class="fal fa-trash-alt"></i
                          ></span>
                        </div>
                        <input
                          ref="file_2"
                          type="file"
                          @change="onFileUpload('file_2')"
                        />
                      </div>
                    </div>
                    <div class="drop-file">
                      <label for="">3. Executive Summary</label>
                      <div
                        class="file-upload"
                        @click="onFileUploadTriggerClick('file_3')"
                      >
                        <div
                          v-if="!form.thirdStep.files.file_3.showFileName"
                          class="file-label"
                        >
                          <i class="far fa-paperclip"></i
                          ><span>Drop the document, or select a file.</span>
                        </div>
                        <div
                          v-if="form.thirdStep.files.file_3.showFileName"
                          class="file-name"
                          @click.stop
                        >
                          <span class="icon"
                            ><i class="fal fa-file-alt"></i></span
                          ><span>{{
                            form.thirdStep.files.file_3.file_name
                          }}</span
                          ><span
                            class="delete"
                            @click.stop="onDeleteFileFromUpload('file_3')"
                            ><i class="fal fa-trash-alt"></i
                          ></span>
                        </div>
                        <input
                          ref="file_3"
                          type="file"
                          @change="onFileUpload('file_3')"
                        />
                      </div>
                    </div>
                    <div class="drop-file">
                      <label for="">4. Executive Summary</label>
                      <div
                        class="file-upload"
                        @click="onFileUploadTriggerClick('file_4')"
                      >
                        <div
                          v-if="!form.thirdStep.files.file_4.showFileName"
                          class="file-label"
                        >
                          <i class="far fa-paperclip"></i
                          ><span>Drop the document, or select a file.</span>
                        </div>
                        <div
                          v-if="form.thirdStep.files.file_4.showFileName"
                          class="file-name"
                          @click.stop
                        >
                          <span class="icon"
                            ><i class="fal fa-file-alt"></i></span
                          ><span>{{
                            form.thirdStep.files.file_4.file_name
                          }}</span
                          ><span
                            class="delete"
                            @click.stop="onDeleteFileFromUpload('file_4')"
                            ><i class="fal fa-trash-alt"></i
                          ></span>
                        </div>
                        <input
                          ref="file_4"
                          type="file"
                          @change="onFileUpload('file_4')"
                        />
                      </div>
                    </div>
                    <div class="drop-file">
                      <label for="">5. Executive Summary</label>
                      <div
                        class="file-upload"
                        @click="onFileUploadTriggerClick('file_5')"
                      >
                        <div
                          v-if="!form.thirdStep.files.file_5.showFileName"
                          class="file-label"
                        >
                          <i class="far fa-paperclip"></i
                          ><span>Drop the document, or select a file.</span>
                        </div>
                        <div
                          v-if="form.thirdStep.files.file_5.showFileName"
                          class="file-name"
                          @click.stop
                        >
                          <span class="icon"
                            ><i class="fal fa-file-alt"></i></span
                          ><span>{{
                            form.thirdStep.files.file_5.file_name
                          }}</span
                          ><span
                            class="delete"
                            @click.stop="onDeleteFileFromUpload('file_5')"
                            ><i class="fal fa-trash-alt"></i
                          ></span>
                        </div>
                        <input
                          ref="file_5"
                          type="file"
                          @change="onFileUpload('file_5')"
                        />
                      </div>
                    </div>
                    <div class="complite-changes">
                      <span
                        ><b>20%</b> complete, <b>20%</b> chance of getting
                        investment</span
                      ><i class="fas fa-info-circle"></i>
                    </div>
                  </div>
                  <hr />
                  <div class="other-documents">
                    <div class="other-group">
                      <div class="text">
                        <div class="title">
                          <h2>Other Documents (optional)</h2>
                        </div>
                        <div class="description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt.
                        </div>
                      </div>
                      <div class="drop-file">
                        <div
                          class="file-upload"
                          @click="onFileUploadTriggerClick('file_6')"
                        >
                          <div
                            v-if="!form.thirdStep.files.file_6.showFileName"
                            class="file-label"
                          >
                            <i class="far fa-paperclip"></i
                            ><span>Drop the document, or select a file.</span>
                          </div>
                          <div
                            v-if="form.thirdStep.files.file_6.showFileName"
                            class="file-name"
                            @click.stop
                          >
                            <span class="icon"
                              ><i class="fal fa-file-alt"></i></span
                            ><span>{{
                              form.thirdStep.files.file_6.file_name
                            }}</span
                            ><span
                              class="delete"
                              @click.stop="onDeleteFileFromUpload('file_6')"
                              ><i class="fal fa-trash-alt"></i
                            ></span>
                          </div>
                          <input
                            ref="file_6"
                            type="file"
                            @change="onFileUpload('file_6')"
                          />
                        </div>
                      </div>
                      <hr />
                      <div class="text">
                        <div class="title">
                          <h2>Project video (optional)</h2>
                        </div>
                        <div class="description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt.
                        </div>
                      </div>

                      <div class="input">
                        <div class="row">
                          <div class="col-md-3">
                            <label for="youtube-or-vimeo"
                              >Link a Youtube or Vimeo</label
                            >
                          </div>
                          <div class="col-md-9">
                            <div class="input">
                              <input
                                v-model="form.thirdStep.project_video"
                                type="text"
                                placeholder="https://"
                                :class="{
                                  'is-valid':
                                    $v.form.thirdStep.project_video.$error,
                                }"
                              />
                              <div
                                v-if="$v.form.thirdStep.project_video.$error"
                                class="is-valid-text"
                              >
                                <span
                                  v-if="
                                    !$v.form.thirdStep.project_video.required
                                  "
                                  >Url is required</span
                                >
                                <span
                                  v-if="!$v.form.thirdStep.project_video.url"
                                  >Url is invalid</span
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div class="checkbox">
                      <input
                        id="accepted"
                        type="checkbox"
                        @input="onAccepterdTheTermsOfService"
                      />
                      <label for="accepted"
                        >I have read and accepted the
                        <a href="">Terms of Service</a></label
                      >
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div v-if="step == 1" class="navigation">
          <button type="button" class="next" @click="next">Next</button>
        </div>
        <div v-if="step == 2" class="navigation">
          <button type="button" class="save-to-drafts" @click="saveToDrafts">
            Save to drafts
          </button>
          <button type="button" class="prev" @click="prev">Prev</button>
          <button type="button" class="next" @click="next">Next</button>
        </div>
        <div v-if="step == 3" class="navigation">
          <button type="button" class="save-to-drafts" @click="saveToDrafts">
            Save to drafts
          </button>
          <button type="button" class="prev" @click="prev">Prev</button>
          <button
            type="submit"
            class="submit"
            :disabled="form.thirdStep.acccepterdTheTermsOfService"
            @click="onSubmitApplications"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import _ from 'lodash'
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
import RoleMemberForm from '@components/Dashboard/Applications/RoleMemberForm'
import UrlMemberForm from '@components/Dashboard/Applications/UrlMemberForm'
import { validationMixin } from 'vuelidate'

export default {
  components: {
    Treeselect,
    Preloader,
    RoleMemberForm,
    UrlMemberForm,
  },
  mixins: [validationMixin],
  layout: 'LayoutApplication',
  props: ['scroll'],
  data() {
    return {
      preloader: true,
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
            members: {
              founders: {
                showForm: false,
                showList: false,
              },
              team: {
                showForm: false,
                showList: false,
              },
              investors: {
                showForm: false,
                showList: false,
              },
              incubator: {
                showForm: false,
                showList: false,
              },
              advisors: {
                showForm: false,
                showList: false,
              },
              partners: {
                showForm: false,
                showList: false,
              },
            },
          },
          members: {
            founders: [],
            team: [],
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
      secondStep: {},
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
    getApplication() {
      if (sessionStorage.getItem('applicationId')) {
        this.step = sessionStorage.getItem('applicationStep')
      }
      if (sessionStorage.getItem('applicationId')) {
        this.applicationId = sessionStorage.getItem('applicationId')
        this.$store
          .dispatch('GETAPPLICATION', this.applicationId)
          .then((response) => {
            delete response.data.roles.founder
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
          })
          .catch((error) => {
            this.errors = error.response.data
          })
      }
      this.preloader = false
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

    next() {
      if (this.step == 1) {
        this.$v.form.firstStep.$touch()
        if (this.$v.form.firstStep.$invalid) {
          return
        } else if (sessionStorage.getItem('applicationId') == null) {
          const formData = serialize(this.form.firstStep, { indices: true })
          this.$store
            .dispatch('CREATEAPPLICATION', formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            })
            .then((response) => {
              this.step++
              sessionStorage.setItem('applicationId', response.data.id)
              sessionStorage.setItem('applicationStep', this.step)
              this.scroll.scrollTo(
                {
                  y: 0,
                },
                0
              )
            })
            .catch((error) => {
              this.errors = error.response.data
            })
        } else {
          const formData = serialize(this.form.firstStep)
          const id = sessionStorage.getItem('applicationId')
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
              this.step++
              sessionStorage.setItem('applicationStep', this.step)
              this.scroll.scrollTo(
                {
                  y: 0,
                },
                0
              )
            })
            .catch((error) => {
              this.errors = error.response.data
            })
        }
      }
      if (this.step == 2) {
        const formData = {
          users: {
            founder: this.form.secondStep.members.founders,
            team: this.form.secondStep.members.team,
          },
          data: {
            investors: this.form.secondStep.members.investors,
            incubator: this.form.secondStep.members.incubator,
            advisors: this.form.secondStep.members.advisors,
            partners: this.form.secondStep.members.partners,
          },
          status: this.form.secondStep.status,
          step: this.form.secondStep.step,
        }

        const serializedFormData = serialize(formData, { indices: true })
        const id = sessionStorage.getItem('applicationId')
        this.$store
          .dispatch(
            'UPDATEAPPLICATION',
            { serializedFormData, id },
            {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            }
          )
          .then((response) => {
            this.step++
            sessionStorage.setItem('applicationStep', this.step)
            this.scroll.scrollTo(
              {
                y: 0,
              },
              0
            )
          })
          .catch((error) => {
            this.errors = error.response.data
          })
      }
    },
    prev() {
      this.step--
      sessionStorage.setItem('applicationStep', this.step)
      this.scroll.scrollTo(
        {
          y: 0,
        },
        0
      )
    },
    saveToDrafts() {
      this.$router.push('/applications')
    },

    /* __________ SECOND STEP BEGIN __________ */

    handleSubmitMemberForm(response, type, index = undefined) {
      if (this.form.secondStep.members == null) {
        this.form.secondStep.members = {}
      }
      if (!this.form.secondStep.members.hasOwnProperty(type)) {
        this.form.secondStep.members[type] = []
      }
      const result = { ...response, edit: false }

      if (typeof index === 'number' && ~index) {
        this.form.secondStep.members[type].splice(index, 1, result)
      } else {
        this.form.secondStep.members[type].push(result)
        this.form.secondStep.fields.members[type].showForm = false
        this.form.secondStep.fields.members[type].showList = true
      }
    },

    handleCancelMemberForm(type, index) {
      if (typeof index === 'number' && ~index) {
        this.form.secondStep.members[type][index].edit = false
      } else {
        this.form.secondStep.fields.members[type].showForm = false
      }
    },

    handleShowAddMemberForm(type) {
      this.form.secondStep.fields.members[type].showForm = true
    },

    handleEditMember(member) {
      member.edit = true
    },

    handleDeleteMember(type, index) {
      this.form.secondStep.members[type].splice(index, 1)
    },

    /* __________ SECOND STEP END __________ */

    /* __________ THIRD STEP BEGIN __________ */

    onSubmitApplications() {
      const wholeForm = Object.assign(
        this.form.firstStep,
        this.form.secondStep,
        this.form.thirdStep
      )
      const formData = serialize(wholeForm, { indices: true })
      const id = sessionStorage.getItem('applicationId')
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

    onAccepterdTheTermsOfService(event) {
      this.form.thirdStep.acccepterdTheTermsOfService = !event.target.checked
    },

    onFileUploadTriggerClick(fileIndex) {
      this.$refs[fileIndex].click()
    },

    onFileUpload(fileIndex) {
      this.form.thirdStep.files[fileIndex].file = this.$refs[fileIndex].files[0]
      this.form.thirdStep.files[fileIndex].file_name = this.$refs[
        fileIndex
      ].files[0].name
      this.form.thirdStep.files[fileIndex].showFileName = true

      this.form.thirdStep.documents.push({
        file: this.form.thirdStep.files[fileIndex].file,
      })
    },

    onDeleteFileFromUpload(fileIndex) {
      this.form.thirdStep.files[fileIndex].file = null
      this.form.thirdStep.files[fileIndex].file_name = null
      this.form.thirdStep.files[fileIndex].showFileName = false
      this.$refs[fileIndex].value = null

      this.form.thirdStep.documents = this.form.thirdStep.documents.filter(
        (element) => {
          return element.id != this.form.thirdStep.files[fileIndex].id
        }
      )
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
    .steps {
      /* __________ FIRST STEP BEGIN __________*/
      .first-step {
        .form {
          max-width: 800px;
          form {
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
      }
      /* __________ FIRST STEP END __________*/
      /* __________ SECOND STEP BEGIN __________*/
      .second-step {
        .form {
          form {
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

      /* __________ SECOND STEP END __________*/

      /* __________ THIRD STEP BEGIN __________*/
      .third-step {
        hr {
          margin: 60px 0px;
          transform: translateX(-50%);
          width: 1000%;
          border: none;
          height: 1px;
          background-color: rgba(97, 140, 250, 0.3);
          color: rgba(97, 140, 250, 0.3);
        }
        .text {
          margin-bottom: 20px;
          max-width: 400px;
          .title {
            h2 {
              margin: 0px;
              margin-bottom: 10px;
              font-size: 16px;
              line-height: 1.22;
              color: #242424;
            }
          }
          .description {
            font-size: 14px;
            line-height: 1.7;
            color: #6e6e6e;
            margin-bottom: 10px;
          }
        }

        .checkbox {
          margin-bottom: 30px;
          display: flex;
          align-items: center;
          label {
            font-size: 16px;
            font-weight: 500;
            cursor: pointer;
            padding-left: 10px;
            user-select: none;
          }
          input[type='checkbox'] {
            width: 28px;
            height: 28px;
            border-radius: 5px;
            border: solid 1px #dddddd;
            background-color: #ffffff;
            -webkit-appearance: none;
            outline: none;
            cursor: pointer;
            &:checked:before {
              font-family: 'Font Awesome 5 Pro';
              font-weight: bold;
              color: rgba(0, 0, 0, 0.7);
              content: '\f00c';
              font-size: 15px;
              width: 26px;
              height: 26px;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
          a {
            text-decoration: none;
            font-weight: 700;
            color: #618cfa;
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
        .drop-file {
          padding-bottom: 30px;
          position: relative;
          width: 100%;
          label {
            font-size: 16px;
            font-weight: 700;
          }
          .file-upload {
            display: flex;
            align-items: center;
            height: 76px;
            border-radius: 5px;
            border: solid 1px #dddddd;
            background-color: #f2f5f7;
            padding: 10px 30px;

            outline: none;
            width: 100%;
            cursor: pointer;
            margin-top: 10px;

            @media (max-width: 992px) {
              margin-left: 0%;
              margin-top: 10px;
            }
            &::placeholder {
              font-weight: 400;
              color: #dddddd;
            }
            .file-label {
              span {
                font-size: 16px;
              }
              i {
                font-size: 16px;
                border-radius: 50%;
                box-shadow: 0 5px 10px 0 #c1c1c1;
                padding: 10px;
                background-color: #ffffff;
                margin-right: 10px;
                color: #000000;
              }
            }

            .file-name {
              padding: 10px 20px;
              width: 100%;
              height: 100%;
              border-radius: 10px;
              box-shadow: 0 2px 4px 0 #00000019;
              background-color: #ffffff;
              display: flex;
              align-items: center;
              span {
                font-size: 16px;
                font-weight: 600;
                line-height: 1.5;
                color: #242424;
              }
              .icon {
                i {
                  width: 26px;
                  font-size: 24px;
                  color: #618cfa;
                  margin-right: 10px;
                }
              }
              .delete {
                margin-left: auto;
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
            }
          }
          input {
            display: none;
            width: 100%;
            height: 44px;
            border-radius: 5px;
            border: solid 1px #dddddd;
            background-color: #ffffff;
            padding: 10px;
            font-size: 16px;
            outline: none;
            font-weight: 700;
            margin-left: 300px;
            &::placeholder {
              font-weight: 400;
              color: #dddddd;
            }

            @media (max-width: 992px) {
              margin-left: 0%;
              margin-top: 10px;
            }
          }
        }
        .input {
          margin-bottom: 10px;
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

        .complite-changes {
          display: inline-flex;
          align-items: center;
          padding: 50px 30px;
          border-radius: 20px;
          background-color: #f5b325;
          height: 20px;
          font-size: 22px;
          line-height: 1.22;
          color: #ffffff;

          i {
            font-size: 40px;
            margin-left: 30px;
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
  /* __________ THIRD STEP END __________*/
}
</style>
