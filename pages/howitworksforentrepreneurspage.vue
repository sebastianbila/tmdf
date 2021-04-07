<template>
  <div class="about-page">
    <Preloader :show="preloader"></Preloader>
    <section class="header">
      <div class="header-top">
        <NavigationMenu></NavigationMenu>
      </div>
      <div class="header-bottom">
        <div class="container">
          <div class="text">
            <div class="sub-title">For entrepreneur</div>
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
                  src="/images/how-it-works-for-entrepreneurs-page/how-does-it-work/man.svg"
                />
              </div>
              <div class="title">
                <h4>Join:</h4>
              </div>
              <div class="description">
                The entrepreneur creates their profile, including background
                information, education, business history, and more. They then
                submit a project page on The Million Dollar Fund with materials
                like a business plan, marketing plan, or presentations. Their
                project and profile go public to secure the interest of an
                investor.
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card">
              <div class="image">
                <img
                  src="/images/how-it-works-for-entrepreneurs-page/how-does-it-work/network.svg"
                />
              </div>
              <div class="title">
                <h4>Network:</h4>
              </div>
              <div class="description">
                <p>
                  Entrepreneurs can connect with like-minded founders and
                  receive coaching on projects from other entrepreneurs - as
                  well as investors.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card mb-0">
              <div class="image">
                <img
                  src="/images/how-it-works-for-entrepreneurs-page/how-does-it-work/money.svg"
                />
              </div>
              <div class="title">
                <h4>Invest:</h4>
              </div>
              <div class="description">
                <p>
                  If an entrepreneur’s project has been selected for investment
                  by an angel, The Million Dollar Fund will be notified, and we
                  will move forward with determining the scope/estimate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="now-what">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div class="heading">
              <h2>Now What?</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="image">
              <img
                src="/images/how-it-works-for-entrepreneurs-page/now-what/image.svg"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="list">
              <ul>
                <li>
                  <div class="number">01.</div>
                  <div class="text">
                    <div class="title">
                      <span class="name">Angels</span>
                    </div>
                    <div class="description">
                      Angel lets us know through
                      <a href="#">themilliondollarfund.com</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="number">02.</div>
                  <div class="text">
                    <div class="title">
                      <span class="name">Xicay Technologies</span>
                    </div>
                    <div class="description">
                      Xicay Technologies prepares a scope (with the help of the
                      entrepreneur)
                    </div>
                  </div>
                </li>
                <li>
                  <div class="number">03.</div>
                  <div class="text">
                    <div class="title">
                      <span class="name">Angel & Entrepreneur</span>
                    </div>
                    <div class="description">
                      Estimate and terms for Convertible Debt are reviewed and
                      approved
                    </div>
                  </div>
                </li>
                <li>
                  <div class="number">04.</div>
                  <div class="text">
                    <div class="title">
                      <span class="name">MVP Development</span>
                    </div>
                    <div class="description">
                      When all parties agree, we get started!
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="initial-investment">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div class="heading">
              <h2>Calculator</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 col-lg-6">
            <div class="calculator">
              <div class="description">
                Set an achievable goal that covers what you need to complete
                your project.
              </div>
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
          <div class="col-md-12 col-lg-6">
            <div class="image">
              <img
                src="/images/how-it-works-for-entrepreneurs-page/initial-investment/image.svg"
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
            <button type="button" class="btn-white">Sing In</button>
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
                  src="/images/how-it-works-for-entrepreneurs-page/popular-questions/right-arrow.svg"
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
                  src="/images/how-it-works-for-entrepreneurs-page/popular-questions/right-arrow.svg"
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
                  src="/images/how-it-works-for-entrepreneurs-page/popular-questions/right-arrow.svg"
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
                  src="/images/how-it-works-for-entrepreneurs-page/popular-questions/right-arrow.svg"
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
  components: {
    NavigationMenu,
    Footer,
    Preloader,
  },
  directives: { money: VMoney },
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
  created() {
    this.preloader = false
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
.about-page {
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
        border-radius: 15px;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        padding: 140px;
        padding-top: calc(86px + 104px);
        padding-bottom: 160px;
        text-align: center;
        background-image: url('/images/how-it-works-for-entrepreneurs-page/header/bg-how-it-works-for-entrepreneur.svg');
        background-color: #f2f5f7;
        background-size: cover;

        @media (max-width: 767px) {
          padding: 70px 30px;
          padding-top: calc(86px + 104px);
          border-radius: 0px;
          background-position: 50% 100%;
        }

        @media (max-width: 767px) {
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
      background-color: $bg-blue;
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
      padding: 80px 30px 50px 30px;
      height: 100%;

      @media (max-width: 991px) {
        margin-right: 0px;
      }
      @media (max-width: 767px) {
        height: auto;
        max-width: 300px;
        margin: 50px auto 30px auto;
      }

      @media (max-width: 575px) {
        height: auto;
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
          margin-bottom: 20px;
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
        opacity: 0.8;
        margin: 20px 0px 40px 0px;
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

  .now-what {
    .container {
      background-color: #f2f5f7;
      @media (max-width: 991px) {
        padding: 90px 70px;
      }
      @media (max-width: 576px) {
        padding: 90px 30px;
      }
    }

    .heading {
      text-align: center;
      h2 {
        margin: 0px;
        margin-bottom: 40px;
        font-size: 40px;
        font-weight: 900;
        line-height: 1.22;
        letter-spacing: 0.75px;
        color: #242424;
        text-align: center;

        @media (max-width: 991px) {
          margin-bottom: 30px;
        }

        @media (max-width: 767px) {
          font-size: 30px;
        }
        @media (max-width: 567px) {
          margin-bottom: 30px;
        }
      }
    }

    .image {
      padding-right: 30px;
      @media (max-width: 991px) {
        padding-right: 0px;
        width: 100%;
        max-width: 300px;
        margin: 0px auto;
        margin-bottom: 30px;
      }
    }

    .list {
      @media (max-width: 767px) {
        text-align: center;
      }
      ul {
        display: inline-block;
        list-style: none;
        margin: 0px;
        padding: 0px;
        position: relative;
        text-align: left;
      }
      li {
        position: relative;
        padding-left: 50px;
        padding-bottom: 50px;

        &:first-child {
          .description {
            line-height: 1.4 !important;
          }
        }
        &:last-child {
          padding-bottom: 0px;
        }
        &::before {
          content: '';
          left: 18px;
          position: absolute;
          height: 100%;
          border-left: 4px dotted #ffffff;
        }

        &:last-child {
          &::before {
            display: none;
          }
        }

        .title {
          display: flex;
          flex-direction: row;
          margin-bottom: 10px;
        }

        .number {
          font-size: 28px;
          font-weight: 900;
          line-height: 1.22;
          color: #618cfa;
          position: absolute;
          left: 0px;
          padding: 5px 0px;
          background: #f2f5f7;
        }
        .text {
          margin-left: 20px;
          .name {
            font-size: 22px;
            font-weight: 700;
            line-height: 1.22;
            color: #242424;
          }

          .description {
            opacity: 0.8;
            font-size: 18px;
            font-weight: 500;
            line-height: 1.22;
            color: #242424;
            @media (max-width: 575px) {
              line-height: 1.3;
            }

            a {
              font-weight: 800;
              color: #618cfa;
            }
          }
        }
      }
    }
  }

  .initial-investment {
    .container {
      background: url('/images/how-it-works-for-entrepreneurs-page/initial-investment/bg-half-circles.svg'),
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
        text-align: center;

        @media (max-width: 991px) {
          margin-bottom: 20px;
        }

        @media (max-width: 767px) {
          font-size: 30px;
        }
      }
    }

    .calculator {
      @media (max-width: 991px) {
        margin-bottom: 80px;
      }
      @media (max-width: 767px) {
        max-width: 500px;
        margin: 0px auto;
        margin-bottom: 40px;
      }

      .description {
        opacity: 0.8;
        font-size: 18px;
        font-weight: 500;
        line-height: 1.22;
        color: #242424;
        margin-bottom: 20px;
        margin-left: 20px;

        @media (max-width: 991px) {
          margin-left: 0px;
          margin-bottom: 30px;
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

  .become-a-part {
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
      background-image: url('/images/how-it-works-for-entrepreneurs-page/become-part/bg-become-a-part.svg');
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: cover;

      @media (max-width: 767px) {
        background-image: url('/images/how-it-works-for-entrepreneurs-page/become-part/bg-become-a-part-mobile.svg');
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
