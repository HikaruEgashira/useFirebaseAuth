# useFirebaseAuth

## usage

```vue
<template>
  <div>
    <button v-if="!existUser" @click="login()">login/signin</button>
    <button v-else @click="logout()">logout</button>

    <div v-if="loading">loading</div>
    <div v-if="existUser && !loading">{{ user.displayName }}</div>
    <div v-else-if="!existUser">user not found</div>
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
