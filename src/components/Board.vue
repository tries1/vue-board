<template>
    <table>
        <tr>
            <td>이름</td>
            <td>나이</td>
            <td>가입일</td>
        </tr>

        <tr>
            <td>Glenn</td>
            <td>20</td>
            <td>2020.12.01</td>
        </tr>

        <tr>
            <td>Glenn2</td>
            <td>20</td>
            <td>2020.12.01</td>
        </tr>
    </table>
  
</template>

<script>
export default {
  name: 'Board',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  border: 0px;
}
</style>
