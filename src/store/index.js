import { createStore } from 'vuex'

export default createStore({
  state: {
    paises: [],
    paisesFiltrados:[]
  },
  mutations: {
    setPaises(state, Payload){
      state.paises = Payload
    },
    setPaisesFiltrados(state, payload){
      state.paisesFiltrados = payload
    }
  },
  actions: {
    async getPaises({commit}){
      try {
        const red = await fetch(`https://restcountries.com/v2/all`)
        const data = await red.json()
        //setPaises(state, data)
        commit('setPaises', data)
      } catch (error) {
        console.log(error)
      }
    },
    FiltrarPaises( {commit, state}, region){
      const filtro = state.paises.filter(paises => {
        return paises.region.includes(region)
      })
      //console.log(filtro)
      commit('setPaisesFiltrados', filtro)
    },
    FiltrarPaise( {commit, state}, region){
      //console.log(region)
      const filtro = state.paises.filter(paises => {
        return paises.name.includes(region)
      })
      //console.log(filtro)
      commit('setPaisesFiltrados', filtro)
    }
  },
  modules: {
  },
  getters:{
    topPaisesPoblacion(state){
      return state.paisesFiltrados.sort((a,b) => {
        return a.population < b.population ? 1 : -1
      })
    }
  }
})
