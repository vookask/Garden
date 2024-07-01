<script setup>
import ModalAdd from "@/pages/ModalAdd.vue";
import { useStore } from "@/stores/clients";
import { ref } from "vue";

const store = useStore();

const updateSearch = ref("");
const searchHandler = () => {
  store.search = updateSearch.value;
};

const isModalOpen = ref(false);
const openModal = () => {
  isModalOpen.value = true;
};
const closeModal = (val) => {
  isModalOpen.value = val;
};
</script>
<template>
  <header class="container header flex">
    <div class="">
      <img alt="Агроном  Сад" src="@/assets/logo.svg" />
      <input
        v-model="updateSearch"
        @input="searchHandler"
        class="header__input"
        type="search"
        name=""
        id=""
        placeholder="Поиск по имени"
      />
      <button class="header__btn btn" @click="openModal">Добавить</button>
    </div>
    <div class="header__desc">
      <h2 class="header__guest">Посетители</h2>
      <span class="header__desc-green">{{ store.presenceOneCount }}</span
      ><span> / </span
      ><span class="header__desc-red">{{ store.presenceZeroCount }}</span>
    </div>
  </header>
  <ModalAdd v-if="isModalOpen" @change-type="closeModal($event)" />
</template>
