<template>
  <q-page class="row items-center justify-evenly">
    <q-card flat style="min-width: 720px">
      <q-card-section>
        <h5 class="text-h5 q-mb-none red-5">ONLINE BANKING APP</h5>
        <h3 class="text-h3 q-mt-sm">Login</h3>

        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <q-input
            filled
            v-model="username"
            label="Username *"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />

          <q-input
            filled
            type="password"
            v-model="password"
            label="Password"
            lazy-rules
            :rules="[
              (val) =>
                (val !== null && val !== '') || 'Please type your password',
            ]"
          />

          <q-toggle v-model="rememberMe" color="red-7" label="Remember me" />

          <div>
            <q-btn class="col" label="Log in" color="red-7" type="submit" />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const username = ref('');
const password = ref('');
const rememberMe = ref(true);

defineOptions({
  name: 'LoginPage',
});
</script>
