import { ref } from "vue";
import { useUserStore } from "@/stores/user";
import { AUTH } from "@/utils/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const fireLoad = () => {
  const userStore = useUserStore();
  const loading = ref(true);

  onAuthStateChanged(AUTH, async (user) => {
    if (user) {
      await userStore.autoSigIn(user.uid);
    }
    loading.value = false;
  });
  return { loading };
};
