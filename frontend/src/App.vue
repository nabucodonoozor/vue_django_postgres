<template>
  <div id="app">
    <vm-card-content class="app-card-principal">
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
    
    console.log(`user_id: ${this.userId}`)

    // disparamos um comunicação inicial.
    // o backend fará algumas verificações e devolverá uma frase de boas vindas...
    // let mensagem = {
    //       sender: this.userId ,
    //       message: 'inicializa_ai_mirtres'
    //     }
    
    // let opcoes_mensagem = {
    //   initial: true,
    //   mensagem
    // }

    // this.$store.commit("insere_user_id", this.userId)
    // this.$store.dispatch("message_sending", opcoes_mensagem)

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
