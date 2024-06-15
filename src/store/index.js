// src/store/index.js
import { createStore } from 'vuex';
import { db } from '../FirebaseConfig';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';

export default createStore({
  state: {
    users: []
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    ADD_USER(state, user) {
      state.users.push(user);
    },
    REMOVE_USER(state, userId) {
      state.users = state.users.filter(user => user.id !== userId);
    }
  },
  actions: {
    async fetchUsers({ commit }) {
      const querySnapshot = await getDocs(collection(db, "users"));
      let users = [];
      querySnapshot.forEach((doc) => {
        let user = doc.data();
        user.id = doc.id;
        users.push(user);
      });
      commit('SET_USERS', users);
    },
    async addUser({ commit }, user) {
      const docRef = await addDoc(collection(db, "users"), user);
      user.id = docRef.id;
      commit('ADD_USER', user);
    },
    async deleteUser({ commit }, userId) {
      await deleteDoc(doc(db, "users", userId));
      commit('REMOVE_USER', userId);
    }
  },
  getters: {
    allUsers: (state) => state.users
  }
});
