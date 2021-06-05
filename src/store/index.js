import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    ingresar(context, payload) {
      console.log(context,payload)
      return new Promise((resolve)=>{
      //  ...invocar a la API     
      fetch(`/api/login?usuario=${payload.usuario}&clave=${payload.clave}`)
      .then((resultado)=>{
        if(resultado.status == 200) {
          resultado.json().then((datos)=>{
            resolve(datos);
          })
        }else {
          resolve();
        }
      })
      
      })
    }
  },
  modules: {
  }
})
