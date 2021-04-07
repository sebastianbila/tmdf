<template>
  <div class="how-it-works-for-investors-page">
    <Preloader :show="preloader"></Preloader>
    <section class="header">
      <div class="header-top">
        <NavigationMenu></NavigationMenu>
      </div>
      <div class="header-bottom">
        <div class="container">
          <div class="text">
            <div class="sub-title">For investors</div>
            <div class="title">
              <h1>How it Works</h1>
            </div>
            <div class="descripton">
              <p>Investing is easy! Find out more about how it works.</p>
            </div>
            <div class="button">
              <button type="button" class="btn-blue">Apply</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="how-does-it-work">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="heading">
              <h2>How Does It Work?</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-4">
            <div class="card">
              <div class="image">
                <img
                  src="/images/how-it-works-for-investors-page/how-does-it-work/list.svg"
                />
              </div>
              <div class="title">
                <h4>Search and find:</h4>
              </div>
              <div class="description">
                Angels can find profiles and projects based on industry,
                markets, areas, and people.
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card">
              <div class="image">
                <img
                  src="/images/how-it-works-for-investors-page/how-does-it-work/bell.svg"
                />
              </div>
              <div class="title">
                <h4>Stay engaged and updated:</h4>
              </div>
              <div class="description">
                <p>
                  - Look for entrepreneurs<br />
                  - Subscribe to projects & receive updates<br />
                  - Contact entrepreneurs through emails, video calls, or
                  whatever works best.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card mb-0">
              <div class="image">
                <img
                  src="/images/how-it-works-for-investors-page/how-does-it-work/money.svg"
                />
              </div>
              <div class="title">
                <h4>Invest:</h4>
              </div>
              <div class="description">
                <p>
                  Once an angel has decided if they want to invest in a
                  particular entrepreneur and their project, they let The
                  Million Dollar Fund know.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="benefits-to-investors">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="text">
              <div class="title">
                <h2>Benefits to Investors</h2>
              </div>
              <div class="description">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Repellat esse laudantium facere, animi ex, nostrum accusamus
                  voluptate tempora aliquid maiores vitae quasi facilis debitis
                  temporibus mollitia quae commodi dolorem praesentium.
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Repellat esse laudantium facere, animi ex, nostrum accusamus
                  voluptate tempora aliquid maiores vitae quasi facilis debitis
                  temporibus mollitia quae commodi dolorem praesentium.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="image">
              <img
                src="/images/how-it-works-for-investors-page/benefits-to-investors/image.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="co-invest">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="image">
              <img
                src="/images/how-it-works-for-investors-page/co-invest/image.png"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="text">
              <div class="title"><h2>Co-invest</h2></div>
              <div class="description">
                <p>
                  You can jointly invest in other projects with other angels.
                  Thus, you can find projects that are in the process of
                  financing and submit a joint application for joint investment.
                  So make it easier for multiple angels to co-invest and reduce
                  risk
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="initial-investment">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="text">
              <div class="title">
                <h2>Calculator</h2>
              </div>
              <div class="description">
                <p>
                  By investing in an MVP through The Million Dollar Fund, an
                  angel investor nearly doubles their investment!
                </p>
                <p>
                  By investing in an MVP through The Million Dollar Fund, an
                  angel investor nearly doubles their investment!
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="calculator">
              <div class="title">*Cost example</div>
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
                    <span>Entrepreneurs Covers (10%)</span>
                    <input v-model="founder" type="text" placeholder="$ 0" />
                  </div>
                  <div class="fund">
                    <span>Fund's Covers (45%)</span>
                    <input v-model="fund" type="text" placeholder="$ 0" />
                  </div>
                </div>
                <div class="summa">
                  <span>Angel Covers (45%)</span>
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
    <section class="convertible-debt">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="text">
              <div class="title">
                <h2>Receive 2x your investment in Convertible Debt</h2>
              </div>
              <div class="description">
                In return for funding, founders grant a convertible debt worth
                <strong>2x</strong> the amount invested. This convertible debt
                is received by <span>Xicay.com</span>
                <strong>(funding 45% of the investment)</strong> and by the
                <span>investor</span>
                <strong>(funding the other 45%).</strong> In short, whatever you
                invest in an idea, you’ll get back double in returns!
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="image">
              <img
                src="/images/how-it-works-for-investors-page/convertible-debt/image.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="not-technical">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="image">
              <img
                src="/images/how-it-works-for-investors-page/not-technical/image.svg"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="text">
              <div class="title">
                <h2>Not a technical investor? No problem</h2>
              </div>
              <div class="description">
                The million dollar fund works with agencies around the world to
                bring in the right tech stack/team to develop MVP’s for our
                recipients.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="intelligent-dashboard">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="heading">
              <h2>Intelligent Dashboard</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 col-md-6 col-xl-6">
            <div class="card">
              <div class="image">
                <img
                  src="/images/how-it-works-for-investors-page/int-dash/group-23.svg"
                />
              </div>
              <div class="title">
                <h3>Access to our entrepreneurs</h3>
              </div>
              <div class="description">
                Direct communication with promising founders and entrepreneurs
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-xl-6">
            <div class="card">
              <div class="image">
                <img
                  src="/images/how-it-works-for-investors-page/int-dash/group-16.svg"
                />
              </div>
              <div class="title">
                <h3>Find projects per industry</h3>
              </div>
              <div class="description">
                Pinpoint the best MVP in your field by filtering industries like
                technology, finance, e-commerce, and more
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-xl-6">
            <div class="card">
              <div class="image">
                <img
                  src="/images/how-it-works-for-investors-page/int-dash/group-21.svg"
                />
              </div>
              <div class="title">
                <h3>Monitor an entrepreneur’s progress</h3>
              </div>
              <div class="description">
                Stay up to date with real-time developments in current
                investments and upcoming ventures
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-6 col-xl-6">
            <div class="card">
              <div class="image">
                <img
                  src="/images/how-it-works-for-investors-page/int-dash/group-14.svg"
                />
              </div>
              <div class="title">
                <h3>Identify entrepreneur backgrounds</h3>
              </div>
              <div class="description">
                View a founder’s education, experience, and profile to narrow
                down your best investment opportunity
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="co-invest-with-us">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="text">
              <div class="title">
                <h2>Co-invest with us</h2>
              </div>
              <div class="description">
                <p>
                  The Million Dollar Fund splits investment in each project:
                  <span>45%</span> backing from our partner agency Xicay.com,
                  <span>45%</span> from the angel investor, and
                  <span>10%</span> from the entrepreneur/founder.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="image">
              <img
                src="/images/how-it-works-for-investors-page/co-invest-with-us/image.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="easy-to-invest">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="heading">
              <h2>Easy process to invest</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-4">
            <div class="card">
              <img
                src="/images/how-it-works-for-investors-page/easy-to-invest/group-63.svg"
              />
              <p>
                Once you’ve identified an idea or entrepreneur on our dashboard,
                you can request an introduction
              </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card">
              <img
                src="/images/how-it-works-for-investors-page/easy-to-invest/group-13.svg"
              />
              <p>
                After you’ve had a chance to meet and get to know the
                entrepreneur, you can offer to invest
              </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card mb-0">
              <img
                src="/images/how-it-works-for-investors-page/easy-to-invest/group-71.svg"
              />
              <p>Xicay.com prepares a scope/estimate to develop the MVP</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="before-invest">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="text">
              <div class="title">
                <h2>Get to know before you invest</h2>
              </div>
              <div class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="image">
              <img
                src="/images/how-it-works-for-investors-page/before-invest/image.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="become-a-part">
      <div class="container">
        <div class="text-desktop">
          <h2>Become a part of the Million Dollar Fund!</h2>
          <div class="button">
            <a href="" class="btn-white">Sing In</a>
          </div>
        </div>
        <div class="text-mobile">
          <h2>Submit Your Pitch</h2>
          <div class="button">
            <button type="button" class="btn-white">Sing In</button>
          </div>
        </div>
      </div>
    </section>
    <section class="popular-questions">
      <div class="container">
        <div class="heading">
          <h2>FAQ</h2>
        </div>
        <div class="questions">
          <div
            class="accordion"
            :class="{ open: isActiveAccordion(1) }"
            @click="setActiveAccordion(1)"
          >
            <div class="question">
              <span class="text"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit?</span
              >
              <span class="arrow"
                ><img
                  src="/images/how-it-works-for-investors-page/popular-questions/right-arrow.svg"
              /></span>
            </div>
            <div v-show="isActiveAccordion(1)" class="answer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              voluptatibus at repellendus rem libero, doloribus obcaecati
              mollitia. Porro architecto nesciunt pariatur natus eius sunt quae.
              Magnam atque quos mollitia minus?
            </div>
          </div>
          <div
            class="accordion"
            :class="{ open: isActiveAccordion(2) }"
            @click="setActiveAccordion(2)"
          >
            <div class="question">
              <span class="text"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit?</span
              >
              <span class="arrow"
                ><img
                  src="/images/how-it-works-for-investors-page/popular-questions/right-arrow.svg"
              /></span>
            </div>
            <div v-show="isActiveAccordion(2)" class="answer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              voluptatibus at repellendus rem libero, doloribus obcaecati
              mollitia. Porro architecto nesciunt pariatur natus eius sunt quae.
              Magnam atque quos mollitia minus?
            </div>
          </div>
          <div
            class="accordion"
            :class="{ open: isActiveAccordion(3) }"
            @click="setActiveAccordion(3)"
          >
            <div class="question">
              <span class="text"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit?</span
              >
              <span class="arrow"
                ><img
                  src="/images/how-it-works-for-investors-page/popular-questions/right-arrow.svg"
              /></span>
            </div>
            <div v-show="isActiveAccordion(3)" class="answer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              voluptatibus at repellendus rem libero, doloribus obcaecati
              mollitia. Porro architecto nesciunt pariatur natus eius sunt quae.
              Magnam atque quos mollitia minus?
            </div>
          </div>
          <div
            class="accordion"
            :class="{ open: isActiveAccordion(4) }"
            @click="setActiveAccordion(4)"
          >
            <div class="question">
              <span class="text"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit?</span
              >
              <span class="arrow"
                ><img
                  src="/images/how-it-works-for-investors-page/popular-questions/right-arrow.svg"
              /></span>
            </div>
            <div v-show="isActiveAccordion(4)" class="answer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              voluptatibus at repellendus rem libero, doloribus obcaecati
              mollitia. Porro architecto nesciunt pariatur natus eius sunt quae.
              Magnam atque quos mollitia minus?
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>
<script>
import Preloader from '@components/Common/Preloader'
import { VMoney } from 'v-money'
import NavigationMenu from '@components/Landing/NavigationMenu'
import Footer from '@components/Landing/Footer'
export default {
  directives: { money: VMoney },
  components: {
    NavigationMenu,
    Footer,
    Preloader,
  },
  data() {
    return {
      preloader: false,
      amount: '0',
      money: {
        decimal: '.',
        thousands: ',',
        prefix: '$ ',
        precision: '0',
        masked: false,
      },
      activeAccordion: null,
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
  methods: {
    isActiveAccordion(accordion) {
      return this.activeAccordion === accordion
    },
    setActiveAccordion(accordion) {
      if (this.activeAccordion === accordion) {
        this.activeAccordion = null
      } else {
        this.activeAccordion = accordion
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.how-it-works-for-investors-page {
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
  .header {
    padding: 0px 30px;

    @media (max-width: 767px) {
      margin-bottom: 0px;
      padding: 0px;
    }

    .header-top {
      z-index: 1;
      position: relative;
    }

    .header-bottom {
      margin-top: -104px;

      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        background-position: 50% 100%;
        background-repeat: no-repeat;
        padding: 140px;
        padding-top: calc(86px + 104px);
        padding-bottom: 160px;
        text-align: center;
        background-image: url('/images/how-it-works-for-investors-page/header/bg-how-it-works-for-investors-main-banner.svg');
        background-color: #dde6fc;
        background-size: contain;

        @media (max-width: 767px) {
          padding: 70px 30px;
          padding-top: calc(86px + 104px);
          background-image: url('/images/how-it-works-for-investors-page/header/bg-how-it-works-for-investors-main-banner-mobile.svg');
          background-size: contain;
          background-position: 50% 100%;
        }

        @media (max-width: 575px) {
          padding: 150px 30px;
          padding-top: calc(96px + 104px);
        }
      }

      .text {
        text-align: center;
        max-width: 700px;
        .sub-title {
          font-size: 18px;
          font-weight: 700;
          line-height: 1.22;
          color: #618cfa;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .title {
          h1 {
            margin: 0px;
            font-size: 60px;
            font-weight: 900;
            line-height: 1.22;
            letter-spacing: 1.28px;
            color: #242424;

            @media (max-width: 767px) {
              font-size: 46px;
              line-height: 1.4;
              letter-spacing: 0.86px;
            }
          }
        }

        .descripton {
          font-size: 22px;
          font-weight: 500;
          line-height: 1.4;
          color: #484842;
          margin-bottom: 20px;

          p {
            margin: 0px;
          }

          @media (max-width: 767px) {
            font-size: 20px;
          }
        }
      }
    }
  }
  .how-does-it-work {
    .container {
      background-color: $bg-grey;
      @media (max-width: 991px) {
        padding: 90px 30px;
      }

      @media (min-device-width: 991px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
        padding: 90px 30px;
      }
    }

    .row {
      &:nth-child(2) {
        @media (max-width: 991px) {
          justify-content: center;
        }

        [class*='col-'] {
          @media (max-width: 991px) {
            &:nth-child(1),
            &:nth-child(2) {
              margin-bottom: 80px;
            }
          }

          @media (max-width: 767px) {
            &:nth-child(1),
            &:nth-child(2) {
              margin-bottom: 0px;
            }
            margin-bottom: 0px;
          }
        }
      }
    }

    .heading {
      h2 {
        margin: 0px;
        margin-bottom: 60px;
        font-size: 40px;
        font-weight: 900;
        line-height: 1.22;
        letter-spacing: 0.75px;
        color: #242424;
        text-align: center;
        @media (max-width: 767px) {
          margin-bottom: 20px;
          font-size: 30px;
        }

        @media (max-width: 575px) {
          margin-bottom: 30px;
        }
      }
    }

    .card {
      position: relative;
      border-radius: 15px;
      box-shadow: 0 29px 21px 0 rgba(0, 0, 0, 0.07);
      background-color: #ffffff;
      height: 100%;
      padding: 80px 40px 50px 40px;
      height: 100%;

      @media (max-width: 991px) {
        margin-right: 0px;
      }

      @media (max-width: 767px) {
        max-width: 300px;
        height: auto;
        margin: 50px auto 30px auto;
      }
      @media (max-width: 575px) {
        height: auto;
        padding: 80px 30px 50px 30px;
      }

      @media (max-width: 480px) {
        width: 100%;
        max-width: 100%;
      }

      .image {
        position: absolute;
        top: -30px;
        right: -20px;

        @media (max-width: 991px) {
          transform: translatex(50%);
          right: 50%;
          top: -50px;
        }

        img {
          width: 100%;
          max-width: 106px;
          border-radius: 50%;
          box-shadow: 0 29px 21px 0 rgba(0, 0, 0, 0.07);
        }
      }

      .title {
        h4 {
          margin: 0px;
          margin-bottom: 30px;
          font-size: 22px;
          font-weight: 700;
          line-height: 1.22;
          color: #242424;
          margin-bottom: 14px;

          @media (max-width: 767px) {
            text-align: center;
          }
        }
      }

      .description {
        font-size: 18px;
        font-weight: 500;
        line-height: 1.7;
        color: #242424;
        @media (max-width: 767px) {
          text-align: center;
        }
        @media (max-width: 575px) {
          margin: 10px 0px 0px 0px;
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
        p {
          &:last-child {
            margin-bottom: 0px;
          }
        }
      }
    }
  }

  .benefits-to-investors {
    .container {
      background: url('/images/how-it-works-for-investors-page/benefits-to-investors/bg-yellow.svg'),
        $bg-blue;
      background-repeat: no-repeat;
      background-position: 55% 100%;
      background-size: 226px 230px;

      @media (max-width: 991px) {
        background-position: 10% 100%;
      }
    }
    .row {
      align-items: center;
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
        margin: 20px 0px 40px 0px;
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
      @media (max-width: 991px) {
        max-width: 60%;
        margin: 0px auto;
      }
      @media (max-width: 767px) {
        max-width: 90%;
      }
    }
  }

  .co-invest {
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

      @media (max-width: 991px) {
        max-width: 100%;
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
            margin-bottom: 30px;
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

        @media (max-width: 991px) {
          width: 100%;
          text-align: center;
        }

        @media (max-width: 991px) {
          text-align: center;
        }
      }
    }

    .image {
      text-align: center;
      @media (max-width: 991px) {
        max-width: 80%;
        margin: 0px auto;
      }
      @media (max-width: 767px) {
        max-width: 100%;
      }
    }
  }

  .initial-investment {
    .container {
      background: url('/images/how-it-works-for-investors-page/initial-investment/bg-half-circles.svg'),
        $bg-blue;
      background-repeat: no-repeat;
      background-position: 90% 0%;
      background-size: 409px 69px;

      @media (max-width: 767px) {
        background: $bg-blue;
      }
    }
    .row {
      align-items: center;
    }

    .text {
      max-width: 442px;

      @media (max-width: 991px) {
        max-width: 100%;
        margin-bottom: 30px;
        text-align: center;
      }

      @media (max-width: 767px) {
        font-size: 22px;
        line-height: 1.22;
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
        color: #242424;
        margin: 20px 0px 40px 0px;
      }
    }

    .calculator {
      position: relative;
      @media (max-width: 991px) {
        margin-bottom: 80px;
      }
      @media (max-width: 767px) {
        max-width: 500px;
        margin: 0px auto;
        margin-bottom: 40px;
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

  .convertible-debt {
    margin-bottom: 50px;

    @media (max-width: 767px) {
      margin-bottom: 0px;
    }

    .container {
      background: url('/images/how-it-works-for-investors-page/convertible-debt/bg-half-circle.svg'),
        $bg-grey;
      background-position: 0% 100%;
      background-size: 180px 145px;
      background-repeat: no-repeat;
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
        color: #242424;
        @media (max-width: 991px) {
          text-align: center;
          margin-bottom: 40px;
        }
        span {
          color: #618cfa;
        }

        strong {
          font-weight: 800;
        }
      }
    }
    .image {
      text-align: center;
    }
  }

  .not-technical {
    .container {
      background-color: $bg-blue;
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
  .intelligent-dashboard {
    margin-bottom: 50px;

    @media (max-width: 767px) {
      margin-bottom: 0px;
    }

    .container {
      background-color: $bg-grey;
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
      &:nth-child(2) {
        [class*='col-'] {
          &:nth-child(1) {
            margin-bottom: 30px;
          }
          &:nth-child(2) {
            margin-bottom: 30px;
          }
          @media (max-width: 767px) {
            margin-bottom: 30px;
          }
        }
      }
    }

    .card {
      border: none;
      border-radius: 15px;
      border-top-left-radius: 0;
      box-shadow: 0 29px 21px 0 rgba(0, 0, 0, 0.07);
      background-color: #ffffff;
      padding: 40px;
      display: flex;
      flex-direction: column;
      height: 100%;

      @media (max-width: 575px) {
        max-width: 300px;
        margin: 0px auto;
        height: auto;
        align-items: center;
        text-align: center;
        padding: 30px;
      }

      @media (max-width: 480px) {
        width: 100%;
        max-width: 100%;
      }

      .image {
        img {
          width: 88px;
          height: 90px;
          margin-bottom: 20px;
          object-fit: contain;
        }
      }
      .title {
        h3 {
          margin: 0px;
          font-size: 22px;
          font-weight: 700;
          line-height: 1.22;
          color: #242424;
        }
      }

      .description {
        font-size: 18px;
        font-weight: 500;
        line-height: 1.7;
        color: #242424;
        margin: 10px 0px 20px 0px;
      }
    }
  }

  .co-invest-with-us {
    margin-bottom: 50px;

    @media (max-width: 767px) {
      margin-bottom: 0px;
    }

    .container {
      background: url('/images/how-it-works-for-investors-page/co-invest-with-us/bg-circle-and-square.svg'),
        $bg-blue;
      background-repeat: no-repeat;
      background-position: 10% 100%;
      background-size: 262px;
    }

    .row {
      align-items: center;
    }

    .text {
      @media (max-width: 991px) {
        margin-bottom: 50px;
      }
      @media (max-width: 575px) {
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
        color: #242424;
        @media (max-width: 991px) {
          text-align: center;
        }
        span {
          color: #618cfa;
        }

        strong {
          font-weight: 800;
        }
        p {
          margin: 0px;
          margin-bottom: 18px;
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
        max-width: 80%;
        margin: 0px auto;
      }
      @media (max-width: 575px) {
        max-width: 100%;
      }
    }
  }

  .easy-to-invest {
    margin-bottom: 50px;

    @media (max-width: 767px) {
      margin-bottom: 0px;
    }

    .container {
      background-color: $bg-grey;
      @media (max-width: 991px) {
        padding: 90px 30px;
      }

      @media (min-device-width: 991px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
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
          margin-bottom: 20px;
          font-size: 30px;
        }
        @media (max-width: 575px) {
          margin-bottom: 30px;
        }
      }
    }

    .row {
      &:nth-child(2) {
        @media (max-width: 991px) {
          justify-content: center;
        }

        [class*='col-'] {
          @media (max-width: 991px) {
            &:nth-child(1),
            &:nth-child(2) {
              margin-bottom: 30px;
            }
          }

          @media (max-width: 767px) {
            &:nth-child(1),
            &:nth-child(2) {
              margin-bottom: 30px;
            }
          }
        }
      }
    }

    .card {
      border: none;
      border-radius: 15px;
      border-top-left-radius: 0;
      box-shadow: 0 29px 21px 0 rgba(0, 0, 0, 0.07);
      background-color: #618cfa;
      padding: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      height: 100%;

      @media (max-width: 991px) {
        padding: 40px 30px;
      }

      @media (max-width: 767px) {
        max-width: 300px;
        margin: 0px auto;
        height: auto;
      }

      @media (max-width: 575px) {
        padding: 40px 30px;
      }
      @media (max-width: 480px) {
        width: 100%;
        max-width: 100%;
      }

      @media (min-device-width: 991px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
        padding: 40px 30px;
      }

      img {
        width: 88px;
        height: 90px;
        object-fit: contain;
      }

      p {
        margin-top: 30px;

        font-size: 18px;
        font-weight: 500;
        line-height: 1.6;
        color: #ffffff;
      }
    }
  }

  .popular-questions {
    .container {
      background-color: $bg-grey;
      @media (max-width: 991px) {
        padding: 90px 30px;
      }
    }

    .heading {
      margin-bottom: 30px;
      h2 {
        margin: 0px;
        margin-bottom: 30px;
        font-size: 40px;
        font-weight: 900;
        line-height: 1.22;
        letter-spacing: 0.75px;
        color: #242424;
        text-align: center;

        @media (max-width: 991px) {
          margin-bottom: 20px;
        }

        @media (max-width: 767px) {
          font-size: 30px;
        }
      }
    }

    .accordion {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-bottom: 18px;
      border-radius: 15px;
      box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.07);
      background-color: #ffffff;
      padding: 40px;
      padding-right: 80px;
      cursor: pointer;
      position: relative;
      @media (max-width: 767px) {
        padding: 30px;
        padding-right: 60px;
      }

      .question {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-size: 18px;
        font-weight: 500;
        line-height: 1.22;
        color: #242424;

        @media (max-width: 767px) {
          font-size: 16px;
          line-height: 1.22;
        }

        .arrow {
          position: absolute;
          right: 30px;
          min-width: 28px;
          transition: all 0.3s;
          transform-origin: 50% 50%;
          text-align: center;
          @media (max-width: 767px) {
            min-width: 18px;
          }
        }
      }

      .answer {
        margin-top: 15px;
        font-size: 16px;
        line-height: 1.5;
        color: #6e6e6e;
      }
    }
    .accordion.open {
      .question {
        .text {
          font-weight: 700;
        }
        .arrow {
          transform: rotate(180deg);
        }
      }
    }
  }

  .before-invest {
    .container {
      background-color: $bg-blue;
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
  .become-a-part {
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
      background-image: url('/images/how-it-works-for-investors-page/become-part/bg-become-a-part.svg');
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: cover;

      @media (max-width: 767px) {
        background-image: url('/images/how-it-works-for-investors-page/become-part/bg-become-a-part-mobile.svg');
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: cover;
      }
    }

    .text-desktop {
      max-width: 800px;
      margin: 0px auto;

      @media (max-width: 767px) {
        display: none;
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
      }

      .button {
        text-align: center;
      }
    }

    .text-mobile {
      display: none;

      @media (max-width: 767px) {
        display: block;
      }

      h2 {
        margin: 0px;
        margin-bottom: 20px;
        font-size: 40px;
        font-weight: 700;
        line-height: 1.22;
        letter-spacing: 0.97px;
        text-align: center;
        color: #ffffff;

        @media (max-width: 767px) {
          font-size: 30px;
          line-height: 1.22;
          letter-spacing: 0.67px;
        }
        @media (max-width: 575px) {
          line-height: 1.3;
        }
      }

      .button {
        text-align: center;
      }
    }
  }
}
</style>
