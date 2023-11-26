<template>
  <div>
    <div class="vagas-favoritas">
      <button class="btn btn-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
        <i class="bi bi-star-fill"></i>
      </button>
    </div>

    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Vagas favoritas</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      
      <div class="offcanvas-body">
       <ul class="list-group">
        <li class="list-group-item" v-for="vaga, index in vagas" :key="index"> 
          <span><i class="bi bi-star-fill"></i> {{ vaga }} </span>
        </li>
       </ul>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "VagasFavoritas",
    data: ()=> ({
      vagas: []
    }),
    mounted() {
      this.emitter.on('favoritarVaga', (titulo) => {
        this.vagas.push(titulo);
      });

      this.emitter.on('desfavoritarVaga', (titulo) => {
        let idxVagas = this.vagas.indexOf(titulo);
        if (idxVagas !== -1)
          this.vagas.splice(idxVagas, 1);
      });
    }
  }
</script>

<style scoped>
  .vagas-favoritas {
    position: absolute; 
    z-index: 1; 
    top: 8px;
    right: 15px;
  }
</style>