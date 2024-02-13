import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    personlist: []
  }),

  getters: {
  
    getPersons: (state) => {
      return (state.personlist)
    },
  },

  actions: {
    pushPerson(_name: string,_family: string,_code: number) {
      this.personlist.push(
        {name: _name, family: _family, code:_code}
        )
  },
}
});