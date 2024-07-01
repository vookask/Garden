<script setup>
import { useStore } from "@/stores/clients";
import { ref } from "vue";

const fullName = ref(""),
  company = ref(""),
  group = ref(""),
  presence = ref(false);

const store = useStore();
const addClient = () => {
  const newClient = {
    id: store.clients.length + 1,
    fullName: fullName.value,
    company: company.value,
    group: group.value,
    presence: presence.value,
  };
  store.clients.push(newClient);
  fullName.value = "";
  company.value = "";
  group.value = "";
  presence.value = false;
};
</script>

<template>
  <div class="modal" id="modal">
    <form class="" action="">
      <div class="grid modal__desc">
        <label for="FIO">ФИО</label>
        <input v-model="fullName" type="text" name="FIO" id="FIO" required />
        <label for="company">Компания</label>
        <input
          v-model="company"
          type="text"
          name="company"
          id="company"
          required
        />
        <label for="group">Группа</label>
        <select v-model="group" name="group" id="group" required>
          <option disabled>Выбрать</option>
          <option value="Прохожий">Прохожий</option>
          <option value="Клиент">Клиент</option>
          <option value="партнёр">Партнер</option>
        </select>
        <label for="presence">Присутсвие</label>
        <input
          v-model="presence"
          value="true"
          type="checkbox"
          name="presence"
          id="presence"
        />
      </div>
    </form>
    <div class="flex modal__btn">
      <button class="btn" @click="addClient">Добавить</button>
      <button class="btn modal__btn-close" @click="$emit('change-type', false)">
        Закрыть
      </button>
    </div>
    <img
      @click="$emit('change-type', false)"
      class="modal__img-close"
      src="@/assets/close.svg"
      alt="Закрыть"
    />
  </div>
  <div class="overlay" id="overlay-modal"></div>
</template>
<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 60px;
}

.modal {
  /*  Установаем ширину окна  */
  width: 100%;
  max-width: 1460px;

  /*  Центрируем и задаем z-index */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 30; /* Должен быть выше чем у подложки*/

  flex-direction: column;
  display: flex;
  align-items: center;

  /*  Побочные стили   */
  box-shadow: 0 3px 10px -0.5px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 30px;
  background-color: #fff;
  transition: 0.3s all;
}

input:last-child {
  width: 34px;
}

input,
select {
  font-weight: 400;
  font-size: 32px;
  color: #4e3000;
  border: none;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.16);
}
.modal__desc {
  margin-bottom: 50px;
  padding-top: 50px;
  flex-direction: column;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 32px;
  color: #4e3000;
}

.modal__btn {
  gap: 30px;
  margin-bottom: 54px;
}

.modal__btn-close {
  background-color: #737373;
}

.modal__img-close {
  position: absolute;
  right: 20px;
  top: 20px;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
  transition: 0.3s all;
}
</style>
