import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    personlist: []
  }),

  getters: {
    getPersons: (state) => {
      return state.personlist;
    },
  },

  actions: {
    pushPerson(_name: string, _family: string, _code: number) {
      this.personlist.push({ name: _name, family: _family, code: _code });
    },
    deleteRowByCode(code: number) {
      const index = this.personlist.findIndex((item) => item.code === code);
      if (index !== -1) {
        this.personlist.splice(index, 1);
        console.log("Person deleted");
      } else {
        console.log("Person with code", code, "not found");
      }
    },
    deleteRowByIndex(index: number) {
      console.log("---index :", index);
      this.personlist.splice(index, 1);
      console.log("index :", this.personlist);
    }
  }
});
