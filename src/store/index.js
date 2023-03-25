import { createStore } from 'vuex'
import axios from 'axios'


const Don = 'https://runit-capv.onrender.com'
export default createStore({
  state: {
    Users: null,
    User: JSON.parse(localStorage.getItem("user")) || null,
    Products: null,
    Product: null,
    message: null,
    showSpinner: true,
    token: null,
    loggedUser: null
  },
  getters() {
  },
  mutations: {
    setUsers(state, values) {
      state.Users = values
    },
    setUser(state, user) {
      state.User = user
      localStorage.setItem("user", JSON.stringify(user));
    },
    setProducts(state, products) {
      state.Products = products
    },
    setProduct(state, value) {
      state.Product = value
    },
    setMessage(state, value) {
      state.message = value
    },
    setSpinner(state, value){
      state.showSpinner = value
    },
    setLoggedUser(state, value) {
      state.loggedUser = value;
    },
    setToken(state, value) {
      state.token = value;
    },
  },
  actions: {
    async login(context, payload) {
      try {
        const res = await axios.post(`${Don}/login`, payload);
        const { result, jwToken, msg, err } = await res.data;
        console.log("Results", result)
        if (result) {
          context.commit("setUser", result)
          context.commit("setToken", jwToken)
          localStorage.setItem("jwtToken", jwToken)
          localStorage.setItem("user", JSON.stringify(result))
          context.commit("setMessage", msg)
        } else {
          context.commit("setMessage", err)
        } 
      }catch(error) {
        console.error(error);
      }
    },
    async register(context, payload) {
      const res = await axios.post(`${Don}/register`, payload)
      let {msg, err} = await res.data
      if(msg){
        context.commit('setMessage', msg)
      }else{
        context.commit('setMessage', err)
      }
    },
    async fetchUsers(context) {

      const res = await axios.get(`${Don}/users`)
      let {results, err} = await res.data
      if(results){
        context.commit('setUsers', results)
      }else{
        context.commit('setMessage', err)     
      }
    },
    async fetchUser(context, Users) {
      const res = await axios.get(`${Don}/user/:id`, Users)
      let {results, err} = await res.data
      if(results){
        context.commit('setUser', results)
      }else{
        context.commit('setMessage', err)
      }
    },
    async updateUser(context, id, name) {
      const res = await axios.put(`${Don}/user/${id}`, {name: name})
      let {msg, err} = await res.data
      if(msg){
        context.commit('fetchUsers')
        context.commit('setMessage', msg)
      }else{
        context.commit('setMessage', err)
      }
    },
    async deleteUser(context, id) {
      const res = await axios.delete(`${Don}/user/${id}`)
      let {msg, err} = await res.data
      if(msg){
        context.commit('fetchUsers')
        context.commit('setMessage', msg)
      }else{
        context.commit('setMessage', err)
      }
    },
    async AddUser(context, user) {
      try {
        const res = await axios.post('/users', user)
        context.commit('setUser', res.data)
      } catch (error) {
        context.commit('setMessage', error.message)
      }
    },
    async fetchProducts(context,) {
      const res = await axios.get(`${Don}/products`)
      let {results, err} = await res.data
      if(results){
        context.commit('setProducts', results)
        context.commit('setSpinner', false)
        
      }else{
        context.commit('setMessage', err)
        context.commit('setSpinner', true)
      }
    },
    async fetchProduct(context, id) {
      const res = await axios.get(`${Don}/product/${id}`, )
      let {results, err} = await res.data
      if(results){
        context.commit('setProduct', results[0])
        context.commit('setSpinner', false)
      }else{
        context.commit('setMessage', err)
        context.commit('setSpinner', true)

      }
    },
    async updateProduct(context, id) {
      const res = await axios.put(`${Don}/Product/${id}`)
      let {msg, err} = await res.data
      if(msg){
        context.commit('fetchProducts')
        context.commit('setMessage', msg)
      }else{
        context.commit('setMessage', err)
      }
    },
    async deleteProduct(context, id) {
      const res = await axios.delete(`${Don}/Product/${id}`)
      let {msg, err} = await res.data
      if(msg){
        context.commit('fetchProducts')
        context.commit('setMessage', msg)
      }else{
        context.commit('setMessage', err)
      }
    },

    async fetchCart(context) {
      const res = await axios.get(`${Don}/cart`)
      let {results, err} = await res.data
      if(results){
        context.commit('setCart', results)
      }else{
        context.commit('setMessage', err)
      }
    
    },
    
    async fetchCartById(context, payload) {
      const res = await axios.get(`${Don}/user/:id/cart`, payload)
      let {results, err} = await res.data
      if(results){
        context.commit('setCart', results)
      }else{
        context.commit('setMessage', err)
      } 
    }
  },
})
