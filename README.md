# useFirebaseAuth

https://github.com/HikaruEgashira/useFirebaseAuth

Firebase のサインイン状態を取得します。

## usage

```vue
<template>
  <div>
    <div v-if="state === 'loading'">loading</div>
    <div v-else-if="state === 'sign-in'">{{ user.displayName }}</div>
    <div v-else-if="state === 'sign-out'">user not found</div>

    <button v-if="state === 'sign-out'" @click="signin()">
      sign in
    </button>
    <button v-else-if="state === 'sign-in'" @click="logout()">
      logout
    </button>
  </div>
</template>

<script lang="ts">
import { useFirebaseAuth } from '@hikae/useFirebaseAuth';
import firebase from 'firebaese';

const auth = firebase.auth();

type Props = {};

export default defineComponent({
  setup(props: Props, context: SetupContext) {
    // data
    const { user, loading, existUser } = useFirebaseAuth(auth);

    return { user, loading, existUser };
  },
});
</script>
```

## install

```bash
yarn add @hikae/useFirebaseAuth
```
