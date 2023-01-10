// mixin 으로 중복되는 코드를 모을 수 있다.
export default {
  created() {
    this.$store.dispatch("ask/LOAD_ASK");
  },
};
