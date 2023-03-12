<template>
  <OneRoomDetail
    @closeModal="모달창열렸니 = false"
    :원룸들="원룸들"
    :모달창열렸니="모달창열렸니"
    :원룸번호="원룸번호"
  />

  <div class="menu">
    <a v-for="(a, i) in menu_names" :key="i">{{ a }}</a>
  </div>

  <div>
    <v-text-field placeholder="우편번호" v-model="zonecode" readonly />
    <button id="postcode" @click="openPostcode">검색</button><br />
    <v-text-field placeholder="주소" v-model="roadAddress" readonly /><br />
    <v-text-fieldㅊ placeholder="상세주소" v-model="detailAddress" /><br />
  </div>

  <MyDiscount></MyDiscount>

  <AddressExample></AddressExample>

  <div v-for="(원룸, i) in 원룸들" :key="i">
    <OneRoomList
      @openModal="
        모달창열렸니 = true;
        원룸번호 = i;
      "
      :원룸="원룸"
      :모달창열렸니="모달창열렸니"
      :원룸번호="원룸번호"
    />
  </div>
</template>

<script>
import 원룸데이터 from "./assets/oneroom.js";
import MyDiscount from "./components/MyDiscount.vue";
import OneRoomDetail from "./components/OneRoomDetail.vue";
import OneRoomList from "./components/OneRoomList.vue";
import AddressExample from "./components/AddressExample.vue";

export default {
  name: "App",
  data() {
    return {
      모달창열렸니: false,
      원룸번호: 0,
      menu_names: ["Home", "Shop", "About"],
      원룸들: 원룸데이터,
      신고수: [0, 0, 0],
      zonecode: "",
      roadAddress: "",
      detailAddress: "",
    };
  },
  methods: {
    openPostcode() {
      new window.daum.Postcode({
        oncomplete: (data) => {
          console.log(data);
          this.zonecode = data.zonecode;
          this.roadAddress = data.roadAddress;
        },
      }).open();
    },
  },
  components: {
    MyDiscount: MyDiscount,
    OneRoomDetail,
    OneRoomList,
    AddressExample,
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
