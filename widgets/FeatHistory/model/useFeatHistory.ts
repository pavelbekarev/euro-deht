import { featHistories } from "../config/featHistories";

export function useFeatHistory() {
  const isVisible = ref<number | null>(null);
  const histories = ref(featHistories);

  const showDetails = (id: number) =>
    isVisible.value === id ? (isVisible.value = null) : (isVisible.value = id);

  return {
    isVisible,
    histories,
    showDetails,
  };
}
