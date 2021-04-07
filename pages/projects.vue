<template>
  <div class="about-page">
    <Preloader :show="preloader"></Preloader>
    <section class="header">
      <div class="header-top">
        <NavigationMenu></NavigationMenu>
      </div>
      <div class="header-bottom">
        <div class="container">
          <div class="categorys">
            <div class="categorys-overflowing">
              <div class="category"><a href="">All</a></div>
              <div class="category"><a href="">Comics & Illustration</a></div>
              <div class="category"><a href="">Design & Tech</a></div>
              <div class="category"><a href="">Crypto</a></div>
              <div class="category"><a href="">Food & Craft</a></div>
              <div class="category"><a href="">Games</a></div>
              <div v-if="otherCategory.length" class="other">
                <treeselect
                  v-model="other"
                  :clearable="false"
                  :options="otherCategory"
                  placeholder="Other"
                  :searchable="false"
                />
              </div>
            </div>
          </div>
          <div class="featured-project">
            <div class="heading"><h2>Featured Project</h2></div>
            <div class="project">
              <div class="thumbnail">
                <img
                  src="/images/projects-page/featured-project/featured-thumbnail.jpg"
                  alt="thumbnail"
                />
              </div>
              <div class="meta">
                <span class="category"><i class="fas fa-list"></i>Crypto</span>
              </div>
              <div class="title"><h3>Lorem ipsum dolor</h3></div>
              <div class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </div>
              <div class="author">
                <span class="name">By <b>Daria Krasnoluckaya</b></span
                ><span class="location"
                  ><i class="fal fa-map-marker-alt"></i
                  ><b>The Scottish Borders, UK</b></span
                >
              </div>
            </div>
          </div>
          <div class="other-projects">
            <div class="heading"><h2>Other Projects</h2></div>
            <div class="projects">
              <div class="row">
                <div class="col-lg-4">
                  <div class="project">
                    <div class="thumbnail">
                      <img
                        src="/images/projects-page/featured-project/other-thumbnail.jpg"
                        alt="thumbnail"
                      />
                    </div>
                    <div class="meta">
                      <span class="category"
                        ><i class="fas fa-list"></i>Crypto</span
                      >
                    </div>
                    <div class="title"><h3>Lorem ipsum dolor</h3></div>
                    <div class="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </div>
                    <div class="author">
                      <span class="name">By <b>Daria Krasnoluckaya</b></span
                      ><span class="location"
                        ><i class="fal fa-map-marker-alt"></i
                        ><b>The Scottish Borders, UK</b></span
                      >
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="project">
                    <div class="thumbnail">
                      <img
                        src="/images/projects-page/featured-project/other-thumbnail.jpg"
                        alt="thumbnail"
                      />
                    </div>
                    <div class="meta">
                      <span class="category"
                        ><i class="fas fa-list"></i>Crypto</span
                      >
                    </div>
                    <div class="title"><h3>Lorem ipsum dolor</h3></div>
                    <div class="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </div>
                    <div class="author">
                      <span class="name">By <b>Daria Krasnoluckaya</b></span
                      ><span class="location"
                        ><i class="fal fa-map-marker-alt"></i
                        ><b>The Scottish Borders, UK</b></span
                      >
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="project mb-0">
                    <div class="thumbnail">
                      <img
                        src="/images/projects-page/featured-project/other-thumbnail.jpg"
                        alt="thumbnail"
                      />
                    </div>
                    <div class="meta">
                      <span class="category"
                        ><i class="fas fa-list"></i>Crypto</span
                      >
                    </div>
                    <div class="title"><h3>Lorem ipsum dolor</h3></div>
                    <div class="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </div>
                    <div class="author">
                      <span class="name">By <b>Daria Krasnoluckaya</b></span
                      ><span class="location"
                        ><i class="fal fa-map-marker-alt"></i
                        ><b>The Scottish Borders, UK</b></span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="button">
              <button type="button" class="btn-blue">Show more</button>
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
    <Footer></Footer>
  </div>
</template>
<script>
import Preloader from '@components/Common/Preloader'
import NavigationMenu from '@components/Landing/NavigationMenu'
import Footer from '@components/Landing/Footer'
import Treeselect from '@riophae/vue-treeselect'
export default {
  components: {
    NavigationMenu,
    Footer,
    Preloader,
    Treeselect,
  },
  data() {
    return {
      preloader: true,
      other: null,
      otherCategory: [],
      lastWidth: null,
    }
  },
  created() {
    this.preloader = false
    // window.addEventListener("resize", this.onResize);
    // this.lastWidth = window.innerWidth;
  },
  mounted() {
    // this.onResize();
  },

  methods: {
    onResize() {
      const overflowing = this.$el.querySelector('.categorys-overflowing')
      const categorys = this.$el.querySelector('.categorys')

      const overflowingBound = overflowing.getBoundingClientRect().width
      const categorysBound = categorys.getBoundingClientRect().width

      const newWidth = window.innerWidth

      // if (this.lastWidth < newWidth) {
      //   console.log("expand");
      // } else {
      //   console.log("shrink");
      // }

      if (this.lastWidth >= newWidth) {
        console.log('shrink')

        if (overflowingBound > categorysBound) {
          const lastElement = overflowing.querySelectorAll('.category')
          this.otherCategory.push({
            id: lastElement.length - 1,
            label: lastElement[lastElement.length - 1].childNodes[0].innerText,
          })
          lastElement[lastElement.length - 1].remove()
        }
      } else {
        console.log('expand')

        const last = this.otherCategory[this.otherCategory.length - 1]
        overflowing.append(last.label)
        this.otherCategory.splice(-1, 1)
      }
      this.lastWidth = newWidth
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
    .container {
      background: $bg-grey;
      background-repeat: no-repeat;
      position: relative;
      border-radius: 15px;
      background-position: 50% 50%;
      padding-top: calc(86px + 50px);
      @media (max-width: 767px) {
        padding: 70px 30px;
        padding-top: calc(86px + 50px);
        background-repeat: no-repeat;
        border-radius: 0px;
      }

      @media (max-width: 575px) {
        padding: 100px 30px;
        padding-top: calc(46px + 104px);
        background-position: 100% 100%;
      }
    }
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

      .categorys {
        margin-bottom: 30px;
        border: 4px solid yellow;
        .categorys-overflowing {
          border: 4px solid blue;
          min-width: min-content;
          padding: 30px 42px;
          border-radius: 10px;
          background-color: #dde6fc;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .category {
            a {
              text-decoration: none;
              font-size: 22px;
              font-weight: 600;
              color: #242424;
              cursor: pointer;
              white-space: nowrap;
            }
            margin-right: 30px;
            &:last-child {
              margin-right: 0px;
            }
          }
        }
      }
    }
  }

  .featured-project {
    margin-bottom: 50px;
    .heading {
      h2 {
        margin: 0px;
        margin-bottom: 30px;
        font-size: 40px;
        font-weight: 500;
        line-height: 1.33;
        letter-spacing: 0.75px;
        color: #242424;
      }
    }
    .project {
      padding: 30px;
      border-radius: 20px;
      background-color: #ffffff;
      .thumbnail {
        position: relative;
        padding-top: 56.25%;
        display: block;
        margin-bottom: 20px;

        @media (max-width: 980px) {
          padding-top: 75%;
        }

        img {
          border-radius: 20px;
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          object-fit: cover;
        }
      }
      .meta {
        margin-bottom: 10px;
        .category {
          font-size: 14px;
          font-weight: 600;
          line-height: 1.57;
          color: #618cfa;
          i {
            margin-right: 5px;
          }
        }
      }
      .title {
        h3 {
          margin: 0px;
          margin-bottom: 10px;
          font-size: 26px;
          font-weight: 700;
          line-height: 1.15;
          color: #242424;
        }
      }
      .description {
        margin-bottom: 10px;
        font-size: 15px;
        line-height: 1.47;
        color: #6e6e6e;
      }
      .author {
        font-size: 14px;
        line-height: 1.57;
        color: #242424;
        .name {
          margin-right: 10px;
        }
        .location {
          i {
            margin-right: 5px;
          }
        }
      }
    }
  }
  .other-projects {
    .heading {
      h2 {
        margin: 0px;
        margin-bottom: 30px;
        font-size: 26px;
        font-weight: 500;
        line-height: 2.04;
        letter-spacing: 0.49px;
        color: #242424;
      }
    }
    .projects {
      margin-bottom: 40px;

      .project {
        padding: 30px;
        border-radius: 20px;
        background-color: #ffffff;

        @media (max-width: 980px) {
          margin-bottom: 30px;
        }

        .thumbnail {
          position: relative;
          padding-top: 70%;
          display: block;
          margin-bottom: 20px;
          @media (max-width: 980px) {
            padding-top: 75%;
          }
          img {
            border-radius: 20px;
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            object-fit: cover;
          }
        }
        .meta {
          margin-bottom: 10px;
          .category {
            font-size: 14px;
            font-weight: 600;
            line-height: 1.57;
            color: #618cfa;
            i {
              margin-right: 5px;
            }
          }
        }
        .title {
          h3 {
            margin: 0px;
            margin-bottom: 10px;
            font-size: 26px;
            font-weight: 700;
            line-height: 1.15;
            color: #242424;
          }
        }
        .description {
          margin-bottom: 10px;
          font-size: 15px;
          line-height: 1.47;
          color: #6e6e6e;
        }
        .author {
          font-size: 14px;
          line-height: 1.57;
          color: #242424;
          .name {
            margin-right: 10px;
          }
          .location {
            i {
              margin-right: 5px;
            }
          }
        }
      }
    }
    .button {
      text-align: center;
    }
  }

  .become-a-part {
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
      background-image: url('/images/projects-page/become-part/bg-become-a-part.svg');
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: cover;

      @media (max-width: 767px) {
        background-image: url('/images/projects-page/become-part/bg-become-a-part-mobile.svg');
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
