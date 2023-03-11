<template>
  <div class="black-bg" v-if="모달창열렸니 == true">
    <div class="white-bg">
      <img :src="원룸들[원룸번호].image" class="room-img" />
      <h4>{{ 원룸들[원룸번호].title }}</h4>
      <p>{{ 원룸들[원룸번호].content }}</p>
      <p>{{ 원룸들[원룸번호].price }}</p>
      <MyDiscount />
      <button @click="모달창열렸니 = false">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "OneRoomDetail",
  props: {
    원룸들: Array,
    모달창열렸니: Boolean,
    원룸번호: Number,
  },
};
</script>

<style>
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>
