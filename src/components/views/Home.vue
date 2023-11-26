<template>
  <div class="container py-4">
      <div class="row">
        <div class="col">
          <pesquisar-vaga></pesquisar-vaga>
        </div>
      </div>

      <lista-vagas>
        <!-- <template v-slot:titulo="slotProps">
          {{ slotProps }}
        </template>

        <template v-slot:default="slotProps">
          {{ slotProps }}
        </template>

        <template v-slot:rodape="slotProps">
          {{ slotProps }}
        </template> -->

      </lista-vagas>

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
  import ListaVagas from '@/components/comuns/ListaVagas.vue'

  export default {
    name: 'HomeView',
    components: {
      PesquisarVaga,
      IndicadorItem,
      ListaVagas,
    },
    data: ()=> ({
      usuariosOnline: 0
    }),
    methods:{
      getUsuariosOnline() {
        this.usuariosOnline = Math.floor(Math.random() * 101)
      }
    },
    created() {
      setInterval(this.getUsuariosOnline, 1000);
    },
   
  }
</script>