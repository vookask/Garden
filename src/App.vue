<script setup>
import HomeHeader from "./components/HomeHeader.vue";
import HomeMain from "./components/HomeMain.vue";
import HomeFooter from "./components/HomeFotter.vue";
</script>

<template>
  <div class="wrapper">
    <HomeHeader />
    <HomeMain />
    <HomeFooter />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

:root {
  --font-family: "Open Sans", sans-serif;
  --second-family: "Roboto", sans-serif;
}

body {
  box-sizing: border-box;
  height: 100vh;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 30px;
  color: #4e3000;
}

.flex {
  display: flex;
}

.wrapper {
  display: flex;
  max-width: 2048px;
  min-width: 1200px;
  margin: 0 auto;
  gap: 24px;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex: 1 0 auto;
}

.container {
  padding: 0 50px;
}

.btn {
  padding: 13px 75px;
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 24px;
  color: #fff;
  border-radius: 10px;
  background-color: #4caf50;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}

.btn:hover {
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.16);
}

.header {
  padding-top: 24px;
  justify-content: space-between;
}

.header__input {
  width: 394px;
  height: 52px;
  margin-left: 32px;
  padding: 20px;
  font-size: 16px;
  color: #737373;
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.16);
}

.header__btn {
  margin-left: 40px;
}

.header__desc {
  font-family: var(--font-family);
  font-weight: 700;
  text-align: right;
}

.header__guest {
  font-size: 30px;
}

.header__desc-green {
  color: #80bb00;
}

.header__desc-red {
  color: #ec5937;
}

table {
  position: relative;
  width: 100%;
}

thead th {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding-bottom: 8px;
  font-weight: 600;
  font-size: 20px;
  text-align: left;
  z-index: 1;
  border-bottom: 4px solid #e9e9e9;
  background-color: #fff;
}

thead th:last-child {
  text-align: center;
}

tbody td {
  padding-top: 40px;
  color: #000;
}

tbody td:last-child {
  text-align: center;
}

footer {
  flex: 0 0 auto;
  margin-bottom: 24px;
}

.footer__desc {
  padding-right: 20px;
  font-weight: 700;
}
.footer__btn {
  margin-left: 10px;
  padding: 10px 20px;
  font-weight: 400;
  font-size: 25px;
  color: #000;
  background-color: inherit;
}
.active {
  border-radius: 20px;
  background: #c4c4c4;
  color: #fff;
}
</style>
