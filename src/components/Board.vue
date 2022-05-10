<template>
  <div>
    <AddBoard/>
    <UpdateBoard/>
    <!-- eslint-disable max-len -->
    <div class="board"
         v-if="!$store.state.pageStatus.showAddBoardPage && !$store.state.pageStatus.showUpdateBoardPage">

      <v-container class="text-right">
        <v-btn @click="addBoard()">글쓰기</v-btn>
      </v-container>

      <v-container>
        <v-data-table :headers="headers" :items="this.$store.state.boards" :items-per-page="10" @click:row="updateBoard" class="elevation-1">
        </v-data-table>
      </v-container>

    </div>
  </div>
</template>

<script>
import AddBoard from './AddBoard.vue';
import UpdateBoard from './UpdateBoard.vue';

export default {
  name: 'Board',
  components: {
    AddBoard,
    UpdateBoard,
  },
  data() {
    return {
      headers: [
        {
          text: '글번호',
          sortable: false,
          value: 'id',
        },
        {
          text: '제목',
          value: 'title',
        },
        {
          text: '작성자',
          value: 'author',
        },
        {
          text: '작성일',
          value: 'createdAt',
        },
      ],
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$store.dispatch('findAllBoard');
    });
  },
  methods: {
    addBoard() {
      this.$store.dispatch({
        type: 'showAddBoardPage',
        isOn: true,
      });
    },
    updateBoard(row) {
      this.$store.dispatch('showUpdateBoardPage', {
        isOn: true,
        boardId: row.id,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
