import { ref, onMounted } from 'vue-demi';
import firebase from 'firebase';

export function useFirebaseAuth(auth: firebase.auth.Auth) {
  const user = ref<firebase.User | null>(null);
  const existUser = ref<boolean>(true);
  const loading = ref<boolean>(true);

  const update = (firebaseUser: firebase.User | null) => {
    user.value = firebaseUser;
    existUser.value = Boolean(firebaseUser);
    loading.value = false;
  };
  const unsubscribe = () => auth.onAuthStateChanged(update);

  onMounted(() => {
    unsubscribe();
  });

  return {
    user,
    existUser,
    loading,
  };
}

export default useFirebaseAuth;
