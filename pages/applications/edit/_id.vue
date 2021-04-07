<template>
  <component :is="EditTypeComponent"></component>
</template>
<script>
import CreateApplicationPage from '../../Dashboard/Entrepreneur/Applications/CreateApplication/CreateApplicationPage'
import EditSubmittedApplicationPage from '../../Dashboard/Entrepreneur/Applications/EditSubmittedApplicationPage/EditSubmittedApplicationPage'
export default {
  components: {
    CreateApplicationPage,
    EditSubmittedApplicationPage,
  },
  data() {
    return {
      preloader: null,
      status: null,
    }
  },
  computed: {
    EditTypeComponent() {
      if (this.$route.params.id) {
        return CreateApplicationPage
      } else {
        return EditSubmittedApplicationPage
      }
    },
  },
}
</script>
