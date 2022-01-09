<template >
<div class="container text-center my-4">
  <h1>Paises API</h1>
  <Filtro/>
  <hr>
  <Continente/>
  <hr>
  <CardList/>
</div>
</template>

<script>
import CardList from './components/CardList.vue'
import Continente from './components/Continente.vue'
import Filtro from './components/Filtro.vue'
export default {
  name: 'App',
  components: {
    CardList,
    Continente,
    Filtro
  }
}
</script>
