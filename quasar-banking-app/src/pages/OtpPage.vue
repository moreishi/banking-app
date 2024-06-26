<template>
  <q-page class="items-center justify-evenly">
    <q-card flat>
      <q-card-section>
        <h1 class="text-h4">Your OTP is on its way</h1>
        <p>We've sent an OTP to your registered mobile number.</p>
        <q-input filled v-model="text" readonly />
      </q-card-section>
      <q-card-section>
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md red-7">
          <p>Once received, input your 6-digit OTP below.</p>
          <q-input
            filled
            v-model="otp"
            counter
            maxlength="6"
            label="OTP"
            hint="Enter 6 digit code"
          />

          <div>
            <q-btn
              rounded
              label="Submit"
              type="submit"
              color="red-7"
              :disable="otp.length < 6"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';
// import { useRouter } from 'vue-router';

// const router = useRouter();
const $q = useQuasar();
const otp = ref('');

const onSubmit = () => {
  if (otp.value.length < 6) {
    return $q.notify({
      message: 'Enter valid OTP',
      icon: 'announcement',
      color: 'red-7',
    });
  }

  $q.loading.show();
  setTimeout(() => {
    $q.loading.hide();
    // router.push({ name: 'otp-login' });
  }, 3000);
};
</script>

<style scoped></style>
