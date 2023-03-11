<template>
  <div
    v-for="(원룸, i) in 원룸들"
    :key="i"
    @click="
      모달창열렸니 = true;
      원룸번호 = i;
    "
  >
    <img :src="원룸.image" class="room-img" />
    <h4>{{ 원룸.title }}</h4>
    <p>{{ 원룸.price }}</p>
  </div>
</template>

<script>
export default {
  name: "OneRoomList",
  props: {
    원룸들: Array,
    모달창열렸니: Boolean,
    원룸번호: Number,
  },
};
</script>

<style></style>
