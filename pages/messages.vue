<template>
  <div>
    <div class="messages-page">
      <div class="container">
        <div class="heading">
          <h2>Messages</h2>
        </div>
        <div class="content">
          <div class="chat">
            <div class="contacts">
              <div class="tabs">
                <span class="all-meesages">All Messages</span>
                <span class="new-message" @click="openModalNewMessage"
                  >New Message+</span
                >
              </div>
              <div class="users">
                <vue-scroll ref="vs" :ops="ops">
                  <div class="user">
                    <div class="avatar">
                      <img
                        src="/static/images/messages-page/avatar.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div class="text">
                      <div class="author">
                        <div class="name">Victor Roberts</div>
                        <div class="time">4:01 PM</div>
                      </div>
                      <div class="message">
                        <div class="last-message">
                          Since you were already working within the co. . .
                        </div>
                        <div class="count">2</div>
                      </div>
                    </div>
                  </div>
                  <div class="user active">
                    <div class="avatar">
                      <img
                        src="/static/images/messages-page/avatar.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div class="text">
                      <div class="author">
                        <div class="name">Victor Roberts</div>
                        <div class="time">4:01 PM</div>
                      </div>
                      <div class="message">
                        <div class="last-message">
                          Since you were already working within the co. . .
                        </div>
                        <div class="count">2</div>
                      </div>
                    </div>
                  </div>
                  <div class="user">
                    <div class="avatar">
                      <img
                        src="/static/images/messages-page/avatar.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div class="text">
                      <div class="author">
                        <div class="name">Victor Roberts</div>
                        <div class="time">4:01 PM</div>
                      </div>
                      <div class="message">
                        <div class="last-message">
                          Since you were already working within the co. . .
                        </div>
                        <div class="count">2</div>
                      </div>
                    </div>
                  </div>
                  <div class="user">
                    <div class="avatar">
                      <img
                        src="/static/images/messages-page/avatar.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div class="text">
                      <div class="author">
                        <div class="name">Victor Roberts</div>
                        <div class="time">4:01 PM</div>
                      </div>
                      <div class="message">
                        <div class="last-message">
                          Since you were already working within the co. . .
                        </div>
                        <div class="count">2</div>
                      </div>
                    </div>
                  </div>
                  <div class="user">
                    <div class="avatar">
                      <img
                        src="/static/images/messages-page/avatar.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div class="text">
                      <div class="author">
                        <div class="name">Victor Roberts</div>
                        <div class="time">4:01 PM</div>
                      </div>
                      <div class="message">
                        <div class="last-message">
                          Since you were already working within the co. . .
                        </div>
                        <div class="count">2</div>
                      </div>
                    </div>
                  </div>
                  <div class="user">
                    <div class="avatar">
                      <img
                        src="/static/images/messages-page/avatar.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div class="text">
                      <div class="author">
                        <div class="name">Victor Roberts</div>
                        <div class="time">4:01 PM</div>
                      </div>
                      <div class="message">
                        <div class="last-message">
                          Since you were already working within the co. . .
                        </div>
                        <div class="count">2</div>
                      </div>
                    </div>
                  </div>
                  <div class="user">
                    <div class="avatar">
                      <img
                        src="/static/images/messages-page/avatar.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div class="text">
                      <div class="author">
                        <div class="name">Victor Roberts</div>
                        <div class="time">4:01 PM</div>
                      </div>
                      <div class="message">
                        <div class="last-message">
                          Since you were already working within the co. . .
                        </div>
                        <div class="count">2</div>
                      </div>
                    </div>
                  </div>
                  <div class="user">
                    <div class="avatar">
                      <img
                        src="/static/images/messages-page/avatar.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div class="text">
                      <div class="author">
                        <div class="name">Victor Roberts</div>
                        <div class="time">4:01 PM</div>
                      </div>
                      <div class="message">
                        <div class="last-message">
                          Since you were already working within the co. . .
                        </div>
                        <div class="count">2</div>
                      </div>
                    </div>
                  </div>
                  <div class="user">
                    <div class="avatar">
                      <img
                        src="/static/images/messages-page/avatar.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div class="text">
                      <div class="author">
                        <div class="name">Victor Roberts</div>
                        <div class="time">4:01 PM</div>
                      </div>
                      <div class="message">
                        <div class="last-message">
                          Since you were already working within the co. . .
                        </div>
                        <div class="count">2</div>
                      </div>
                    </div>
                  </div>
                  <div class="user">
                    <div class="avatar">
                      <img
                        src="/static/images/messages-page/avatar.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div class="text">
                      <div class="author">
                        <div class="name">Victor Roberts</div>
                        <div class="time">4:01 PM</div>
                      </div>
                      <div class="message">
                        <div class="last-message">
                          Since you were already working within the co. . .
                        </div>
                        <div class="count">2</div>
                      </div>
                    </div>
                  </div>
                  <div class="user">
                    <div class="avatar">
                      <img
                        src="/static/images/messages-page/avatar.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div class="text">
                      <div class="author">
                        <div class="name">Victor Roberts</div>
                        <div class="time">4:01 PM</div>
                      </div>
                      <div class="message">
                        <div class="last-message">
                          Since you were already working within the co. . .
                        </div>
                        <div class="count">2</div>
                      </div>
                    </div>
                  </div>
                  <div class="user">
                    <div class="avatar">
                      <img
                        src="/static/images/messages-page/avatar.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div class="text">
                      <div class="author">
                        <div class="name">Victor Roberts</div>
                        <div class="time">4:01 PM</div>
                      </div>
                      <div class="message">
                        <div class="last-message">
                          Since you were already working within the co. . .
                        </div>
                        <div class="count">2</div>
                      </div>
                    </div>
                  </div>
                  <div class="user">
                    <div class="avatar">
                      <img
                        src="/static/images/messages-page/avatar.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div class="text">
                      <div class="author">
                        <div class="name">Victor Roberts</div>
                        <div class="time">4:01 PM</div>
                      </div>
                      <div class="message">
                        <div class="last-message">
                          Since you were already working within the co. . .
                        </div>
                        <div class="count">2</div>
                      </div>
                    </div>
                  </div>
                </vue-scroll>
              </div>
            </div>
            <div class="messages">
              <div class="recipient">
                <div class="name">Victor Roberts</div>
                <div class="author">
                  <div class="avatar">
                    <img
                      src="/static/images/messages-page/avatar.jpg"
                      alt="avatar"
                    />
                  </div>
                  <div class="settings"><i class="fal fa-cog"></i></div>
                </div>
              </div>
              <div class="correspondence">
                <div class="interlocutor">
                  <div class="info">
                    <div class="author">
                      <div class="avatar">
                        <img
                          src="/static/images/messages-page/avatar.jpg"
                          alt="avatar"
                        />
                      </div>
                      <div class="name">Victor Roberts</div>
                    </div>
                    <div class="time">4:01 PM</div>
                  </div>
                  <div class="message">
                    Hi Justin! We just wanted to welcome you to our team.
                  </div>
                </div>
                <div class="sender">
                  <div class="message">
                    Hi Justin! We just wanted to welcome you to our team.
                  </div>
                </div>
                <div class="interlocutor">
                  <div class="info">
                    <div class="author">
                      <div class="avatar">
                        <img
                          src="/static/images/messages-page/avatar.jpg"
                          alt="avatar"
                        />
                      </div>
                      <div class="name">Victor Roberts</div>
                    </div>
                    <div class="time">4:01 PM</div>
                  </div>
                  <div class="message">
                    We are all excited to have you, we loved the work that you
                    showed us during your interview and you fit well with
                    everyone on our team and company. If you have any questions
                    feel free to ask and someone on the team will help you out.
                  </div>
                  <div class="message">
                    Since you were already working within the company for
                    another position, it won’t long until you have access to all
                    of our files.
                  </div>
                </div>
              </div>
              <div class="type-a-message">
                <input type="text" placeholder="Type a message. . ." />
                <div class="nav">
                  <span class="attach-image"
                    ><i class="fal fa-image-polaroid"></i
                  ></span>
                  <span class="attach-file"
                    ><i class="fal fa-paperclip"></i
                  ></span>
                  <span class="smile"><i class="fal fa-grin"></i></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Modal
      :is-show-modal="isShowModalNewMessage"
      width="518"
      @isCloseModal="isCloseModalNewMessage"
    >
      <div class="modal-new-message">
        <div class="heading"><h2>New Message</h2></div>
        <div class="body">
          <div class="search">
            <div class="input">
              <input type="text" />
              <i class="fal fa-search"></i>
            </div>
          </div>
          <div class="users">
            <div class="user">
              <div class="avatar">
                <img
                  src="/static/images/messages-page/avatar.jpg"
                  alt="avatar"
                />
              </div>
              <div class="text">
                <div class="author">
                  <div class="name">Victor Roberts</div>
                </div>
                <div class="profession">Founder at Forbes</div>
              </div>
            </div>
            <div class="user">
              <div class="avatar">
                <img
                  src="/static/images/messages-page/avatar.jpg"
                  alt="avatar"
                />
              </div>
              <div class="text">
                <div class="author">
                  <div class="name">Victor Roberts</div>
                </div>
                <div class="profession">Founder at Forbes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from '@components/Common/Modal'

export default {
  components: {
    Modal,
  },
  layout: 'LayoutApplication',
  data() {
    return {
      isShowModalNewMessage: false,
      ops: {
        vuescroll: {
          mode: 'native',
          sizeStrategy: 'percent',
          detectResize: true,
          locking: true,
        },
        scrollPanel: {
          scrollingY: true,
          scrollingX: false,
        },
        rail: {
          size: '1px',
        },
        bar: {
          onlyShowBarOnScroll: false,
          background: '#989898',
        },
      },
    }
  },
  methods: {
    openModalNewMessage() {
      this.isShowModalNewMessage = true
    },
    isCloseModalNewMessage() {
      this.isShowModalNewMessage = false
    },
  },
}
</script>
<style lang="scss" scoped>
.messages-page {
  // .container {
  //   @media (max-width: 767px) {
  //     padding: 15px !important;
  //   }
  // }
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
    position: relative;
    width: 100%;
    height: 786px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #ffffff;
    overflow: hidden;
    @media (max-width: 767px) {
      height: auto;
      width: auto;
      border-radius: 0px;
    }

    .chat {
      display: flex;
      overflow: hidden;
      @media (max-width: 767px) {
        position: relative;
      }

      .contacts {
        width: 600px;
        background-color: #ffffff;
        @media (max-width: 767px) {
          width: 100%;
        }

        .tabs {
          padding: 0px 30px;
          min-height: 90px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #618cf84d;

          .all-meesages {
            font-size: 18px;
            font-weight: 700;
            line-height: 1.11;
            color: #242424;
            margin-right: 15px;
            cursor: pointer;
            @media (max-width: 1199px) {
              font-size: 16px;
            }
          }

          .new-message {
            font-size: 18px;
            font-weight: 700;
            line-height: 1.11;
            color: #242424;
            cursor: pointer;
            @media (max-width: 1199px) {
              font-size: 16px;
            }
          }
        }

        .users {
          height: 700px;
          @media (max-width: 767px) {
            height: auto;
          }

          .user {
            display: flex;
            align-items: center;
            border-bottom: 1px solid #618cf84d;
            padding: 25px 30px;
            cursor: pointer;

            &:hover,
            &:active {
              background-color: #f6f9ff;
            }

            &.active {
              background-color: #f6f9ff;
              box-shadow: inset 5px 0 0 0 #618cfa;
            }

            .avatar {
              width: 42px;
              height: 42px;
              flex: 0 0 42px;
            }

            .text {
              margin-left: 30px;
              @media (max-width: 767px) {
                width: 100%;
              }

              .author {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 5px;

                .name {
                  font-size: 16px;
                  font-weight: 600;
                  line-height: 1.5;
                  color: #242424;
                  margin-right: 15px;
                }

                .time {
                  font-size: 10px;
                  line-height: 1.8;
                  letter-spacing: 0.42px;
                  color: #6e6e6e;
                }
              }

              .message {
                display: flex;
                justify-content: space-between;
                align-items: center;

                .last-message {
                  font-size: 12px;
                  line-height: 1.67;
                  color: #6e6e6e;
                  margin-right: 15px;
                }

                .count {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  font-size: 10px;
                  font-weight: 600;
                  text-align: center;
                  color: #ffffff;
                  min-width: 17px;
                  height: 17px;
                  background-color: #618cfa;
                  border-radius: 50%;
                }
              }
            }
          }
        }
      }

      .messages {
        border-left: 1px solid rgba(97, 140, 248, 0.3);
        width: 100%;
        height: 786px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: #ffffff;
        @media (max-width: 767px) {
          border-left: none;
          position: absolute;
          top: 0px;
          right: -100%;
        }

        .recipient {
          display: flex;
          justify-content: space-between;
          align-items: center;
          min-height: 90px;
          padding: 0px 30px;
          border-bottom: 1px solid rgba(97, 140, 248, 0.3);
          font-size: 18px;
          font-weight: 700;
          line-height: 1.11;
          color: #242424;
          @media (max-width: 1199px) {
            font-size: 16px;
          }

          .author {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .avatar {
              width: 42px;
              height: 42px;
              flex: 0 0 42px;
            }

            .settings {
              margin-left: 20px;

              i {
                color: #618cfa;
                font-size: 26px;
              }
            }
          }
        }

        .correspondence {
          padding: 30px;
          height: 100%;

          .interlocutor {
            max-width: 360px;
            margin-top: 16px;

            .info {
              display: flex;
              align-items: flex-start;
              justify-content: space-between;

              .author {
                display: flex;
                align-items: center;
                justify-content: space-between;

                .avatar {
                  width: 22px;
                  height: 22px;
                  flex: 0 0 22px;
                }

                .name {
                  margin-left: 15px;
                  font-size: 14px;
                  font-weight: 700;
                  line-height: 1.43;
                  color: #242424;
                }
              }

              .time {
                font-size: 12px;
                line-height: 1.5;
                letter-spacing: 0.5px;
                color: #6e6e6e;
              }
            }

            .message {
              margin-top: 16px;
              font-size: 13px;
              line-height: 1.54;
              color: #ffffff;
              padding: 10px 14px;
              border-radius: 10px;
              background-color: #618cfa;
            }
          }

          .sender {
            max-width: 360px;
            margin-left: auto;
            margin-top: 50px;

            .message {
              margin-top: 14px;
              font-size: 13px;
              line-height: 1.54;
              color: #6e6e6e;
              padding: 10px 14px;
              border-radius: 10px;
              background-color: #f2f5f7;
              margin-left: 30px;
            }
          }
        }

        .type-a-message {
          display: flex;
          border-top: 1px solid rgba(97, 140, 248, 0.3);

          input {
            padding: 20px 30px;
            width: 100%;
            border: none;
            outline: none;
            font-size: 14px;
            line-height: 1.43;
            color: #6e6e6e;
          }

          .nav {
            display: flex;
            align-items: center;
            padding: 20px 30px;

            .attach-image {
              margin-right: 20px;
              cursor: pointer;

              i {
                font-size: 20px;
                color: #618cfa;
              }
            }

            .attach-file {
              margin-right: 20px;
              cursor: pointer;

              i {
                font-size: 20px;
                color: #618cfa;
              }
            }

            .smile {
              cursor: pointer;

              i {
                font-size: 20px;
                color: #618cfa;
              }
            }
          }
        }
      }
    }
  }
}

.modal-new-message {
  background-repeat: no-repeat;
  background-position: 50% 100%;
  padding: 40px 50px;
  position: relative;

  @media (max-width: 576px) {
    padding: 40px 30px;
  }

  .heading {
    h2 {
      font-size: 18px;
      font-weight: 700;
      line-height: 1.11;
      color: #242424;
    }
  }

  .body {
    .search {
      padding: 15px 0px;

      .input {
        position: relative;
        width: 100%;

        i {
          color: #d8dee1;
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
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
          padding-right: 50px;

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

    .users {
      .user {
        display: flex;
        align-items: center;
        padding: 15px 0px;
        cursor: pointer;

        &:hover,
        &:active {
          .text {
            .author {
              .name {
                color: #618cfa;
              }
            }
          }
        }

        &.active {
          margin-left: 50px;
          background-color: #f6f9ff;
          box-shadow: inset 5px 0 0 0 #618cfa;
        }

        .avatar {
          width: 52px;
          height: 52px;
          flex: 0 0 52px;
        }

        .text {
          margin-left: 15px;

          .author {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 5px;

            .name {
              font-size: 16px;
              font-weight: 600;
              line-height: 1.5;
              color: #242424;
            }
          }

          .profession {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;
            line-height: 1.67;
            color: #6e6e6e;
          }
        }
      }
    }
  }
}
</style>
