<template>
  <q-page class="items-center justify-evenly">
    <q-card flat>
      <q-card-section>
        <h5 class="text-h5 q-mb-none red-5">ONLINE BANKING APP</h5>
        <h3 class="text-h3 q-mt-sm">Login</h3>

        <q-form @submit="onSubmit" class="q-gutter-md">
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

          <div class="q-gutter-sm">
            <q-btn class="col" label="Log in" color="red-7" type="submit" />
            <q-btn
              @click.prevent="registerRoute"
              class="col"
              label="Register"
              flat
              color="red-7"
              type="button"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from 'stores/auth-store';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';

import { HOME_PATH, OTP_PATH } from 'src/router/routes';

const authStore = useAuthStore();
const router = useRouter();
const $q = useQuasar();

const username = ref('');
const password = ref('');
const rememberMe = ref(true);

const onSubmit = async () => {
  await authStore.authenticate({
    username: username.value,
    password: password.value,
  });

  $q.loading.show();

  setTimeout(() => {
    $q.loading.hide();
    router.push({ path: OTP_PATH });
  }, 3000);
};

const registerRoute = () => router.push({ path: HOME_PATH });

defineOptions({
  name: 'LoginPage',
});
</script>
