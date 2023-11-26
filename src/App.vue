<template>
  <div>
    <topo-padrao @navegar="componente = $event"></topo-padrao>
    <conteudo :conteudo="componente"></conteudo>
  </div>
</template>

<script>
import Conteudo from '@/components/layout/ConteudoItem.vue'
import TopoPadrao from '@/components/layout/TopoItem.vue'

export default {
  name: 'App',
  components: {
    Conteudo,
    TopoPadrao
  },
  data: () => ({
    componente: 'Home'
  })
}
</script>

<style>
</style>
