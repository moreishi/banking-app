import { defineStore } from 'pinia';

interface ILogin {
  username: string | undefined;
  password: string | undefined;
}

type TLogin = {
  username: string | undefined;
  password: string | undefined;
};

export const useAuthStore = defineStore('auth', {
  state: () => ({
    counter: 0,
    login: <TLogin>{
      username: undefined,
      password: undefined,
    },
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    authenticate(login: ILogin) {
      console.log(login);
    },
  },
});
