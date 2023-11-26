<template>
  <div>
    <vagas-favoritas></vagas-favoritas>
    <topo-padrao @navegar="componente = $event"></topo-padrao>
    <conteudo :conteudo="componente"></conteudo>
  </div>
</template>

<script>
import Conteudo from '@/components/layout/ConteudoItem.vue'
import TopoPadrao from '@/components/layout/TopoItem.vue'
import VagasFavoritas from '@/components/comuns/VagasFavoritas.vue'

export default {
  name: 'App',
  components: {
    Conteudo,
    TopoPadrao,
    VagasFavoritas,
  },
  data: () => ({
    componente: 'Home'
  })
}
</script>

<style>
</style>
