<template>
  <v-container v-if="$store.state.pageStatus.showAddBoardPage">
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
  name: 'AddBoard',
  data() {
    return {
      dialog: false,
      title: '',
      title_rule: [
        (v) => !!v || '제목은 필수입력입니다.',
      ],
      content: '',
      author: '',
    };
  },
  methods: {
    async save() {
      const validate = this.$refs.form.validate();
      if (validate) {
        await this.$store.dispatch({
          type: 'addBoard',
          board: {
            title: this.title,
            content: this.content,
            author: this.author,
          },
        });

        this.close();
      }
    },
    close() {
      this.$refs.form.reset();
      this.$store.dispatch({
        type: 'showAddBoardPage',
        isOn: false,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
