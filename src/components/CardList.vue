<template>
    <div class="row container">
            <div class="col-12 card-center">
                <div class="card my-2" v-for="(pais, index) in paises" :key="index" style="width: 18rem;">
                    <img :src="`${pais.flags.png}`" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ pais.name }}</h5>
                        <p class="card-text">Capital {{pais.capital}}</p>
                        <p class="card-text">Region: {{pais.region}}</p>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import {useStore} from 'vuex'
export default {
    setup(){
        const store = useStore()
        const paises = computed(() => {
            return store.getters.topPaisesPoblacion
        })
        onMounted(async() => {
            await store.dispatch('getPaises')
            await store.dispatch('FiltrarPaises', 'Americas')
        })
        return {paises}
    }
}
</script>

<style>

</style>