<template>
  <div v-show="isShowModalConfirm" class="modal-bg">
    <div class="modal-overflow">
      <div class="modal-container">
        <div class="modal-content">
          <div class="modal-white-bg" :style="'max-width:' + width + 'px'">
            <div
              v-if="title"
              class="modal-header"
              style="background-color: #618cfa; padding: 20px 50px"
            >
              <div class="title" style="color: #ffffff">{{ title }}</div>
            </div>
            <div v-if="!title" class="close" @click="closeModal">
              <i class="fal fa-times-circle"></i>
            </div>
            <div class="modal-body">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'isShowModalConfirm', 'title', 'width' ],
}
</script>

<style lang="scss">
/*____________ MODAL BEGIN _________*/
.modal-bg {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1040;
  overflow: hidden;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
}

.modal-overflow {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1041;
  position: fixed;
  outline: none !important;
  overflow: hidden auto;
}

.modal-container {
  text-align: center;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  padding: 0 8px;
  box-sizing: border-box;
  font-size: 0px;

  &::before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }
}

.modal-content {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin: 0 auto;
  text-align: left;
  z-index: 1045;
  width: 100%;
  padding: 50px 0px;
  font-size: initial;
}

.modal-white-bg {
  background-color: #ffffff;
  background-position: 100% 100%;
  position: relative;
  width: auto;
  max-width: 652px;
  margin: 0 auto;
  border-radius: 5px;
  overflow: hidden;
}

.modal-header {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .title {
    text-align: center;
    color: #242424;
    font-size: 20px;
    font-weight: 600;
  }
}

/*____________ MODAL END _________*/
</style>
