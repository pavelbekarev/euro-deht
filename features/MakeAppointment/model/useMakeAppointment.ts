import { useFormState } from "~/shared/lib/useFormState";
import type { FeedbackData } from "../types";
import { reactive } from "vue";

export function useMakeAppointment() {
  const { error, loading, reset, submit, success } = useFormState();
  const formData = reactive<FeedbackData>({
    agreePolicy: false,
    name: "",
    phone: "",
  });

  const handleSubmit = async () => {
    await submit(async () => {
      console.debug("Отправка формы", formData);
    });
  };

  return {
    formData,
    error,
    loading,
    handleSubmit,
    reset,
    success,
  };
}
