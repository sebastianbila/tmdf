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
            <div class="sub-title">About</div>
            <div class="title">
              <h1>
                Helping Founders get their <span class="blue">MVPs</span> built
              </h1>
            </div>
            <div class="descripton">
              <p>
                The Million Dollar Fund is an online business incubator network,
                launching MVPs from the pre-seed &amp; bootstrap phases.
              </p>
            </div>
            <div class="button">
              <button type="button" class="btn-blue">Apply</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="about-page-us">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="image">
              <img src="/images/about-page/about-us/group-16.png" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="text">
              <div class="title">
                <h2>About us</h2>
              </div>
              <div class="description">
                <p>
                  The Million Dollar Fund is an accessible service for rising
                  entrepreneurs to secure pre-seed/pre-investment funding to
                  develop their idea into an MVP, matching them with top
                  investors and development teams. Entrepreneurs can network
                  directly with experienced investors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="our-vision">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="text">
              <div class="title">
                <img
                  src="/images/about-page/our-vision/icon.svg"
                  alt="icon"
                />
                <h2>Our vision</h2>
              </div>
              <div class="description">
                <p>
                  The startup market is more competitive than ever. Taking the
                  first steps to funding your venture can be challenging - few
                  startups make it out the bootstrap/pre-seed phase.
                </p>
                <p>
                  That’s why The Million Dollar Fund was created through Xicay
                  Ventures, to give a new path forward for entrepreneurs with
                  access to experienced investors and product strategists.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="image">
              <img src="/images/about-page/our-vision/image.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="our-mission">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="image">
              <img src="/images/about-page/our-mission/image.png" />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="text">
              <div class="title">
                <img
                  src="/images/about-page/our-mission/icon.svg"
                  alt="icon"
                />
                <h2>Our mission</h2>
              </div>
              <div class="description">
                <p>
                  We believe that early ventures need professional assistance to
                  reach the first round of financing. The Million Dollar Fund
                  takes a chance on passionate ideas, bringing entrepreneurs the
                  capital and expertise needed to advance an MVP and build a
                  market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="founders">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div class="heading">
              <h2>Board of Avisors</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-md-6 col-lg-4">
            <div class="card">
              <div class="image">
                <img
                  src="/images/about-page/founders/girl.png"
                  alt="girl"
                />
              </div>
              <div class="title">
                <h4>Lorem Ipsum</h4>
              </div>
              <div class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-md-6 col-lg-4">
            <div class="card">
              <div class="image">
                <img
                  src="/images/about-page/founders/black-girl.png"
                  alt="black-girl"
                />
              </div>
              <div class="title">
                <h4>Lorem Ipsum</h4>
              </div>
              <div class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-md-6 col-lg-4">
            <div class="card mb-0">
              <div class="image">
                <img
                  src="/images/about-page/founders/man.png"
                  alt="man"
                />
              </div>
              <div class="title">
                <h4>Lorem Ipsum</h4>
              </div>
              <div class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
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
          <button type="button" class="btn-white">APPLY</button>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>
<script>
import Preloader from '@components/Common/Preloader'
import NavigationMenu from '@components/Landing/NavigationMenu'
import Footer from '@components/Landing/Footer'

export default {
  components: {
    NavigationMenu,
    Footer,
    Preloader,
  },
  data() {
    return {
      preloader: true,
    }
  },
  created() {
    this.preloader = false
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
        background: url('/images/about-page/header/bg-header-about.svg'),
          $bg-blue;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        border-radius: 15px;
        background-position: 50% 50%;
        padding: 140px;
        padding-top: calc(86px + 104px);
        padding-bottom: 160px;
        text-align: center;
        background-size: contain;
        @media (max-width: 767px) {
          padding: 70px 30px;
          padding-top: calc(86px + 104px);
          background: url('/images/about-page/header/bg-header-about-mobile.svg'),
            $bg-blue;
          background-repeat: no-repeat;
          border-radius: 0px;
          background-position: 50% 100%;
        }

        @media (max-width: 575px) {
          padding: 100px 30px;
          padding-top: calc(46px + 104px);
          background-position: 100% 100%;
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
              line-height: 1.22;
              letter-spacing: 0.86px;
            }
            @media (max-width: 575px) {
              margin-bottom: 10px;
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
  .co-invest {
    width: 1354px;
    height: 690px;
    object-fit: contain;
    background: url(/images/become-angel/co-invest/group-36-copy.svg) no-repeat;
    background-size: contain;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 100px 0 70px;
    .image {
      display: flex;
      align-items: center;
    }
    .content {
      margin-top: -35px;
      h2 {
        width: 500px;
        height: 53px;
        font-size: 40px;
        font-weight: 900;
        line-height: 1.22;
        letter-spacing: 0.75px;
        color: #242424;
        margin-bottom: 35px;
      }
      p {
        width: 500px;
        font-size: 28px;
        font-weight: 500;
        line-height: 1.22;
        color: #242424;
        span {
          font-weight: 800;
        }
      }
      a {
        margin-top: 25px;
      }
    }
  }

  .about-page-us {
    .container {
      background-color: $bg-grey;
      padding-top: 50px;
      padding-bottom: 0px;
      @media (max-width: 991px) {
        padding-top: 90px;
      }
    }
    .row {
      align-items: center;
      @media (max-width: 991px) {
        flex-direction: column-reverse;
      }
    }

    .text {
      @media (max-width: 991px) {
        margin-bottom: 30px;
      }

      .title {
        margin-bottom: 20px;
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
            margin-bottom: 20px;
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
        margin-bottom: 40px;
        @media (max-width: 991px) {
          text-align: center;
        }
        p {
          margin-top: 0px;
        }
      }
    }
    .image {
      display: flex;
      align-items: flex-end;
      @media (max-width: 991px) {
        max-width: 80%;
        margin: 0px auto;
      }
      @media (max-width: 575px) {
        max-width: 100%;
      }
    }
  }

  .our-vision {
    .container {
      background: $bg-blue;
      background-repeat: no-repeat;
      background-position: 0% 100%;
      padding-bottom: 50px;

      @media (min-device-width: 991px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
        padding-bottom: 80px;
      }
    }
    .row {
      align-items: center;
    }
    .text {
      position: relative;

      @media (max-width: 767px) {
        padding: 0px;
        text-align: center;
      }
      .title {
        @media (max-width: 991px) {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        img {
          width: 70px;
          height: 70px;
          margin-bottom: 20px;
          @media (max-width: 991px) {
            width: 70px;
            height: 70px;
            position: static;
            margin-right: 0px;
          }
        }
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

          @media (min-device-width: 991px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
            margin-bottom: 10px;
          }
        }
      }
      .description {
        font-size: 18px;
        font-weight: 500;
        line-height: 1.7;
        color: #242424;
        margin-bottom: 40px;
        @media (max-width: 991px) {
          text-align: center;
        }
        p {
          margin-top: 0px;
        }
      }
    }

    .image {
      text-align: center;
      @media (max-width: 991px) {
        max-width: 70%;
        margin: 0px auto;
      }
      @media (max-width: 575px) {
        max-width: 100%;
      }
    }
  }

  .our-mission {
    .container {
      background: $bg-grey;
      background-repeat: no-repeat;
      background-position: 0% 100%;
    }

    .row {
      align-items: center;
      @media (max-width: 991px) {
        flex-direction: column-reverse;
      }
    }

    .text {
      position: relative;

      @media (max-width: 767px) {
        padding: 0px;
        text-align: center;
      }
      .title {
        @media (max-width: 991px) {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

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
            margin-bottom: 20px;
          }

          @media (max-width: 767px) {
            font-size: 30px;
          }

          @media (min-device-width: 991px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
            margin-bottom: 10px;
          }
        }

        img {
          width: 70px;
          height: 70px;
          margin-bottom: 20px;
          @media (max-width: 991px) {
            width: 70px;
            height: 70px;
            position: static;
            margin-right: 0px;
          }
        }
      }
      .description {
        font-size: 18px;
        font-weight: 500;
        line-height: 1.7;
        color: #242424;
        margin-bottom: 40px;
        @media (max-width: 991px) {
          text-align: center;
        }

        p {
          margin-top: 0px;
        }
      }
    }

    .image {
      text-align: center;

      @media (max-width: 991px) {
        max-width: 70%;
        margin: 0px auto;
        margin-bottom: 30px;
      }
      @media (max-width: 575px) {
        max-width: 100%;
      }

      @media (min-device-width: 991px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
        margin-right: 20px;
      }
    }
  }

  .founders {
    .container {
      background: url('/images/about-page/founders/bg-founders.svg'),
        $bg-blue;
      background-position: 5% 100%;
      background-repeat: no-repeat;
      @media (max-width: 991px) {
        padding: 90px 30px;
      }
      @media (max-width: 767px) {
        background-position: 50% 100%;
      }
      @media (min-device-width: 991px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
        padding: 90px 30px;
      }
    }
    .row {
      justify-content: center;
    }
    .heading {
      text-align: center;
      img {
        margin-bottom: 30px;
      }
      h2 {
        margin: 0px;
        margin-bottom: 30px;
        font-size: 40px;
        font-weight: 900;
        line-height: 1.22;
        letter-spacing: 0.75px;
        color: #242424;
        text-align: center;

        @media (max-width: 767px) {
          margin-left: 0;
          font-size: 30px;
        }
      }
    }

    .card {
      border-radius: 15px;
      box-shadow: 0 2px 22px 0 rgba(32, 49, 94, 0.13);
      background-color: #618cfa;
      text-align: center;
      padding: 35px 35px 50px 35px;

      @media (max-width: 991px) {
        padding: 20px 30px 50px 30px;
        margin-bottom: 30px;
      }

      @media (max-width: 767px) {
        max-width: 320px;
        margin: 0px auto;
        margin-bottom: 30px;
      }

      @media (max-width: 575px) {
        height: auto;
        padding: 30px;
      }

      @media (max-width: 480px) {
        width: 100%;
        max-width: 100%;
      }

      .image {
        @media (max-width: 991px) {
          padding: 0px 15px;
        }
      }

      .title {
        h4 {
          margin: 0px;
          font-size: 22px;
          font-weight: 700;
          line-height: 1.22;
          color: #ffffff;
          margin-bottom: 10px;
        }
      }
      .description {
        opacity: 0.8;
        font-size: 18px;
        font-weight: 500;
        line-height: 1.22;
        color: #ffffff;
        margin: 10px 0px 20px 0px;
        @media (max-width: 767px) {
          line-height: 1.4;
        }
      }
    }
  }

  .submit-your-pitch {
    .container {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      background-image: url('/images/about-page/submit-your-pitch/bg-submit-your-pitch.svg');
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: cover;

      @media (max-width: 767px) {
        background-image: url('/images/about-page/submit-your-pitch/bg-submit-your-pitch-mobile.svg');
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
