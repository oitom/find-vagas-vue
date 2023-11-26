<template>
  <div class="card">
    <div class="card-header bg-dark text-white">
      <div class="row">
        <div class="col d-flex justify-content-between">
          <div>
            {{ titulo }}
          </div>
          <div>
            <div class="form-check form-switch">
              <input type="checkbox" class="form-check-input" v-model="favoritada">
              <label class="form-check-label">Favoritar</label>
            </div>
          </div>
        </div>
      </div>
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
    data: () => ({
      favoritada: false
    }),
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
    methods: {
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
    },
    watch: {
      favoritada(vagaFavorita) {
        if(vagaFavorita) {
          this.emitter.emit('favoritarVaga', this.titulo);
        }
        else {
          this.emitter.emit('desfavoritarVaga', this.titulo);
        }
      }
    }
  }
</script>

<style scoped>
</style>