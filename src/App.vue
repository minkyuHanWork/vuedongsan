<template>
  <OneRoomDetail
    :원룸들="원룸들"
    :모달창열렸니="모달창열렸니"
    :원룸번호="원룸번호"
  />

  <div class="menu">
    <a v-for="(a, i) in menu_names" :key="i">{{ a }}</a>
  </div>

  <MyDiscount></MyDiscount>

  <OneRoomList
    :원룸들="원룸들"
    :모달창열렸니="모달창열렸니"
    :원룸번호="원룸번호"
  />
</template>

<script>
import 원룸데이터 from "./assets/oneroom.js";
import MyDiscount from "./components/MyDiscount.vue";
import OneRoomDetail from "./components/OneRoomDetail.vue";
import OneRoomList from "./components/OneRoomList.vue";

export default {
  name: "App",
  data() {
    return {
      모달창열렸니: false,
      원룸번호: 0,
      menu_names: ["Home", "Shop", "About"],
      원룸들: 원룸데이터,
      신고수: [0, 0, 0],
    };
  },
  methods: {},
  components: {
    MyDiscount: MyDiscount,
    OneRoomDetail,
    OneRoomList,
  },
};
</script>

<style>
body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.room-img {
  width: 100%;
  margin-top: 40px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}
</style>
