<template>
  <h3>Continente</h3>
    <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-primary" @click="filtro('Americas')">AM</button>
        <button type="button" class="btn btn-primary" @click="filtro('Europe')">EU</button>
        <button type="button" class="btn btn-primary" @click="filtro('Asia')">AS</button>
    </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
    setup(){
        const store = useStore()

        const filtro = (region) => {
            store.dispatch('FiltrarPaises', region)
        }
        return {filtro}
    }
}
</script>

<style>

</style>