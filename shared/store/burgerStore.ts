export const useBurgerStore = defineStore("burgerStore", () => {
  const burgerActive = ref<boolean>(false);

  const toggleBurger = () => {
    burgerActive.value = !burgerActive.value;
  };

  return {
    burgerActive,
    toggleBurger,
  };
});
