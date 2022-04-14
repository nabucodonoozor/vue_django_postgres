import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    
    array_itens: [],
    user_id: null
    
  },
  mutations: {
    insere_item(state, obj) {
      
      state.array_itens.push(obj)
    },
    insere_user_id(state, obj) {
      
      state.user_id = obj
      
    }
  },
  actions: {

    message_sending({ commit, }, opcoes_mensagem) {
        

      if(opcoes_mensagem.initial==false) {
        
        commit('insere_item', { sentence: opcoes_mensagem.mensagem.message, tipoElem:"user", tipoHtml: true })
      }

      axios.post("http://localhost:5005/webhooks/rest/webhook/", JSON.stringify(opcoes_mensagem.mensagem))
      .then(resp => {

          for (let index = 0; index < resp.data.length; index++) {
            
              if(resp.data[index].custom != undefined && resp.data[index].custom!= null) {

                if(resp.data[index].custom.channel.exporta_html == true) {
    
                  commit('insere_item', { sentence: "Aguarde um momento, por favor!", 
                        tipoElem:"robo", tipoHtml: true })

                  let html = document.getElementById('pagina-html-completa-chatbot')
                  let html_transformado = html.outerHTML
                  let obj = {
                    html: html_transformado                
                  }

                  let mensagem = {
                    sender: opcoes_mensagem.mensagem.sender,
                    message: JSON.stringify(obj)
                  }

                  axios.post("http://localhost:5005/webhooks/rest/webhook/", JSON.stringify(mensagem))
                    .then(respObj => {

                      for (let i = 0; i < respObj.data.length; i++) {
                        if(respObj.data[i].text) {

                          if(respObj.data[i].buttons != undefined && respObj.data[i].buttons != null) {
                            
          
                              commit('insere_item', { 
                                sentence: respObj.data[i].text, 
                                tipoElem:"robo", 
                                tipoHtml: true,
                                arrayButtons: respObj.data[i].buttons.map(e => e={
                                    ...e,
                                    escolha:false
                                  })
                              })
                          } else {
                              commit('insere_item', { 
                                sentence: respObj.data[i].text, 
                                tipoElem:"robo", 
                                tipoHtml: true,
                                arrayButtons: []
                              })
                          }
                          
                        }
                      }

                    })
    
                }
                //commit('insere_item', { sentence: resp.data[index].custom.channel.text, tipoElem:"robo", tipoHtml: true })
    
              } else if(resp.data[index].text) {

                if(resp.data[index].buttons != undefined && resp.data[index].buttons != null) {

                    commit('insere_item', { 
                      sentence: resp.data[index].text, 
                      tipoElem:"robo", 
                      tipoHtml: true,
                      arrayButtons: resp.data[index].buttons.map(e => e={
                          ...e,
                          escolha:false
                        })
                    })
                } else {
                    commit('insere_item', { 
                      sentence: resp.data[index].text, 
                      tipoElem:"robo", 
                      tipoHtml: true,
                      arrayButtons: []
                    })
                }
                
              }
            
          }
          
        })
      }
  },
  modules: {    
  }
})
