<template>
  <div class="container">
    <div>
      
    </div>
    <div class="contform--size">
    <div class=" fomr--display p-3 border border-dark border border-dark">
        <form @submit.prevent >
            <p>{{ mensaje }}</p>
            <label> Email:</label><br>
            <input type="text" v-model="usuario"><br>
            <label> Contraseña:</label><br>
            <input type="password" v-model="clave"><br><br>
            <p>Ingrese sus datos</p>
           <div>
            <b-button @click="ingresar" variant="primary" class="button">Ingresar</b-button>
            </div>
        </form>
    </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'Login',
     data(){
    return {
    usuario:"",
    clave:"",
    mensaje:""
  }},
  methods:{
    ingresar() {
      // this.$router.push({name:'Bienvenido'});
      this.$store.dispatch('ingresar',{
        usuario: this.usuario,
        clave: this.clave
      }).then(
        (datos)=>{
          console.log(datos);
          if (datos) {
            if (datos.resultado=="ok") {
             this.$router.push({name:'Home'});
          }else {
            this.mensaje=datos.mensaje;
          }
       
    }
        }).catch(
        ()=>{
          this.mensaje="Ocurrio un error";
        }
      )

    }
  }
};
</script>

<style scoped>
.fomr--display {
  width: 30vw;
  
}
.contform--size {
      text-align: -webkit-center;
}
.button{
    width: 100%;
}


</style>