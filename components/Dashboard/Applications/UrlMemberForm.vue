<template>
  <div class="form">
    <div class="form-content">
      <div class="input">
        <input
          v-model.trim="$v.form.name.$model"
          type="text"
          placeholder="Name"
          :class="{
            'is-valid': $v.form.name.$error,
          }"
        />
        <div v-if="$v.$dirty" class="is-valid-text">
          <span v-if="!$v.form.name.required">Name is required</span>
        </div>
      </div>
      <div class="input">
        <input
          v-model.trim="$v.form.url.$model"
          type="text"
          placeholder="Url"
          :class="{
            'is-valid': $v.form.url.$error,
          }"
        />
        <div v-if="$v.form.url.$error" class="is-valid-text">
          <span v-if="!$v.form.url.required">Url is required</span>
          <span v-if="!$v.form.url.url">Url is invalid</span>
        </div>
      </div>
      <div class="nav">
        <input type="submit" value="Save" @click.prevent="onSublit()" />
        <input type="button" value="Cancel" @click.prevent="onCancel()" />
      </div>
    </div>
  </div>
</template>

<script>
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
import { required, url } from 'vuelidate/lib/validators'

export default {
  props: {
    name: String,
    url: String,
  },
  data() {
    return {
      form: {
        name: '',
        url: null,
      },
    }
  },
  validations() {
    return {
      form: {
        name: {
          required,
        },
        url: {
          required,
          url,
        },
      },
    }
  },
  created() {
    if (this.name) this.form.name = this.name
    if (this.url) this.form.url = this.url
  },
  methods: {
    resetForm() {
      this.form = {
        name: '',
        url: '',
      }
      this.$v.form.$reset()
    },
    onSublit() {
      this.$v.form.$touch()
      if (this.$v.form.$invalid) return
      this.$emit('onSubmit', this.form)
    },
    onCancel() {
      this.resetForm()
      this.$emit('onCancel')
    },
  },
}
</script>

<style lang="scss" scoped>
.form {
  padding: 15px;
  border-radius: 5px;
  background-color: #f2f5f7;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  .form-content {
    max-width: 480px;
  }

  .input {
    padding-bottom: 30px;
    position: relative;
    width: 100%;

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

  .nav {
    font-size: 0px;

    input {
      text-transform: uppercase;
      background: none;
      border: none;
      font-family: $GTWalsheimPro;
      font-size: 16px;
      font-weight: 700;
      line-height: 1.22;
      letter-spacing: 0.1px;
      text-align: center;
      color: #618cfa;
      outline: none;
      padding: 0px;
      cursor: pointer;

      &:first-child {
        margin-right: 10px;
      }
    }
  }
}
</style>
