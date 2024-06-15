<!-- src/components/AddUser.vue -->
<template>
    <div class="add-user">
      <h2>Agrega Un Usuario</h2>
      <form @submit.prevent="addUser">
        <input v-model="name" placeholder="Name" required />
        <input v-model="email" type="email" placeholder="Email" required />
        <button type="submit">Agregar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: ''
      };
    },
    methods: {
      addUser() {
        const user = {
          name: this.name,
          email: this.email
        };
        this.$store.dispatch('addUser', user);
        this.name = '';
        this.email = '';
      }
    }
  };
  </script>
  
  <style scoped>
  .add-user {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    margin: 20px auto;
    text-align: center;
  }
  
  .add-user h2 {
    margin-bottom: 15px;
  }
  
  .add-user form {
    display: flex;
    flex-direction: column;
  }
  
  .add-user input {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .add-user button {
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
  }
  
  .add-user button:hover {
    background-color: #0056b3;
  }
  </style>
  