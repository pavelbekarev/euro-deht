export function useFormState() {
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);
  const success = ref<string | null>(null);

  const submit = async (fn: () => Promise<void>) => {
    loading.value = true;
    error.value = null;
    success.value = null;

    try {
      await fn();
      success.value = "Форма успешно отправлена";
    } catch (err) {
      error.value =
        err instanceof Error
          ? err.message
          : "Произошла ошибка при отправке формы";
    } finally {
      loading.value = false;
    }
  };

  const reset = () => {
    loading.value = false;
    error.value = null;
    success.value = null;
  };

  return {
    loading,
    error,
    success,
    submit,
    reset,
  };
}
