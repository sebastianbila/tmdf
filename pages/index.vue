<template>
  <div class="home-page">
    <Preloader :show="preloader"></Preloader>
    <section class="header">
      <div class="header-top">
        <NavigationMenu></NavigationMenu>
      </div>
      <div class="header-bottom">
        <div class="container">
          <div class="slider">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="slide">
                    <div class="text">
                      <div class="title">
                        <h1>
                          Helping Founders get their
                          <span class="blue">MVPs</span> built
                        </h1>
                      </div>
                      <div class="descripton">
                        The Million Dollar Fund is an online business incubator
                        network, launching MVPs from the pre-seed & bootstrap
                        phases.
                      </div>
                      <div class="button">
                        <button type="button" class="btn-blue">Apply</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="slide">
                    <div class="text">
                      <div class="title">
                        <h1>
                          Helping Founders get their
                          <span class="blue">MVPs</span> built
                        </h1>
                      </div>
                      <div class="descripton">
                        The Million Dollar Fund is an online business incubator
                        network, launching MVPs from the pre-seed & bootstrap
                        phases.
                      </div>
                      <div class="button">
                        <button type="button" class="btn-blue">Apply</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
            <div class="swiper-navigation">
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="what-is">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="heading">
              <h2>The Million Dollar Fund</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="images d-none d-lg-block">
              <div v-if="isActiveTab('entrepreneurs')" class="image">
                <img src="/images/home-page/what-is/entrepreneurs.png" />
              </div>
              <div v-if="isActiveTab('angels')" class="image">
                <img src="/images/home-page/what-is/angels.png" />
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="text">
              <div class="images d-block d-lg-none">
                <div v-if="isActiveTab('entrepreneurs')" class="image">
                  <img
                    src="/images/home-page/what-is/entrepreneurs.png"
                  />
                </div>
                <div v-if="isActiveTab('angels')" class="image">
                  <img src="/images/home-page/what-is/angels.png" />
                </div>
              </div>
              <div class="tabs">
                <div class="tabs-nav">
                  <div
                    class="tab"
                    :class="{
                      active: isActiveTab('entrepreneurs'),
                    }"
                    @click.prevent="setActiveTab('entrepreneurs')"
                  >
                    <img src="/images/home-page/what-is/light.svg" />
                    <span>Entrepreneurs</span>
                  </div>
                  <div
                    class="tab"
                    :class="{
                      active: isActiveTab('angels'),
                    }"
                    @click.prevent="setActiveTab('angels')"
                  >
                    <img src="/images/home-page/what-is/bag.svg" /><span
                      >Angels</span
                    >
                  </div>
                </div>
                <div class="tabs-content">
                  <div v-show="isActiveTab('angels')" class="tab-content">
                    <div class="description">
                      In a world where startups are more competitive than ever,
                      taking the first steps to funding your venture can be
                      frustrating and difficult. Few startups make their process
                      accessible to rising entrepreneurs while bringing
                      experienced investors and product strategists to follow
                      through on their vision. That’s why Xicay Ventures aims to
                      build ideas into MVPs through The Million Dollar Fund, by
                      giving a new path forward for entrepreneurs.
                    </div>
                    <div class="button">
                      <button class="btn-blue">Learn more</button>
                    </div>
                  </div>
                  <div
                    v-show="isActiveTab('entrepreneurs')"
                    class="tab-content"
                  >
                    <div class="description">
                      In a world where startups are more competitive than ever,
                      taking the first steps to funding your venture can be
                      frustrating and difficult. Few startups make their process
                      accessible to rising entrepreneurs while bringing
                      experienced investors and product strategists to follow
                      through on their vision. That’s why Xicay Ventures aims to
                      build ideas into MVPs through The Million Dollar Fund, by
                      giving a new path forward for entrepreneurs.
                    </div>
                    <div class="button">
                      <button class="btn-blue">Learn more</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mvp">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="text">
              <div class="title"><h2>What is the Million Dollar Fund</h2></div>
              <div class="description">
                <p>
                  We provide the space for entrepreneurs to connect with angel
                  investors at the early , bootstrap phase. Once an angel is
                  ready to invest in a founder, we fund the development costs of
                  turning their project into an MVP.
                </p>
              </div>
              <div class="image d-block d-lg-none">
                <img src="/images/home-page/mvp/tree-circles.svg" />
              </div>
              <div class="button d-none d-lg-block">
                <button class="btn-blue">Learn more</button>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="image d-none d-lg-block">
              <img src="/images/home-page/mvp/tree-circles.svg" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="how-does-it-work">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="heading">
              <h2>How Does It Work?</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="slider-nav">
              <div class="swiper-container">
                <div class="swiper-wrapper swiper-no-swiping">
                  <div class="swiper-slide">
                    <div
                      class="step"
                      :class="{
                        active: isActiveStep(1),
                      }"
                      @click="setActiveStep(1)"
                    >
                      <div class="circle"></div>
                      <div class="title">Apply</div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div
                      class="step"
                      :class="{
                        active: isActiveStep(2),
                      }"
                      @click="setActiveStep(2)"
                    >
                      <div class="circle"></div>
                      <div class="title">Pre-Screen</div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div
                      class="step"
                      :class="{
                        active: isActiveStep(3),
                      }"
                      @click="setActiveStep(3)"
                    >
                      <div class="circle"></div>
                      <div class="title">Screening</div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div
                      class="step"
                      :class="{
                        active: isActiveStep(4),
                      }"
                      @click="setActiveStep(4)"
                    >
                      <div class="circle"></div>
                      <div class="title">Approval</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="slider-for">
              <div class="swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="slide">
                      <div class="row">
                        <div class="col-lg-6">
                          <div class="image d-block d-lg-none">
                            <img
                              src="/static/images/home-page/how-does-it-work/how-does-it-work.svg"
                              class="image"
                            />
                          </div>
                          <div class="text">
                            <div class="number">01</div>
                            <div class="title">
                              <h4>Apply for a grant online 1</h4>
                            </div>
                            <div class="descripton">
                              <p>
                                Have an idea for a service or product? Start to
                                build your MVP by creating a profile and
                                submitting at
                                <a href="themilliondollarfund.com"
                                  >themilliondollarfund.com.</a
                                >
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="image d-none d-lg-block">
                            <img
                              src="/static/images/home-page/how-does-it-work/how-does-it-work.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="button">
                            <button class="btn-blue">Submit aplication</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="slide">
                      <div class="row">
                        <div class="col-lg-6">
                          <div class="image d-block d-lg-none">
                            <img
                              src="/static/images/home-page/how-does-it-work/how-does-it-work.svg"
                            />
                          </div>
                          <div class="text">
                            <div class="number">02</div>
                            <div class="title">
                              <h4>Apply for a grant online 2</h4>
                            </div>
                            <div class="descripton">
                              <p>
                                Have an idea for a service or product? Start to
                                build your MVP by creating a profile and
                                submitting at
                                <a href="themilliondollarfund.com"
                                  >themilliondollarfund.com.</a
                                >
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="image d-none d-lg-block">
                            <img
                              src="/static/images/home-page/how-does-it-work/how-does-it-work.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="button">
                            <button class="btn-blue">Submit aplication</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="slide">
                      <div class="row">
                        <div class="col-lg-6">
                          <div class="image d-block d-lg-none">
                            <img
                              src="/static/images/home-page/how-does-it-work/how-does-it-work.svg"
                            />
                          </div>
                          <div class="text">
                            <div class="number">03</div>
                            <div class="title">
                              <h4>Apply for a grant online 3</h4>
                            </div>
                            <div class="descripton">
                              <p>
                                Have an idea for a service or product? Start to
                                build your MVP by creating a profile and
                                submitting at
                                <a href="themilliondollarfund.com"
                                  >themilliondollarfund.com.</a
                                >
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="image d-none d-lg-block">
                            <img
                              src="/static/images/home-page/how-does-it-work/how-does-it-work.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="button">
                            <button class="btn-blue">Submit aplication</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="slide">
                      <div class="row">
                        <div class="col-lg-6">
                          <div class="image d-block d-lg-none">
                            <img
                              src="/static/images/home-page/how-does-it-work/how-does-it-work.svg"
                            />
                          </div>
                          <div class="text">
                            <div class="number">04</div>
                            <div class="title">
                              <h4>Apply for a grant online 4</h4>
                            </div>
                            <div class="descripton">
                              <p>
                                Have an idea for a service or product? Start to
                                build your MVP by creating a profile and
                                submitting at
                                <a href="themilliondollarfund.com"
                                  >themilliondollarfund.com.</a
                                >
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="image d-none d-lg-block">
                            <img
                              src="/static/images/home-page/how-does-it-work/how-does-it-work.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-12">
                          <div class="button">
                            <button class="btn-blue">Submit aplication</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-navigation">
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="your-idea">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="text">
              <div class="title">
                <h2>
                  We help entrepreneurs develop and launch MVPs for their
                  amazing ideas!
                </h2>
              </div>
              <div class="description">
                Entrepreneurs in the
                <span class="blue"
                  >pre-seed/bootstrap phase of development</span
                >
                are the ideal candidates for The Million Dollar Fund. Founders
                need a feasible, creative idea that they are looking to build
                into a product, service, or company. Turning your idea into a
                successful first version MVP is the first stage of becoming
                market-ready.
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="image">
              <img src="/static/images/home-page/your-idea/image.svg" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="who-we-help">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="heading">
              <h2>Who we help</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="company">
              <div class="heading">
                <div class="icon">
                  <img
                    src="/static/images/home-page/who-we-help/invest.svg"
                    alt="invest"
                  />
                </div>
                <div class="title">
                  <h4>Pre-seed money entrepreneurs</h4>
                </div>
              </div>
              <div class="description">
                <p>
                  Founders who are looking for an initial investment in their
                  venture.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="company">
              <div class="heading">
                <div class="icon">
                  <img
                    src="/static/images/home-page/who-we-help/light.svg"
                    alt="light"
                  />
                </div>
                <div class="title">
                  <h4>Idea Stage</h4>
                </div>
              </div>
              <div class="description">
                <p>
                  Founders with a passionate, creative idea that they are
                  looking to build into a product, service, or company.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="company">
              <div class="heading">
                <div class="icon">
                  <img
                    src="/static/images/home-page/who-we-help/mvp.svg"
                    alt="mvp"
                  />
                </div>
                <div class="title">
                  <h4>MVP Stage</h4>
                </div>
              </div>
              <div class="description">
                <p>
                  Founders who are developing their first Minimum Viable
                  Product.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="company">
              <div class="heading">
                <div class="icon">
                  <img
                    src="/static/images/home-page/who-we-help/startup.svg"
                    alt="startup"
                  />
                </div>
                <div class="title">
                  <h4>Early Company Stage</h4>
                </div>
              </div>
              <div class="description">
                <p>
                  Founders who are building the groundwork of their company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="we-invest">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="image">
              <img src="/static/images/home-page/we-invest/image.svg" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="text">
              <div class="title"><h2>Cost Breakdown</h2></div>
              <div class="description">
                <ul>
                  <li>1. Entrepreneurus:<span class="yellow">10%</span></li>
                  <li>2. Angel:<span class="blue">45%</span></li>
                  <li>
                    3. The Million Dollar Fund:<span class="blue">45%</span>
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Velit, quae rerum veritatis assumenda ab fugit sunt nihil
                  magni praesentium incidunt quis sequi deleniti nesciunt aut
                  nemo consequatur quibusdam aperiam tempore!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="no-equity">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="text">
              <div class="title"><h2>No equity! Just Convertible Debt</h2></div>
              <div class="description">
                <p>
                  In return for our investment, we will receive a convertible
                  debt worth 2x the amount covered by our fund.
                </p>
                <p>
                  The convertible debt is 2x the 90% provided by The Million
                  Dollar Fund - no debt is taken for the 10% provided by the
                  founder. The convertible debt is our price for providing
                  essential financing and quality consulting for your early
                  development. We do not ask for any equity in your product or
                  company, allowing founders to control the future of their
                  MVPs.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="calculator">
              <div class="title">*Example</div>
              <div class="form">
                <div class="amount">
                  <span>Project Cost (100%)</span>
                  <input
                    v-model="amount"
                    v-money="money"
                    type="text"
                    placeholder="$ Amount"
                  />
                </div>
                <div class="procents">
                  <div class="founder">
                    <span>Founder's Covers (10%)</span>
                    <input v-model="founder" type="text" placeholder="$ 0" />
                  </div>
                  <div class="fund">
                    <span>Fund's Covers (90%)</span>
                    <input v-model="fund" type="text" placeholder="$ 0" />
                  </div>
                </div>
                <div class="summa">
                  <span>Convertible Debt Returned (2x)</span>
                  <input
                    v-model="summa"
                    type="text"
                    placeholder="$ 0"
                    disabled="disabled"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="featured-companies">
      <div class="container">
        <div class="heading d-block d-lg-none">
          <h2>Featured companies & quotes</h2>
        </div>
        <div class="slider">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="slide">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="text">
                        <div class="title d-none d-lg-block">
                          <h2>Featured companies & quotes</h2>
                        </div>
                        <div class="description">
                          <div class="quote">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam.”
                          </div>
                          <div class="name">Stephanie Oriate</div>
                          <div class="proffesion">Events and Sales Manager</div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="image">
                        <img
                          src="/static/images/home-page/featured-companies/featured-companies.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="slide">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="text">
                        <div class="title d-none d-lg-block">
                          <h2>Featured companies & quotes</h2>
                        </div>
                        <div class="description">
                          <div class="quote">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam.”
                          </div>
                          <div class="name">Stephanie Oriate</div>
                          <div class="proffesion">Events and Sales Manager</div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="image">
                        <img
                          src="/static/images/home-page/featured-companies/featured-companies.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="slide">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="text">
                        <div class="title d-none d-lg-block">
                          <h2>Featured companies & quotes</h2>
                        </div>
                        <div class="description">
                          <div class="quote">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam.”
                          </div>
                          <div class="name">Stephanie Oriate</div>
                          <div class="proffesion">Events and Sales Manager</div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="image">
                        <img
                          src="/static/images/home-page/featured-companies/featured-companies.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <div class="swiper-navigation">
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="dont-have-the-10">
      <div class="container">
        <div class="title">
          <h2>Don’t have the 10%? Don’t worry! We will help you raise it</h2>
        </div>
        <div class="button">
          <button class="btn-white">Sign up</button>
        </div>
      </div>
    </section>
    <section class="how-big">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="image">
              <img src="/static/images/home-page/how-big/image.svg" />
            </div>
          </div>
          <div class="col-md-12 col-lg-6">
            <div class="text">
              <div class="title">
                <h2>How big are the grants</h2>
              </div>
              <div class="description">
                <p>
                  You can jointly invest in other projects with other angels.
                  Thus, you can find projects that are in the process of
                  financing and submit a joint application for joint investment.
                  So make it easier for multiple angels to co-invest and reduce
                  risk The cost to develop an idea into a functional MVP differs
                  for every venture. The Million Dollar Fund pairs with Xicay
                  Technologies to evaluate development costs and create a
                  working estimate for the founder. These can range up to $100K!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="submit-your-pitch">
      <div class="container">
        <div class="title"><h2>Submit Your Pitch</h2></div>
        <div class="button">
          <button class="btn-white">APPLY</button>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import { VMoney } from 'v-money'
import Swiper from 'swiper/bundle'
import Preloader from '@components/Common/Preloader'
// TODO Find solution
// import '../../../../node_modules/swiper/swiper-bundle.css'
import NavigationMenu from '@components/Landing/NavigationMenu'
import Footer from '@components/Landing/Footer'
export default {
  components: {
    NavigationMenu,
    Footer,
    Preloader,
  },
  directives: { money: VMoney },
  data() {
    return {
      preloader: true,
      amount: '0',
      money: {
        decimal: '.',
        thousands: ',',
        prefix: '$ ',
        precision: '0',
        masked: false,
      },
      activeTab: 'entrepreneurs',
      activeStep: 1,
      slider: {
        swiperHeaderInit: null,
        swiperFeaturedCompaniesInit: null,
        sliderHowDoesItWorkInit: null,
        sliderHowDoesItWorkNavInit: null,
      },
      window: {
        width: 0,
        height: 0,
      },
    }
  },
  computed: {
    founder: {
      get() {
        return (
          '$ ' +
          Math.round(this.amount.replace(/\D+/g, '') * 0.1).toLocaleString(
            'en-US'
          )
        )
      },
    },
    fund: {
      get() {
        return (
          '$ ' +
          Math.round(this.amount.replace(/\D+/g, '') * 0.9).toLocaleString(
            'en-US'
          )
        )
      },
    },
    summa: {
      get() {
        return (
          '$ ' +
          Math.round(this.amount.replace(/\D+/g, '') * 0.9 * 2).toLocaleString(
            'en-US'
          )
        )
      },
    },
  },
  mounted() {
    this.sliderHeader()
    this.sliderFeaturedCompanies()
    this.sliderHowDoesItWork()
    this.sliderHowDoesItWorkNav()
    this.preloader = false
  },
  methods: {
    sliderHeader() {
      this.slider.swiperHeaderInit = new Swiper(
        '.header .slider .swiper-container',
        {
          autoHeight: true,
          loop: false,
          slidesPerView: 1,
          pagination: {
            el: '.header .slider .swiper-pagination',
            clickable: true,
          },
          effect: 'fade',
          fadeEffect: {
            crossFade: true,
          },
          navigation: {
            nextEl: '.header .slider .swiper-button-next',
            prevEl: '.header .slider .swiper-button-prev',
          },
        }
      )
    },
    sliderFeaturedCompanies() {
      this.slider.swiperFeaturedCompaniesInit = new Swiper(
        '.featured-companies .slider .swiper-container',
        {
          autoHeight: true,
          loop: false,
          slidesPerView: 1,
          pagination: {
            el: '.featured-companies .slider .swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.featured-companies .slider .swiper-button-next',
            prevEl: '.featured-companies .slider .swiper-button-prev',
          },
        }
      )
    },
    sliderHowDoesItWork() {
      this.slider.sliderHowDoesItWorkInit = new Swiper(
        '.how-does-it-work .slider-for .swiper-container',
        {
          autoHeight: true,
          loop: false,
          slidesPerView: 1,
          pagination: {
            el: '.how-does-it-work .slider-for .swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.how-does-it-work .slider-for .swiper-button-next',
            prevEl: '.how-does-it-work .slider-for .swiper-button-prev',
          },
        }
      )

      this.slider.sliderHowDoesItWorkInit.on('slideChange', (event) => {
        this.activeStep = event.activeIndex + 1
      })
    },

    sliderHowDoesItWorkNav() {
      this.slider.sliderHowDoesItWorkNavInit = new Swiper(
        '.how-does-it-work .slider-nav .swiper-container',
        {
          noSwiping: true,
          navigation: {
            nextEl: '.how-does-it-work .slider-nav .swiper-button-next',
            prevEl: '.how-does-it-work .slider-nav .swiper-button-prev',
          },
          breakpoints: {
            767: {
              slidesPerView: 1,
              noSwiping: true,
            },
            991: {
              slidesPerView: 4,
              noSwiping: true,
            },
          },
        }
      )

      this.slider.sliderHowDoesItWorkInit.controller.control = this.slider.sliderHowDoesItWorkNavInit
      this.slider.sliderHowDoesItWorkNavInit.controller.control = this.slider.sliderHowDoesItWorkInit
    },

    isActiveTab(tab) {
      return this.activeTab === tab
    },
    setActiveTab(tab) {
      this.activeTab = tab
    },

    isActiveStep(step) {
      return this.activeStep === step
    },
    setActiveStep(step) {
      this.activeStep = step
      this.slider.sliderHowDoesItWorkInit.slideTo(step - 1)
    },
  },
}
</script>
<style lang="scss" scoped>
.home-page {
  padding: 35px 0px;
  @media (max-width: 767px) {
    padding: 0px;
  }

  .container {
    border-radius: 15px;
    padding: 90px 70px;
    @media (max-width: 991px) {
      padding: 90px 90px;
    }
    @media (max-width: 767px) {
      padding: 90px 30px;
      border-radius: 0px;
    }
  }
  .button {
    width: 100%;
  }
  .btn-blue,
  .btn-white {
    width: 100%;
    max-width: 236px;
  }
  /* __________ HEADER  BEGIN __________*/
  .header {
    padding: 0px 30px;
    @media (max-width: 767px) {
      margin-bottom: 0px;
      padding: 0px;
    }
    .header-top {
      z-index: 5;
      position: relative;
    }

    .header-bottom {
      margin-top: -104px;
      overflow: hidden;
      .container {
        padding: 0px;
      }

      .slider {
        position: relative;
        .swiper-container {
          border-radius: 15px;
          overflow: hidden;
          @media (max-width: 767px) {
            border-radius: 0px;
          }
          .swiper-slide {
            &:nth-child(1) {
              .slide {
                background-image: url('/static/images/home-page/header/bg-header-hand.svg');
                padding: 170px 80px 120px 100px;
                background-position: 119% 140%;
                background-repeat: no-repeat;
                background-size: 600px;
                background-color: #f2f5f7;

                @media (max-width: 991px) {
                  padding: 180px 80px 150px 80px;
                  background-position: 150% 100%;
                  background-image: url('/static/images/home-page/header/bg-header-hand-mobile.png');
                }
                @media (max-width: 767px) {
                  padding: 200px 30px;
                  background-position: 150% 100%;
                }

                @media (max-width: 575px) {
                  padding-top: calc(96px + 104px);
                  padding: 150px 70px;
                  background-position: 0px 50%;
                }
                @media (max-width: 360px) {
                  padding: 150px 30px;
                }
              }
            }
            &:nth-child(2) {
              .slide {
                background-image: url('/static/images/home-page/header/bg-header-man.png');
                padding: 170px 80px 120px 100px;
                background-position: 100% 50%;
                background-repeat: no-repeat;
                background-color: #f2f5f7;
                background-size: 600px;

                @media (max-width: 991px) {
                  padding: 180px 80px 150px 80px;
                  background-position: 150% 50%;
                  background-image: url('/static/images/home-page/header/bg-header-man-mobile.png');
                }
                @media (max-width: 767px) {
                  padding: 200px 30px;
                  background-position: 150% 50%;
                }
                @media (max-width: 575px) {
                  padding: 150px 70px;
                  background-position: 0% 50%;
                }
                @media (max-width: 360px) {
                  padding: 150px 30px;
                }
              }
            }
          }

          .text {
            display: flex;
            flex-direction: column;
            max-width: 600px;

            .sub-title {
              font-size: 18px;
              font-weight: 700;
              line-height: 1.22;
              color: #618cfa;
              text-transform: uppercase;
              margin-bottom: 10px;
            }

            .title {
              max-width: 750px;
              h1 {
                margin: 0px;
                margin-bottom: 10px;
                font-size: 60px;
                font-weight: 900;
                line-height: 1.22;
                letter-spacing: 1.28px;
                color: #242424;

                @media (max-width: 767px) {
                  font-size: 46px;
                  letter-spacing: 0.86px;
                }
              }
            }

            .descripton {
              font-size: 22px;
              max-width: 500px;
              font-weight: 500;
              line-height: 1.57;
              color: #484842;
              margin-bottom: 20px;
              a {
                font-size: 20px;

                @media (max-width: 767px) {
                  font-size: 18px;
                }
              }
            }
          }
        }
        .swiper-pagination {
          z-index: 5;
          position: absolute;
          left: 100px;
          bottom: 80px;
          width: auto;
          @media (max-width: 991px) {
            left: 80px;
          }
          @media (max-width: 767px) {
            left: 30px;
          }
          @media (max-width: 767px) {
            left: 50%;
            transform: translateX(-50%);
          }
        }
        .swiper-navigation {
          @media (max-width: 360px) {
            display: none;
          }
          .swiper-button-prev {
            width: 52px;
            height: 52px;
            padding: 10px;
            box-shadow: 0 2px 22px 0 rgba(32, 49, 94, 0.13);
            background-color: #ffffff;
            border-radius: 50%;
            left: 15px;
            z-index: 1;
            outline: none;
            @media (max-width: 767px) {
              left: 10px;
            }
            @media (max-width: 575px) {
              left: 10px;
            }
            &:after {
              font-size: 28px;
              font-weight: 700;
              margin-right: 6px;
            }
          }
          .swiper-button-next {
            width: 52px;
            height: 52px;
            padding: 10px;
            box-shadow: 0 2px 22px 0 rgba(32, 49, 94, 0.13);
            background-color: #ffffff;
            border-radius: 50%;
            right: 15px;
            z-index: 1;
            outline: none;
            @media (max-width: 767px) {
              right: 10px;
            }
            @media (max-width: 575px) {
              right: 10px;
            }
            &:after {
              font-size: 28px;
              font-weight: 700;
              margin-left: 6px;
            }
          }
        }
      }
    }
  }

  /* __________ HEADER  END __________*/

  .what-is {
    .container {
      background: url('/static/images/home-page/what-is/bg-what-is.svg'),
        $bg-blue;
      background-repeat: no-repeat;
      background-position: 0% 100%;
      @media (max-width: 991px) {
        background: $bg-blue;
      }
    }
    .row {
      align-items: center;
    }
    .heading {
      h2 {
        margin: 0px;
        margin-bottom: 20px;
        font-size: 40px;
        font-weight: 900;
        line-height: 1.22;
        letter-spacing: 0.75px;
        color: #242424;
        text-align: center;

        @media (max-width: 767px) {
          font-size: 30px;
        }
      }
    }
    .text {
      .tabs {
        .tabs-nav {
          display: flex;
          align-items: center;
          margin-bottom: 30px;
          transition: all 1s;

          @media (max-width: 991px) {
            justify-content: center;
          }
          @media (max-width: 575px) {
            margin-bottom: 20px;
          }

          .tab {
            display: flex;
            align-items: center;
            opacity: 0.5;
            font-size: 32px;
            font-weight: 800;
            line-height: 1.22;
            color: #618cfa;

            @media (max-width: 1199px) {
              font-size: 26px;
            }
            @media (max-width: 911px) {
              font-size: 24px;
            }

            @media (max-width: 767px) {
              font-size: 22px;
            }

            @media (max-width: 479px) {
              font-size: 20px;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }

            &:hover {
              cursor: pointer;
            }

            span {
              margin-left: 10px;
              border-bottom: 4px solid transparent;
              @media (max-width: 575px) {
                margin-left: 0px;
              }
            }

            img {
              max-width: 50px;
            }

            &:first-child {
              margin-right: 30px;
            }
          }

          .active {
            opacity: 1;

            span {
              border-bottom: 4px solid #618cfa;
            }
          }
        }

        .tabs-content {
          font-size: 18px;
          font-weight: 500;
          line-height: 1.22;
          color: #242424;

          .tab-content {
            @media (max-width: 991px) {
              text-align: center;
            }
          }
        }
        .description {
          line-height: 1.7;
          margin-bottom: 25px;
        }
      }
    }
    .image {
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: 991px) {
        max-width: 60%;
        margin: 0px auto;
        margin-bottom: 30px;
      }
      @media (max-width: 575px) {
        max-width: 100%;
        margin-bottom: 20px;
      }
      @media (max-width: 480px) {
        max-width: 100%;
        margin-bottom: 20px;
      }
    }
  }

  .mvp {
    .container {
      background-color: $bg-grey;
    }

    .row {
      align-items: center;

      @media (max-width: 991px) {
        flex-flow: column-reverse;
      }
    }

    .text {
      .title {
        h2 {
          margin: 0px;
          margin-bottom: 20px;
          font-size: 40px;
          font-weight: 900;
          line-height: 1.22;
          letter-spacing: 0.75px;
          color: #242424;

          @media (max-width: 991px) {
            text-align: center;
          }

          @media (max-width: 767px) {
            font-size: 30px;
          }
        }
      }

      .description {
        font-size: 18px;
        font-weight: 500;
        line-height: 1.7;
        color: #242424;
        margin-bottom: 25px;

        @media (max-width: 991px) {
          text-align: center;
        }
      }

      .button {
        @media (max-width: 991px) {
          text-align: center;
        }
      }
    }

    .image {
      text-align: center;

      @media (max-width: 991px) {
        max-width: 90%;
        margin: 0px auto;
        margin-bottom: 30px;
      }
      @media (max-width: 575px) {
        max-width: 100%;
        margin-bottom: 20px;
      }
    }
  }
  .how-does-it-work {
    overflow: hidden;
    .container {
      position: relative;
      background-color: $bg-blue;
      padding-bottom: 130px;
      &::before {
        position: absolute;
        content: '';
        top: 20px;
        left: 75px;
        transform: translateX(-50%);
        width: 150px;
        height: 300px;
        background-color: #b1c0fa;
        border-radius: 0px 150px 150px 0px;
        @media (max-width: 991px) {
          display: none;
        }
      }
    }

    .heading {
      text-align: center;
      h2 {
        margin: 0px;
        margin-bottom: 30px;
        font-size: 40px;
        font-weight: 900;
        line-height: 1.22;
        letter-spacing: 0.75px;
        color: #242424;

        @media (max-width: 991px) {
          text-align: center;
          margin-bottom: 20px;
        }

        @media (max-width: 767px) {
          font-size: 30px;
        }
        @media (max-width: 575px) {
          margin-bottom: 20px;
        }
      }
    }

    .slider-nav {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin: 0px auto;
      position: relative;
      margin-bottom: 30px;

      @media (max-width: 991px) {
        display: none;
      }
      &:before {
        width: 76%;
        top: 24px;
        left: 12%;
        position: absolute;
        content: '';
        background: linear-gradient(90deg, #fff 33%, hsla(0, 0%, 100%, 0) 0);
        height: 3px;
        background-size: 8px 1px;
        @media (max-width: 991px) {
          display: none;
        }
      }

      .swiper-container {
        width: 100%;
        @media (max-width: 991px) {
          width: auto;
        }
      }
      .swiper-slide {
        width: 25%;
        @media (max-width: 991px) {
          width: 100%;
        }
      }

      .step {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        outline: none;
        @media (max-width: 991px) {
          flex-direction: row;
        }

        @media (max-width: 479px) {
          flex-direction: column;
        }

        .circle {
          border-radius: 50%;
          background-color: #f2f5f7;
          border: 4px solid #fff;
          width: 40px;
          height: 40px;
          position: relative;
          margin-bottom: 10px;

          @media (max-width: 991px) {
            margin-right: 15px;
          }

          @media (max-width: 479px) {
            margin-right: 0px;
          }

          &:before {
            content: '';
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            width: 18px;
            height: 18px;
            background-color: rgba(97, 140, 250, 0.4);
          }
        }

        .title {
          font-size: 24px;
          font-weight: 800;
          line-height: 1.22;
          text-align: center;
          color: #618cfa;
          opacity: 0.4;
        }

        &.active {
          .circle {
            border: none;
            background-color: #ffffff;
            &:before {
              background-color: #618cfa;
            }
          }
          .title {
            opacity: 1;
          }
        }
      }
    }

    .slider-for {
      padding: 0px 30px;
      @media (max-width: 767px) {
        padding: 0px 40px;
      }
      @media (max-width: 360px) {
        padding: 0px;
      }
      position: relative;
      .swiper-pagination {
        left: 50%;
        bottom: -50px;
        transform: translateX(-50%);
      }
      .swiper-navigation {
        @media (max-width: 360px) {
          display: none;
        }
        .swiper-button-prev {
          width: 52px;
          height: 52px;
          padding: 10px;
          box-shadow: 0 2px 22px 0 rgba(32, 49, 94, 0.13);
          background-color: #ffffff;
          border-radius: 50%;
          left: -52px;
          z-index: 1;
          outline: none;

          @media (max-width: 767px) {
            left: -20px;
          }
          &:after {
            font-size: 28px;
            font-weight: 700;
            margin-right: 6px;
          }
        }
        .swiper-button-next {
          width: 52px;
          height: 52px;
          padding: 10px;
          box-shadow: 0 2px 22px 0 rgba(32, 49, 94, 0.13);
          background-color: #ffffff;
          border-radius: 50%;
          right: -52px;
          z-index: 1;
          outline: none;
          @media (max-width: 767px) {
            right: -20px;
          }
          &:after {
            font-size: 28px;
            font-weight: 700;
            margin-left: 6px;
          }
        }
      }
      .slide {
        position: relative;
        outline: none;
        .row {
          align-items: center;
        }
        .number {
          position: absolute;
          font-size: 112px;
          color: rgba(255, 255, 255, 0.5);
          font-weight: 900;
          left: 0px;
          z-index: -1;
          top: -20px;

          @media (max-width: 991px) {
            left: 50%;
            transform: translateX(-50%);
          }
        }

        .text {
          padding-left: 50px;
          position: relative;
          padding-top: 70px;

          @media (max-width: 991px) {
            padding-left: 0px;
            text-align: center;
            padding-top: 20px;
            margin-bottom: 30px;
          }
          @media (min-device-width: 991px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
            padding-top: 20px;
          }
          .title {
            h4 {
              margin-top: 0px;
              margin-bottom: 20px;
              font-size: 28px;
              font-weight: 800;
              line-height: 1.22;
              color: #242424;
              @media (max-width: 575px) {
                font-size: 24px;
              }
            }
          }

          .descripton {
            font-size: 18px;
            font-weight: 500;
            line-height: 1.7;
            color: #242424;

            a {
              font-weight: 800;
              color: #618cfa;
              text-decoration: none;
              font-size: 20px;
            }

            @media (max-width: 991px) {
              margin-bottom: 30px;
            }
          }
        }

        .image {
          text-align: center;
          @media (max-width: 991px) {
            margin: 0px auto;
            max-width: 80%;
          }
          @media (max-width: 575px) {
            max-width: 100%;
          }

          @media (min-device-width: 991px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
            margin-top: 20px;
          }
        }

        .button {
          text-align: center;
          @media (min-device-width: 991px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
            margin-top: 20px;
          }
        }
      }
    }
  }
  .your-idea {
    .container {
      background-color: $bg-grey;
    }

    .row {
      align-items: center;
    }

    .text {
      .title {
        h2 {
          margin: 0px;
          margin-bottom: 20px;
          font-size: 40px;
          font-weight: 900;
          line-height: 1.22;
          letter-spacing: 0.75px;
          color: #242424;

          @media (max-width: 991px) {
            text-align: center;
          }

          @media (max-width: 767px) {
            font-size: 30px;
          }
        }
      }

      .description {
        font-size: 18px;
        font-weight: 500;
        line-height: 1.7;
        color: #242424;
        margin-bottom: 25px;

        @media (max-width: 991px) {
          text-align: center;
        }
      }

      .button {
        @media (max-width: 991px) {
          text-align: center;
        }
      }
    }

    .image {
      text-align: center;
      @media (max-width: 991px) {
        max-width: 60%;
        margin: 0px auto;
        margin-bottom: 30px;
        text-align: center;
      }
      @media (max-width: 575px) {
        max-width: 80%;
        margin-bottom: 20px;
        text-align: center;
      }
      @media (min-device-width: 991px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
        text-align: right;
      }
    }
  }

  .who-we-help {
    .container {
      background-color: $bg-blue;
      @media (max-width: 991px) {
        padding: 90px 30px;
      }
    }

    .heading {
      h2 {
        margin: 0px;
        margin-bottom: 40px;
        font-size: 40px;
        font-weight: 900;
        line-height: 1.22;
        letter-spacing: 0.75px;
        color: #242424;
        text-align: center;

        @media (max-width: 767px) {
          font-size: 30px;
        }
        @media (max-width: 575px) {
          margin-bottom: 30px;
        }
      }
    }

    .row {
      &:last-child {
        [class*='col-'] {
          &:nth-child(1),
          &:nth-child(2) {
            margin-bottom: 30px;
          }

          @media (max-width: 767px) {
            margin-bottom: 30px;
            &:last-child {
              margin-bottom: 0px;
            }
          }
        }
      }
    }

    .company {
      border-radius: 15px;
      border-top-left-radius: 0;
      box-shadow: 0 2px 22px 0 rgba(32, 49, 94, 0.13);
      background-color: #618cfa;
      padding: 30px 30px 50px 30px;
      height: 100%;

      @media (max-width: 991px) {
        padding: 40px 30px 50px 30px;
      }

      @media (max-width: 767px) {
        margin: 16px 0;
        width: 100%;
        max-width: 300px;
        margin: 0px auto;
        border-radius: 15px;
        border-top-left-radius: 0px;
      }

      @media (max-width: 575px) {
        width: 100%;
        max-width: 100%;
      }

      .heading {
        @media (max-width: 767px) {
          display: flex;
          flex-direction: row-reverse;
          justify-content: space-between;
          align-items: center;
        }
        @media (max-width: 575px) {
          margin-bottom: 10px;
        }
        .icon {
          margin-bottom: 10px;
          @media (max-width: 575px) {
            margin-bottom: 0px;
          }
          img {
            width: 44px;
            height: 54px;
            object-fit: contain;
          }
        }

        .title {
          h4 {
            margin: 0px;
            font-size: 28px;
            font-weight: 700;
            line-height: 1.22;
            color: #ffffff;
            margin-bottom: 10px;

            @media (max-width: 479px) {
              font-size: 24px;
            }
            @media (max-width: 575px) {
              margin-bottom: 0px;
            }
          }
        }
      }

      .description {
        font-size: 18px;
        font-weight: 500;
        line-height: 1.5;
        color: #ffffff;
        p {
          margin: 0px;
        }
      }
    }
  }

  .we-invest {
    .container {
      background-color: $bg-grey;
    }

    .row {
      align-items: center;

      @media (max-width: 991px) {
        flex-flow: column-reverse;
      }
    }

    .text {
      max-width: 471px;
      margin-left: auto;

      @media (max-width: 991px) {
        max-width: 100%;
        margin-left: 0px;
        margin-bottom: 30px;
      }

      .title {
        h2 {
          margin: 0px;
          margin-bottom: 20px;
          font-size: 40px;
          font-weight: 900;
          line-height: 1.22;
          letter-spacing: 0.75px;
          color: #242424;

          @media (max-width: 991px) {
            text-align: center;
          }

          @media (max-width: 767px) {
            font-size: 30px;
          }
        }
      }

      .description {
        font-size: 18px;
        font-weight: 500;
        line-height: 1.7;
        color: #242424;
        opacity: 0.8;
        @media (max-width: 991px) {
          text-align: center;
        }
        ul {
          list-style: none;
          padding: 0px;
          margin: 0px;
        }
        .blue {
          font-weight: 800;
        }
        .yellow {
          font-weight: 800;
        }
      }
    }

    .image {
      text-align: center;
      img {
        box-shadow: 0 29px 21px 0 rgba(0, 0, 0, 0.1);
        border-radius: 50%;
      }
      @media (max-width: 991px) {
        max-width: 90%;
        margin: 0px auto;
      }
      @media (max-width: 575px) {
        max-width: 100%;
      }
    }
  }

  .no-equity {
    overflow: hidden;
    .container {
      background: url('/static/images/home-page/no-equity/bg-half-circle.svg'),
        $bg-blue;
      background-position: 95% 0%;
      background-repeat: no-repeat;
      background-size: 350px;
    }

    .row {
      align-items: center;
    }

    .text {
      @media (max-width: 991px) {
        margin-bottom: 30px;
      }

      .title {
        h2 {
          margin: 0px;
          margin-bottom: 20px;
          font-size: 40px;
          font-weight: 900;
          line-height: 1.22;
          letter-spacing: 0.75px;
          color: #242424;

          @media (max-width: 991px) {
            text-align: center;
          }

          @media (max-width: 767px) {
            font-size: 30px;
          }
        }
      }

      .description {
        font-size: 18px;
        font-weight: 500;
        line-height: 1.7;
        color: #242424;
        opacity: 0.8;
        @media (max-width: 991px) {
          text-align: center;
        }
        .blue {
          font-weight: 800;
          color: #618cfa;
        }

        .red {
          font-weight: 800;
          color: #feacb7;
        }
      }
    }

    .calculator {
      position: relative;
      @media (max-width: 767px) {
        max-width: 500px;
        margin: 0px auto;
      }

      &::after {
        position: absolute;
        right: -70px;
        bottom: -4px;
        content: '';
        width: 141px;
        height: 134px;
        background-image: url('/static/images/home-page/no-equity/2x.svg');
        background-position: 50% 50%;
        background-repeat: no-repeat;
      }

      .title {
        font-weight: 800;
        font-size: 20px;
        color: #618cfa;
        margin-bottom: 20px;

        @media (max-width: 767px) {
          text-align: center;
        }
      }

      .form {
        .amount {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
          padding: 5px 13px 5px 30px;

          @media (max-width: 767px) {
            flex-direction: column;
            align-items: flex-start;
            padding: 20px 30px;
          }
          @media (max-width: 575px) {
            padding: 20px;
          }
          span {
            margin-right: 10px;
            font-size: 18px;
            font-weight: 700;
            line-height: 1.22;
            color: #242424;

            @media (max-width: 767px) {
              width: 100%;
              text-align: center;
              margin-right: 0px;
              margin-bottom: 20px;
            }
            @media (max-width: 575px) {
              margin: 0px auto;
              margin-bottom: 20px;
            }
          }

          input {
            width: 100%;
            max-width: 45%;
            height: 70px;
            border: none;
            border-radius: 15px;
            appearance: none;
            box-shadow: 0 29px 21px 0 rgba(0, 0, 0, 0.1);
            border: 4px solid #ffffff;
            background-color: $bg-blue;
            font-size: 24px;
            font-weight: 700;
            line-height: 1.22;
            color: #242424;
            padding: 24px 15px;
            outline: none;

            &:disabled {
              color: #242424;
              -webkit-text-fill-color: #242424;
              opacity: 1;
            }
            @media (max-width: 991px) {
              max-width: 50%;
            }
            @media (max-width: 767px) {
              max-width: 100%;
            }
            @media (min-device-width: 991px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
              font-size: 20px;
            }

            &::placeholder {
              opacity: 1;
              font-size: 24px;
              font-weight: 500;
              line-height: 1.22;
              color: #bdbdbd;
            }
          }
        }

        .procents {
          border-radius: 15px;
          box-shadow: 0 29px 21px 0 rgba(0, 0, 0, 0.1);
          background-color: #ffffff;
          margin-bottom: 15px;
          padding: 15px 0px;

          .founder {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 5px 13px 5px 30px;

            @media (max-width: 767px) {
              flex-direction: column;
              align-items: flex-start;
              padding: 20px 30px;
            }
            @media (max-width: 575px) {
              padding: 20px;
            }
            span {
              margin-right: 10px;
              font-size: 18px;
              font-weight: 700;
              line-height: 1.22;
              color: #949494;

              @media (max-width: 767px) {
                width: 100%;
                text-align: center;
                margin-right: 0px;
                margin-bottom: 20px;
              }
            }

            input {
              width: 100%;
              max-width: 45%;
              height: 70px;
              border: none;
              border-radius: 15px;
              appearance: none;
              box-shadow: 0 29px 21px 0 rgba(0, 0, 0, 0.1);
              border: 4px solid #ffffff;
              font-size: 24px;
              font-weight: 700;
              line-height: 1.22;
              color: #949494;
              padding: 24px 15px;

              &:disabled {
                color: #949494;
                -webkit-text-fill-color: #949494;
                opacity: 1;
              }
              @media (max-width: 991px) {
                max-width: 50%;
              }
              @media (max-width: 767px) {
                max-width: 100%;
              }
              @media (min-device-width: 991px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
                font-size: 20px;
              }

              &::placeholder {
                opacity: 1;
                font-size: 24px;
                font-weight: 500;
                line-height: 1.22;
                color: #bdbdbd;
              }
            }
          }

          .fund {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 5px 13px 5px 30px;

            @media (max-width: 767px) {
              flex-direction: column;
              align-items: flex-start;
              padding: 20px 30px;
            }
            @media (max-width: 575px) {
              padding: 20px;
            }
            span {
              margin-right: 10px;
              font-size: 18px;
              font-weight: 700;
              line-height: 1.22;
              color: #949494;

              @media (max-width: 767px) {
                width: 100%;
                text-align: center;
                margin-right: 0px;
                margin-bottom: 20px;
              }
            }

            input {
              width: 100%;
              max-width: 45%;
              height: 70px;
              border: none;
              border-radius: 15px;
              border: 4px solid #ffffff;
              appearance: none;
              box-shadow: 0 29px 21px 0 rgba(0, 0, 0, 0.1);
              font-size: 24px;
              font-weight: 700;
              line-height: 1.22;
              color: #949494;
              padding: 24px 15px;
              outline: none;
              &:disabled {
                color: #949494;
                -webkit-text-fill-color: #949494;
                opacity: 1;
              }
              @media (max-width: 991px) {
                max-width: 50%;
              }
              @media (max-width: 767px) {
                max-width: 100%;
              }
              @media (min-device-width: 991px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
                font-size: 20px;
              }

              &::placeholder {
                opacity: 1;
                font-size: 24px;
                font-weight: 500;
                line-height: 1.22;
                color: #bdbdbd;
              }
            }
          }
        }

        .summa {
          border-radius: 15px;
          box-shadow: 0 29px 21px 0 rgba(0, 0, 0, 0.1);
          background-color: #c6d3f5;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 5px 13px 5px 30px;

          @media (max-width: 767px) {
            flex-direction: column;
            align-items: flex-start;
            padding: 20px 30px;
          }
          @media (max-width: 575px) {
            padding: 20px;
          }
          span {
            margin-right: 10px;
            font-size: 18px;
            font-weight: 700;
            line-height: 1.22;
            color: #618cfa;
            opacity: 1;

            @media (max-width: 767px) {
              width: 100%;
              text-align: center;
              margin-right: 0px;
              margin-bottom: 20px;
            }
          }

          input {
            width: 100%;
            max-width: 45%;
            height: 70px;
            border: none;
            border-radius: 15px;
            appearance: none;
            box-shadow: 0 29px 21px 0 rgba(0, 0, 0, 0.1);
            background-color: #618cfa;
            font-size: 24px;
            font-weight: 700;
            line-height: 1.22;
            color: #ffffff;
            padding: 24px 15px;
            outline: none;
            &:disabled {
              color: #ffffff;
              -webkit-text-fill-color: #ffffff;
              opacity: 1;
            }
            @media (max-width: 991px) {
              max-width: 50%;
            }
            @media (max-width: 767px) {
              max-width: 100%;
            }
            @media (min-device-width: 991px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
              font-size: 20px;
            }

            &::placeholder {
              opacity: 1;
              font-size: 24px;
              font-weight: 500;
              line-height: 1;
              color: #bdbdbd;
            }
          }
        }
      }
    }
  }

  .featured-companies {
    .container {
      background-color: $bg-grey;
      background-position: 95% 0%;
      background-repeat: no-repeat;
      background-size: 350px;
    }

    .row {
      align-items: center;
    }

    .swiper-container {
      @media (max-width: 991px) {
        padding-bottom: 50px;
      }
      @media (min-device-width: 991px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
        padding-bottom: 50px;
      }

      .swiper-pagination {
        z-index: 5;
        position: absolute;
        left: 0px;
        bottom: 0px;
        width: auto;
        @media (max-width: 991px) {
          width: 100%;
        }
      }
    }

    .heading {
      h2 {
        margin: 0px;
        margin-bottom: 40px;
        font-size: 40px;
        font-weight: 900;
        line-height: 1.22;
        letter-spacing: 0.75px;
        color: #242424;

        @media (max-width: 991px) {
          text-align: center;
        }

        @media (max-width: 767px) {
          font-size: 30px;
        }
        @media (max-width: 575px) {
          margin-bottom: 20px;
        }
      }
    }
    .slider {
      position: relative;
      padding: 0px 30px;

      @media (max-width: 767px) {
        padding: 0px 40px;
      }
      @media (max-width: 360px) {
        padding: 0px;
      }

      .row {
        @media (max-width: 991px) {
          flex-direction: column-reverse;
        }
      }

      .swiper-navigation {
        @media (max-width: 360px) {
          display: none;
        }
        .swiper-button-prev {
          width: 52px;
          height: 52px;
          padding: 10px;
          box-shadow: 0 2px 22px 0 rgba(32, 49, 94, 0.13);
          background-color: #ffffff;
          border-radius: 50%;
          left: -52px;
          z-index: 1;
          outline: none;

          @media (max-width: 767px) {
            left: -20px;
          }
          &:after {
            font-size: 28px;
            font-weight: 700;
            margin-right: 6px;
          }
        }
        .swiper-button-next {
          width: 52px;
          height: 52px;
          padding: 10px;
          box-shadow: 0 2px 22px 0 rgba(32, 49, 94, 0.13);
          background-color: #ffffff;
          border-radius: 50%;
          right: -52px;
          z-index: 1;
          outline: none;

          @media (max-width: 767px) {
            right: -20px;
          }
          &:after {
            font-size: 28px;
            font-weight: 700;
            margin-left: 6px;
          }
        }
      }
      .slide {
        .text {
          .title {
            h2 {
              margin: 0px;
              margin-bottom: 20px;
              font-size: 40px;
              font-weight: 900;
              line-height: 1.22;
              letter-spacing: 0.75px;
              color: #242424;

              @media (max-width: 991px) {
                margin-bottom: 20px;
                text-align: center;
              }

              @media (max-width: 767px) {
                font-size: 30px;
              }
            }
          }

          .description {
            font-size: 18px;
            font-weight: 500;
            line-height: 1.7;
            color: #2c2c2c;

            .quote {
              margin-bottom: 20px;
            }

            .name {
              font-family: $GTWalsheimPro;
              font-size: 20px;
              font-weight: 700;
              line-height: 1.22;
              color: #2c2c2c;
              margin-bottom: 5px;
            }

            .proffesion {
              font-family: $GTWalsheimPro;
              font-size: 18px;
              line-height: 1.22;
              color: #2c2c2c;
              font-weight: 300;
            }
            @media (max-width: 991px) {
              text-align: center;
            }
            .blue {
              font-weight: 800;
              color: #618cfa;
            }

            .red {
              font-weight: 800;
              color: #feacb7;
            }
          }
        }
        .image {
          text-align: center;
          @media (max-width: 991px) {
            max-width: 60%;
            margin: 0px auto;
            margin-bottom: 30px;
          }
          @media (max-width: 575px) {
            max-width: 100%;
          }
        }
      }
    }
  }

  .dont-have-the-10 {
    .container {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      background-image: url('/static/images/home-page/dont-have-the-10/bg-dont-have-the-10.svg');
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: cover;
      @media (max-width: 1200px) {
        background-image: url('/static/images/home-page/dont-have-the-10/bg-dont-have-the-10-mobile.svg');
      }
      .title {
        max-width: 800px;

        @media (max-width: 991px) {
          max-width: 90%;
        }
        @media (max-width: 575px) {
          max-width: 100%;
        }
        h2 {
          margin: 0px;
          margin-bottom: 20px;
          font-size: 40px;
          font-weight: 900;
          line-height: 1.22;
          letter-spacing: 0.75px;
          color: #ffffff;
          text-align: center;

          @media (max-width: 767px) {
            font-size: 30px;
          }
          @media (max-width: 575px) {
            line-height: 1.3;
          }
        }
      }
      .button {
        text-align: center;
      }
    }
  }

  .how-big {
    .container {
      background-color: $bg-grey;
    }
    .row {
      align-items: center;
      @media (max-width: 991px) {
        flex-direction: column-reverse;
      }
    }
    .text {
      .title {
        h2 {
          margin: 0px;
          margin-bottom: 20px;
          font-size: 40px;
          font-weight: 900;
          line-height: 1.22;
          letter-spacing: 0.75px;
          color: #242424;

          @media (max-width: 991px) {
            text-align: center;
          }

          @media (max-width: 767px) {
            font-size: 30px;
          }
          @media (max-width: 575px) {
            margin-bottom: 30px;
          }

          @media (min-device-width: 991px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
            margin-bottom: 0px;
          }
        }
      }

      .description {
        font-size: 18px;
        font-weight: 500;
        line-height: 1.7;
        color: #242424;

        @media (max-width: 991px) {
          text-align: center;
        }

        @media (max-width: 575px) {
          font-size: 18px;
        }
      }
    }

    .image {
      max-width: 9 0%;
      @media (max-width: 991px) {
        max-width: 70%;
        margin: 0px auto;
        text-align: center;
        margin-bottom: 20px;
      }
      @media (max-width: 575px) {
        max-width: 100%;
        margin-bottom: 10px;
      }
    }
  }

  .submit-your-pitch {
    .container {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      background-image: url('/static/images/home-page/submit-your-pitch/bg-submit-your-pitch.svg');
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: cover;

      @media (max-width: 767px) {
        background-image: url('/static/images/home-page/submit-your-pitch/bg-submit-your-pitch-mobile.svg');
      }

      .title {
        h2 {
          margin: 0px;
          margin-bottom: 20px;
          font-size: 40px;
          font-weight: 700;
          line-height: 1.22;
          letter-spacing: 0.75px;
          color: #ffffff;
          text-align: center;

          @media (max-width: 991px) {
            margin-bottom: 20px;
          }

          @media (max-width: 767px) {
            font-size: 30px;
          }
        }
      }
      .button {
        text-align: center;
      }
    }
  }
}
</style>
