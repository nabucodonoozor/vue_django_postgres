<template>
  <div id="app">
    <vm-card-content class="app-card-principal">
      <h1>Teste VUE, Django e Postgres</h1>
      <nav id="nav-principal">
        <ul>
          <li><router-link :to="{ name: 'department' }"> Departamentos</router-link></li>
          <li><router-link :to="{ name: 'employee' }">Empregados</router-link></li>
          
        </ul>
      </nav>
      <Home />   
    </vm-card-content>
  </div>
</template>

<script>
import Home from './components/home.vue'

import { exportUserId } from '@/utils/utils'

export default {
  name: 'App',
  components: {
    Home,
  },
  data() {
    
    return {
      userId: exportUserId(),
    };

  },
  mounted() {

  }
}
</script>

<style>
body {
  background-color: #edeff2;
  font-family: "Calibri", "Roboto", sans-serif;
  /* overflow: hidden; */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  padding: 10px;
  background-color: #edeff2;
  display: flex;
  justify-content: center;
  /* height: 100%; */
  min-height: 700px;
  
}

.app-card-principal {
  display: flex;
  flex-direction: column;
  min-width: 100%;
  box-shadow: 0 10px 12px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  /* max-width: 75%; */
}

.card-body {
  display: flex;
  flex-direction: column;
  padding: 0px;
}

.app-corpo {
  flex-grow: 2;
  background-color: #f8f8f8;
  padding-top: 5px;
  overflow-y: auto;
}
</style>
