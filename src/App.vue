<template>
  <div>
    <vagas-favoritas></vagas-favoritas>
    <topo-padrao @navegar="componente = $event"></topo-padrao>
    
    <alerta-item v-if="exibirAlerta" :tipo="alerta.tipo">
      <template v-slot:titulo>
        <h5>{{ alerta.titulo }}</h5>
      </template>
      <template v-slot:descricao>
        <p>{{ alerta.descricao }}</p>
      </template>  
    </alerta-item>
    
    <conteudo :conteudo="componente"></conteudo>
  </div>
</template>

<script>
import AlertaItem from '@/components/comuns/AlertaItem.vue'
import Conteudo from '@/components/layout/ConteudoItem.vue'
import TopoPadrao from '@/components/layout/TopoItem.vue'
import VagasFavoritas from '@/components/comuns/VagasFavoritas.vue'

export default {
  name: 'App',
  components: {
    AlertaItem,
    Conteudo,
    TopoPadrao,
    VagasFavoritas,
  },
  data: () => ({
    componente: 'Home',
    exibirAlerta: false,
    alerta: { titulo: '', descricao: '', tipo: ''}
  }),
  mounted() {
    this.emitter.on('alerta', (a)=> {
      this.alerta = a
      this.exibirAlerta = true
      setTimeout(()=> this.exibirAlerta = false, 4000);
    });
  },
 
}
</script>

<style>
</style>
