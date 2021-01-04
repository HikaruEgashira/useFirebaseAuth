import { ref, onMounted } from 'vue-demi';
import firebase from 'firebase';

export function useFirebaseAuth(auth: firebase.auth.Auth) {
  const user = ref<firebase.User | null>(null);
  const state = ref<'loading' | 'sign-out' | 'sign-in'>('loading');

  const update = (firebaseUser: firebase.User | null) => {
    user.value = firebaseUser;
    state.value = firebaseUser ? 'sign-in' : 'sign-out';
  };
  const unsubscribe = () => auth.onAuthStateChanged(update);

  onMounted(() => {
    unsubscribe();
  });

  return {
    user,
    state,
  };
}

export default useFirebaseAuth;
