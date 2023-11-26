<template>
  <div class="card">
    <div class="card-header bg-dark text-white">
      {{ titulo}}
    </div>
    <div class="card-body">
      <p>{{ descricao }}</p>
    </div>
    <div class="footer">
      <small class="text-muted">Salario: R$ {{ salario }} | Modalidade: {{ getModalidade }} | Tipo: {{ getTipo }} | Data: {{ getPublicacao }}</small>
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
    },
    computed: {
      getModalidade() {
        switch(this.modalidade) {
          case '1': return 'Home Office';
          case '2': return 'Presencial';
          case '3': return 'Hibrido';
        }
        return '';

      },
      getTipo() {
        switch(this.tipo) {
          case '1': return 'CLT';
          case '2': return 'PJ';
        }
        return '';
      },
      getPublicacao() {
        let dataPublicacao = this.publicacao;
        return  new Date(dataPublicacao).toLocaleDateString('pt-BR');
      }
    }
  } 
</script>
<style scoped>

</style>