<script setup>
import { useStore } from "@/stores/clients";

const store = useStore();
const updateFilter = (newFilter) => {
  store.filter = newFilter;
};
</script>
<template>
  <footer class="container flex">
    <p class="footer__desc">Фильтровать по:</p>
    <button
      :class="{ active: store.filter === 'absent' }"
      class="footer__btn btn"
      @click="updateFilter('absent')"
    >
      Отсутствующим
    </button>
    <button
      :class="{ active: store.filter === 'present' }"
      class="footer__btn btn"
      @click="updateFilter('present')"
    >
      Присутствующим
    </button>
    <button
      :class="{ active: store.filter === 'all' }"
      class="footer__btn btn"
      @click="updateFilter('all')"
    >
      Без фильтра
    </button>
  </footer>
</template>
