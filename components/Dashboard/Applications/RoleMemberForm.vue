<template>
  <div class="form">
    <div class="form-content">
      <div class="input">
        <input
          v-model.trim="$v.form.email.$model"
          type="text"
          placeholder="Email"
          :class="{
            'is-valid': $v.$dirty && $v.form.email.$error,
          }"
        />
        <div v-if="$v.$dirty" class="is-valid-text">
          <span v-if="!$v.form.email.required">Email is required</span>
          <span v-if="!$v.form.email.email">Email is invalid</span>
        </div>
      </div>
      <div class="select">
        <div class="vue-select">
          <treeselect
            v-model="form.role"
            :clearable="false"
            :options="roles"
            :load-options="loadOptions"
            placeholder="Select Role"
            :class="{
              'is-valid': $v.form.role.$error,
            }"
          />
        </div>
        <div v-if="$v.form.role.$error" class="is-valid-text">
          <span v-if="!$v.form.role.required">Role is required</span>
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
import Treeselect, { LOAD_ROOT_OPTIONS } from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'

import { required, email } from 'vuelidate/lib/validators'

export default {
  components: {
    Treeselect,
  },
  props: {
    email: String,
    role: String,
    options: {
      type: Array,
      required: true,
      validator(arr) {
        // check if "options" is array and each item has properties "id" and "label"
        if (!Array.isArray(arr)) return false
        return arr.every(
          (item) => Object.keys(item).sort().toString() === 'id,label'
        )
      },
    },
  },
  data() {
    return {
      form: {
        email: '',
        role: null,
      },
      roles: null,
    }
  },
  validations() {
    return {
      form: {
        email: {
          required,
          email,
        },
        role: {
          required,
        },
      },
    }
  },
  created() {
    if (this.email) this.form.email = this.email
    if (this.role) this.form.role = this.role
  },
  methods: {
    loadOptions({ action, callback }) {
      if (action === LOAD_ROOT_OPTIONS) {
        this.roles = this.options
        this.form.role = this.role || this.options[0].id
        callback()
      }
    },
    resetForm() {
      this.form = {
        email: '',
        role: null,
      }
      this.$v.form.$reset()
    },
    onSublit() {
      this.$v.form.$touch()
      if (this.$v.form.$invalid) return
      this.$emit('onSubmit', {
        email: this.form.email.toLowerCase(),
        role: this.form.role,
      })
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
