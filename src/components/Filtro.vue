<template>
  <div>
      <input class="form-control container" @keypress="filtro(nada)" v-model="nada" type="text">
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
    setup() {
        const nada = ref('');
        const store = useStore()
        const filtro = (region) => {
            
            store.dispatch('FiltrarPaise', region)
        }
        console.log(nada)
        return {filtro, nada}
    }
}
</script>

<style>

</style>