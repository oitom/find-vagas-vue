<template>
  <div :class="estiloAlerta" role="alert">
    <slot name="titulo"></slot>
    <hr>
    <slot name="descricao"></slot>
  </div>
</template>

<script>
  export default {
    name: 'AlertaItem',
    props: {
      tipo: String
    },
    computed: {
      estiloAlerta() {
        switch(this.tipo) {
          case 'sucesso': return 'alert alert-success';
          case 'erro': return 'alert alert-danger';
          default: return 'alert alert-warning'
        }
      }
    }
  }
</script>

<style scoped>

</style>