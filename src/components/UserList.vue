<!-- src/components/UserList.vue -->
<template>
    <div class="user-list">
      <h2>Lista de Usuarios</h2>
      <ul>
        <li v-for="user in users" :key="user.id">
          <span>{{ user.name }} - {{ user.email }}</span>
          <button @click="deleteUser(user.id)">Borrar Usuario</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      users() {
        return this.$store.getters.allUsers;
      }
    },
    methods: {
      deleteUser(userId) {
        this.$store.dispatch('deleteUser', userId);
      }
    },
    created() {
      this.$store.dispatch('fetchUsers');
    }
  };
  </script>
  
  <style scoped>
  .user-list {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 20px auto;
    text-align: center;
  }
  
  .user-list h2 {
    margin-bottom: 15px;
  }
  
  .user-list ul {
    list-style-type: none;
    padding: 0;
  }
  
  .user-list li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  
  .user-list li:last-child {
    border-bottom: none;
  }
  
  .user-list button {
    padding: 5px 10px;
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .user-list button:hover {
    background-color: #c82333;
  }
  </style>
  