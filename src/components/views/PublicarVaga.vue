import PesquisarVaga from '@/components/comuns/PesquisarVaga.vue';
<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <h4>Apresente a sua vaga para milharess de profissionais e de graça</h4>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <label class="form-label">Título da vaga</label>
        <input type="text" class="form-control" v-model="titulo">
        <div class="form-text">Por exemplo: Programador JavaScript e VueJS</div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <label class="form-label">Descrição</label>
       <textarea class="form-control" v-model="descricao"></textarea>
        <div class="form-text">Informe os detalhes da vaga</div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <label class="form-label">Salário</label>
        <input type="number" class="form-control" v-model="salario">
        <div class="form-text">Informe o salário</div>
      </div>

      <div class="col">
        <label class="form-label">Modalidade</label>
        <select class="form-select" v-model="modalidade">
          <option value="" disabled>Selecione...</option>
          <option value="1">Home Office</option>
          <option value="2">Presencial</option>
          <option value="3">Hibrido</option>
        </select>
        <div class="form-text">Informe onde as atividades serão ralizadas</div>
      </div>

      <div class="col">
        <label class="form-label">Tipo</label>
        <select class="form-select" v-model="tipo">
          <option value="" disabled>Selecione...</option>
          <option value="1">CLT</option>
          <option value="2">PJ</option>
        </select>
        <div class="form-text">Informe o tipo da contratação</div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <button type="submit" class="btn btn-primary" @click="salvarVaga()">Cadastrar</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PublicarVagaView',
    data: ()=> ({
      titulo: '',
      descricao: '',
      salario: '',
      modalidade: '',
      tipo: '',
      publicacao: '',
    }),
    methods: {
      salvarVaga() {
        let tempoDecorrido = Date.now();
        let dataAtual = new Date(tempoDecorrido);

        let vagas = JSON.parse(localStorage.getItem('vagas'));
        if(!vagas) vagas = [];

        vagas.push({ 
          titulo: this.titulo,
          descricao: this.descricao,
          salario: this.salario,
          modalidade: this.modalidade,
          tipo: this.tipo,
          publicacao: dataAtual.toISOString()
        });

        if(this.validaForm()) {
          localStorage.setItem('vagas', JSON.stringify(vagas));
        
          this.emitter.emit('alerta', {
            titulo: `A vaga ${this.titulo}`,
            descricao: 'Parabéns, a vaga foi cadastrada e poderá ser consultado por milhares de profissionais em nossa plataforma!',
            tipo: 'sucesso'
          });
          
          this.resetaForm();
        }
        else { 
          this.emitter.emit('alerta', {
            titulo: `Ops, não foi possivel realizar o cadastro!`,
            descricao: 'Parece que você não preencheu algum campo :(',
            tipo: 'erro'
          });
        }
      },
      validaForm() {
        let valido = true;
        if (this.titulo == '')  valido = false; 
        if (this.descricao == '')   valido = false; 
        if (this.salario == '')   valido = false; 
        if (this.modalidade == '')   valido = false; 
        if (this.tipo == '')   valido = false;
        
        return valido;
      },
      resetaForm() {
        this.titulo = '';
        this.descricao= '';
        this.salario = '';
        this.modalidade = '';
        this.tipo = '';
        this.publicacao = '';
      }
    },
  }
</script>

<style scoped>
</style>
