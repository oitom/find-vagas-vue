<template>
  <div class="container py-4">
      <div class="row">
        <div class="col">
          <pesquisar-vaga></pesquisar-vaga>
        </div>
      </div>
            
      <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
        <div class="col">
          <vaga-item v-bind="vaga"/>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-4">
          <indicador-item titulo="Vagas em aberto" indicador="100" bg="bg-dark" color="text-white"></indicador-item>
        </div>

        <div class="col-4">
          <indicador-item titulo="Profisionais cadastrados" indicador="225" bg="bg-dark" color="text-white"></indicador-item>
        </div>

        <div class="col-4">
          <indicador-item titulo="Visitantes online" :indicador="usuariosOnline" bg="bg-light" color="text-dark"></indicador-item>
        </div>
        
      </div>
  </div>
</template>

<script>
  import PesquisarVaga from '@/components/comuns/PesquisarVaga.vue'
  import IndicadorItem from '@/components/comuns/IndicadorItem.vue'
  import VagaItem from '@/components/comuns/VagaItem.vue'

  export default {
    name: 'HomeView',
    components: {
      PesquisarVaga,
      IndicadorItem,
      VagaItem
    },
    data: ()=> ({
      usuariosOnline: 0,
      vagas: require('@/assets/vagas.json')

    }),
    methods:{
      getUsuariosOnline() {
        this.usuariosOnline = Math.floor(Math.random() * 101)
      }
    },
    created() {
      setInterval(this.getUsuariosOnline, 1000);
    }
  }
</script>

<style scoped>
</style>
