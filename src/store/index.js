// index.js
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

// eslint-disable-next-line import/prefer-default-export
export const store = new Vuex.Store({
  state: {
    pageStatus: {
      showAddBoardPage: false,
      showUpdateBoardPage: false,
      updatePage: {
        boardId: 0,
        board: {},
      },
    },
    boards: [],
  },
  mutations: {
    showAddBoardPage(state, isOn) {
      state.pageStatus.showAddBoardPage = isOn;
    },
    showUpdateBoardPage(state, isOn, boardId) {
      state.pageStatus.showUpdateBoardPage = isOn;
      state.pageStatus.updatePage.boardId = boardId;
    },
    findAllBoard(state, boards) {
      state.boards = boards;
    },
    findByBoardId(state, board) {
      state.pageStatus.updatePage.board = board;
    },
    /* addBoard(state, board) {
      const boards = [...state.boards];
      boards.push(board);
      state.boards = boards;
    }, */
  },
  actions: {
    showAddBoardPage({ commit }, payload) {
      commit(payload.type, payload.isOn);
    },
    showUpdateBoardPage({ commit, dispatch }, payload) {
      commit('showUpdateBoardPage', payload.isOn);
      dispatch('findByBoardId', payload.boardId);
    },
    async findAllBoard({ commit }) {
      const response = await axios.get('/api/v1/boards');
      commit('findAllBoard', response.data);
    },
    async findByBoardId({ commit }, boardId) {
      const response = await axios.get(`/api/v1/boards/${boardId}`);
      commit('findByBoardId', response.data);
    },
    async addBoard({ dispatch }, payload) {
      await axios.post('/api/v1/boards', payload.board);
      dispatch('findAllBoard');
    },
  },
});
