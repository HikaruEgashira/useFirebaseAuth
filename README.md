# useFirebaseAuth

## useage

```vue
<template>
  <div>
    <button v-if="!existUser" @click="login()">login</button>
    <button v-else @click="logout()">logout</button>

    <div v-if="existUser">{{ user.displayName }}</div>
  </div>
</template>

<script lang="ts">
import { useFirebaseAuth } from "@hikae/useFirebaseAuth"
import type firebase from "firebase";

type Props = {};

export default defineComponent({
    setup(props: Props, context: SetupContext) {
        // data
        const { user, loading, existUser }: firebase.User | null = useFirebaseAuth();

        return { user, loading, existUser };
    },
});
</script>
```

## install

```bash
yarn add @hikae/useFirebaseAuth
```
