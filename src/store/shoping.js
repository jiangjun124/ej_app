import {get} from '../http/axios'
export default {
  namespaced:true,
  state:{
    activeName: '专业保洁'
  },
  mutations:{
   categoryname(state,name){
       state.activeName=name
   }
  },
  actions:{
   
  }
}