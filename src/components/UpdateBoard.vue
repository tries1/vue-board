<template>
  <v-container v-if="$store.state.pageStatus.showUpdateBoardPage">
    <v-form ref="form" lazy-validation>
      <v-row>
        <v-text-field v-model="title" label="제목" required></v-text-field>
      </v-row>

      <v-row>
        <v-text-field v-model="content" label="내용" required></v-text-field>
      </v-row>

      <v-row>
        <v-text-field v-model="author" label="작성자" required></v-text-field>
      </v-row>

      <v-row justify="space-around">
        <v-btn @click="save()">등록</v-btn>
        <v-btn @click="close()">닫기</v-btn>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: 'UpdateBoard',
  computed: {
    title: {
      get() {
        return this.$store.state.pageStatus.updatePage.board.title;
      },
    },
    content: {
      get() {
        return this.$store.state.pageStatus.updatePage.board.content;
      },
    },
    author: {
      get() {
        return this.$store.state.pageStatus.updatePage.board.author;
      },
    },
  },
  data() {
    return {
      dialog: false,
      title_rule: [
        (v) => !!v || '제목은 필수입력입니다.',
      ],
    };
  },
  methods: {
    save() {
      this.$store.dispatch({
        type: 'addBoard',
        board: {
          title: this.title,
          content: this.content,
          author: this.author,
        },
      });
      this.close();
    },
    close() {
      this.$refs.form.reset();
      this.$store.dispatch({
        type: 'showUpdateBoardPage',
        isOn: false,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add-board {
  width: 100%;
  height: 100%;
}

</style>
