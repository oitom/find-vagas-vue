<template>
  <slot name="titulo" :dadosTitulo="{titulo: 'Título da lista', nmroVagas: 15 }">
    <!-- <p>Vagas de título: {{ this.titulo }}</p> -->
  </slot>
  
  <slot :vagas="vagas">
    <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
      <div class="col">
        <vaga-item v-bind="vaga"/>
      </div>
    </div>
  </slot>

  <slot name="rodape" :dadosRodape="{titulo: 'Rodapé lista', paginacao: {paginas: 10, paginaAtual: 1} }">
    <p class="muted-text">Vagas encontadas: {{ vagas.length }}</p>
  </slot>

</template>

<script>
  import VagaItem from '@/components/comuns/VagaItem.vue'

  export default {
    name: 'ListaVagas',
    data: () => ({
      vagas: []
    }),
    components:{
      VagaItem,
    },
    activated() {
      this.vagas = JSON.parse(localStorage.getItem('vagas'))
    },
    mounted() { 
      this.emitter.on('filtrarVagas', (vaga)=> {
        const vagas = JSON.parse(localStorage.getItem('vagas'));
        const result = vagas.filter(reg => reg.titulo.toLowerCase().includes(vaga.titulo.toLowerCase()));
        this.vagas = result;
      });
    }
  }
</script>