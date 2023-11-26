<template>
  <div>
    <HomeView></HomeView>
    <PublicarVagaView></PublicarVagaView>
  </div>
</template>

<script>
  import HomeView from '@/components/views/Home.vue'
  import PublicarVagaView from '@/components/views/PublicarVaga.vue'

  export default {
    name: 'ConteudoItem',
    components:{
      HomeView,
      PublicarVagaView
    },
    data: () => ({
    }),
    methods:{},
    computed:{},
  }
</script>

<style scoped>
</style>
