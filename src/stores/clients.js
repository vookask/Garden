import { defineStore } from "pinia";

// Создаем хранилище
export const useStore = defineStore("store", {
  state: () => ({
    clients: [
      {
        id: 1,
        fullName: "Иванов Иван Петрович ",
        company: "АО Рога и копыта",
        group: "партнёр",
        presence: true,
      },
      {
        id: 2,
        fullName: "Петров Сидор Иванович",
        company: "ООО Солнышко",
        group: "клиент",
        presence: false,
      },
      {
        id: 3,
        fullName: "Сидоров Петр Сидорович",
        company: "ИП Лукоморье",
        group: "прохожий",
        presence: true,
      },
    ],
    filter: "all",
    search: "",
  }),
  getters: {
    presenceOneCount() {
      return this.clients.filter((client) => client.presence === true).length;
    },
    presenceZeroCount() {
      return this.clients.filter((client) => client.presence === false).length;
    },
  },
});
