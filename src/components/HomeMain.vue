<script setup>
import { computed } from "vue";
import { useStore } from "@/stores/clients";

const store = useStore();
const filter = computed(() => store.filter);
const search = computed(() => store.search);

const filteredClients = computed(() => {
  let filtred = store.clients;

  if (filter.value === "absent") {
    filtred = store.clients.filter((client) => client.presence === false);
  } else if (filter.value === "present") {
    filtred = store.clients.filter((client) => client.presence === true);
  }
  if (search.value) {
    filtred = filtred.filter((client) =>
      client.fullName.toLowerCase().includes(search.value.toLowerCase())
    );
  }
  return filtred;
});
</script>
<template>
  <main class="container">
    <table>
      <thead>
        <tr>
          <th>Номер</th>
          <th>ФИО</th>
          <th>Компания</th>
          <th>Группа</th>
          <th>Присутсвие</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="client in filteredClients" :key="client.id">
          <td>{{ client.id }}</td>
          <td>{{ client.fullName }}</td>
          <td>{{ client.company }}</td>
          <td>{{ client.group }}</td>
          <td>
            <img
              v-bind:src="
                client.presence === true
                  ? require('@/assets/circleGreen.svg')
                  : require('@/assets/circleRed.svg')
              "
              alt="Зелёный или Красный"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>
