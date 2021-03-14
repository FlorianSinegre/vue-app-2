<template>
  <div class="pollution">

    <pollutionVue></pollutionVue>
  </div>
</template>

<script>
// @ is an alias to /src
import pollutionVue from '@/components/pollution.vue'

export default {
  name: 'pollution',
 components:{
   pollutionVue
 }
}
</script>
