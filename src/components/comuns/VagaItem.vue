<template>
  <div class="card">
    <div class="card-header bg-dark text-white">
      {{ titulo}}
    </div>
    <div class="card-body">
      <p>{{ descricao }}</p>
    </div>
    <div class="footer">
      <small class="text-muted">Salario: R$ {{ salario }} | Modalidade: {{ modalidade }} | Tipo: {{ tipo }} | Data: {{ publicacao }}</small>
    </div>
  </div>  
</template>
<script>
  export default {
    name: "VagaItem",
    props: {
      titulo: { type: String, required: true },
      descricao:{ type: String, required: true },
      salario: { 
        type: [Number, String], 
        required: false, 
        default() { 
          return '*'.repeat(5)
        }
      },
      modalidade: { type: String, required: true },
      tipo: { type: String, required: true },
      publicacao: { type: String, required: true },
    }
  } 
</script>
<style scoped>

</style>