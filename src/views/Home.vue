<template>
  <div class="home">
    <Navbar />
    <!-- Jumbotron -->
    <div class="border border-dark p-2 container">
      <Jumbotron /><br />
      <h2>Bienvenido</h2>
      <hr />
      <span>Bienvenido al sistema de Ordenes e inventario de </span
      ><span><b> Classicmodels.</b></span>
    </div>
    <br />
    <div>
      <b-container class="bv-example-row">
        <b-row>
          <!-- Cumplimiento diario de ordenes -->
          <b-col class="border border-dark p-2 m-1">
            <b-container class="bv-example-row">
              <b-row>
                <!-- barra de progreso -->
                <b-col cols="4">
                  <div>                    
                    <b-progress  v-for="(ultima, index) in arrayDash" :key="index" :max="ultima.kpis.total">
                      <b-progress-bar
                        :value="ultima.kpis.entregadas"
                        :label="`${((ultima.kpis.entregadas / ultima.kpis.tatal) * 100).toFixed(2)}%`"
                      ></b-progress-bar>
                    </b-progress>
                  </div>
                </b-col>
                <b-col cols="8">col-8</b-col>
              </b-row>
            </b-container>
          </b-col>
          <!-- Ordenes atrasadas Jornada -->
          <b-col class="border border-dark p-2 m-1">2 of 3</b-col>
        </b-row>
      </b-container>
      <b-container class="bv-example-row">
        <b-row>
          <!-- ultimas ordenes -->
          <b-col class="p-2 m-1">
            <b-container class="bv-example-row">
              <b-row>
                <!-- n° orden -->
                <b-col>
                  <p>N° Orden</p>
                  <ul>
                    <li v-for="(ultima, index) in arrayDash" :key="index">
                      {{ ultima.ultimas_devoluciones.num_orden}}
                    </li>
                  </ul>
                  
                </b-col>
                <b-col>2 of 3</b-col>
                <b-col>3 of 3</b-col>
                <b-col>3 of 3</b-col>
              </b-row>
            </b-container>
          </b-col>
          <!-- ultimas devoluciones -->
          <b-col class="p-2 m-1"> </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "../components/Navbar.vue";
import Jumbotron from "../components/Jumbotron.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Jumbotron,
  },
  data: () => ({
    arrayDash: [], //arreglo vacío.
  }),
  methods: {
    cargarDatos: async function () {
      let result = await fetch("/api/dash");
      this.arrayDash = await result.json();
      console.log(this.arrayDash)
    },
  },
  // created() {
  //   this.consumirApi();
  // },
};
</script>
