<template>
  <div id="nav">
    <b-navbar type="dark" variant="dark" class="nav__links--display">
      <b-navbar-nav>
        <router-link class="p-3" to="/">Company</router-link>
        <router-link class="p-3" to="/Home">Home</router-link>
        <router-link class="p-3" to="/">Ordenes</router-link>
        <router-link class="p-3" to="/">Inventario</router-link>
      </b-navbar-nav>
      <b-navbar-nav class="mr-auto">
        <router-link class="p-3" to="/">Profile</router-link>
        <router-link class="p-3" to="/">Log Out</router-link>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
    name:'Navbar'
};
</script>

<style scope>


#nav a {
  font-weight: bold;
  color: #8a8a8f;
}

#nav a.router-link-exact-active {
  color: white;
}

.nav__links--display{
    justify-content: space-between;
}
</style>