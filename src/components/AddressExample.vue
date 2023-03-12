<template>
  <div>
    <v-btn dark depressed @click="getCurrentPosition()">위치 좌표 확인</v-btn>
    <div>{{ isPositionReady ? "yes" : "no" }}</div>
    <p>
      latitude: {{ positionObj.latitude }} longitude:
      {{ positionObj.longitude }}
    </p>
  </div>
</template>

<script>
export default {
  name: "AddressExample",
  data() {
    return {
      positionObj: {
        latitude: "",
        longitude: "",
      },
      isPositionReady: false,
    };
  },
  methods: {
    getCurrentPosition() {
      if (!navigator.geolocation) {
        this.setAlert("위치 정보를 찾을 수 없습니다.1");
      } else {
        navigator.geolocation.getCurrentPosition(
          this.getPositionValue,
          this.geolocationError
        );
      }
    },
    getPositionValue(val) {
      this.positionObj.latitude = val.coords.latitude;
      this.positionObj.longitude = val.coords.longitude;
      this.isPositionReady = true;
      this.setAlert("주소 확인 완료");
    },
    geolocationError() {
      this.setAlert("위치 정보를 찾을 수 없습니다.2");
    },
    setAlert(text) {
      alert(text);
    },
  },
};
</script>
