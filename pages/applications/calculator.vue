<template>
  <div class="calculator-page">
    <div class="container">
      <div class="heading">
        <h2>Calculator</h2>
      </div>
      <div class="content">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="calculator">
                <div class="text">
                  <div class="title">Convertible debt estimate</div>
                  <div class="description">
                    Once we’ve determine the MVP cost, you will be responsible
                    for 10% of the total cost. Here is a calculator to determine
                    that.
                  </div>
                </div>
                <div class="form">
                  <div class="amount">
                    <span>Project Cost (100%)</span>
                    <input
                      v-model="amount"
                      v-money="money"
                      type="text"
                      placeholder="$ Amount"
                      :class="{
                        'is-valid': $v.amount.$error,
                      }"
                    />
                    <div v-if="$v.amount.$error" class="is-valid-text">
                      <span v-if="!$v.amount.required">Name is required</span>
                    </div>
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
                <div class="more-info">
                  *Convertible debt is 2x the fund’s investment amount.
                  <a href="">More Info</a>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="image">
                <img
                  src="/static/images/calculator-page/image.svg"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="got-it">
          <div class="button">
            <button type="button" @click="onCreateApplicationsPrice">
              Got it
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { VMoney } from 'v-money'
import {
  required,
  email,
  minLength,
  maxLengt,
  numeric,
} from 'vuelidate/lib/validators'
export default {
  directives: { money: VMoney },
  components: {},
  layout: 'LayoutApplication',
  data() {
    return {
      amount: '0',
      money: {
        decimal: '.',
        thousands: ',',
        prefix: '$ ',
        precision: '0',
        masked: false,
      },
      form: {
        calculator: {
          project_price: this.amount,
        },
      },
    }
  },
  validations: {
    amount: {
      required,
    },
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
  watch: {
    amount(newPrice, oldPrice) {
      this.form.calculator.project_price = newPrice.replace(/\D+/g, '')
    },
  },
  methods: {
    onCreateApplicationsPrice() {
      this.$v.amount.$touch()
      if (this.$v.amount.$invalid) {
      } else {
        this.$store.commit('PROJECT_PRICE', this.form.calculator.project_price)
        this.$router.push('/application/create')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.calculator-page {
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
  }
  .content {
    padding: 0px !important;
    border-radius: 15px;
    color: #ffffff;
    overflow: hidden;
    @media (max-width: 767px) {
      border-radius: 0px;
      padding: 30px;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      background-size: 37px 260px, 37px 260px;
      background-position: 0% 50%, 100% 50%;
    }
    h3 {
      font-size: 18px;
      line-height: 22px;
      text-align: center;
      color: #6e6e6e;
      font-weight: 400;
      max-width: 400px;
      margin: 0px auto;
      margin-bottom: 20px;
    }

    .container {
      padding: 50px;

      .row {
        align-items: center;
      }
    }

    .calculator {
      @media (max-width: 767px) {
        max-width: 500px;
        margin: 0px auto;
        margin-bottom: 50px;
      }
      .text {
        padding-left: 15px;

        .title {
          font-size: 18px;
          font-weight: 700;
          line-height: 26px;
          color: #242424;
          margin-bottom: 10px;
          @media (max-width: 767px) {
            margin-bottom: 10px;
            text-align: center;
          }
        }
        .description {
          opacity: 0.8;
          font-size: 14px;
          font-weight: 500;
          line-height: 1.71;
          color: #242424;
          margin-bottom: 20px;

          @media (max-width: 767px) {
            margin-bottom: 20px;
            text-align: center;
          }
        }
      }
      .more-info {
        opacity: 0.8;
        font-size: 14px;
        font-weight: 500;
        line-height: 1.71;
        color: #242424;
        margin-bottom: 20px;

        @media (max-width: 767px) {
          margin-bottom: 20px;
          text-align: center;
        }
        a {
          text-decoration: none;
          font-size: 15px;
          font-weight: 700;
          line-height: 20px;
          color: #618cfa;
        }
      }

      .form {
        margin-bottom: 20px;
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
      box-shadow: 0 29px 21px 0 rgba(0, 0, 0, 0.1);
      border-radius: 50%;
    }

    .got-it {
      background-color: #f5b325;
      padding: 45px 0px;
      .button {
        text-align: center;
        @media (max-width: 767px) {
          text-align: center;
        }
        button {
          padding: 10px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-family: $GTWalsheimPro, Arial, Helvetica, sans-serif;
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
    }
  }
}
</style>
