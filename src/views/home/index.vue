<template>
  <div id="home-container">
    <img src="./home.jpg" alt="" />
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      playStatus: true,
    };
  },
};
</script>

<style lang="less" scoped>
img {
  width: 100%;
  height: 100%;
  background-size: cover;
}
</style>
