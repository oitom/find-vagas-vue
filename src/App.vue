<template>
  <div>
    <topo-padrao></topo-padrao>
    <conteudo></conteudo>
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
  }
}
</script>

<style>
</style>
