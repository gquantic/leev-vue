<template>
  <!--  <Multiselect-->
  <!--      v-model="value"-->
  <!--      :options="options"-->
  <!--  />-->
</template>

<script>
import Multiselect from '@vueform/multiselect'

export default {
  components: {
    Multiselect
  },
  data() {
    return {
      value: null,
      options: ['En', 'Fr']
    }
  }
}
</script>

<style>
/**@import '//cdnjs.cloudflare.com/ajax/libs/vue-multiselect/3.0.0-alpha.1/vue-multiselect.min.css';
 */
</style>
