<!-- src/App.vue -->
<template>
  <div id="app">
    <AddUser />
    <UserList />
  </div>
</template>

<script>
import AddUser from './components/AddUser.vue';
import UserList from './components/UserList.vue';

export default {
  components: {
    AddUser,
    UserList
  }
};
</script>
