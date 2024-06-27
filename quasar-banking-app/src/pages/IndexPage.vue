<template>
  <q-page class="items-center justify-evenly">
    <q-card flat>
      <q-card-section>
        <p class="q-mb-none text-h6 text-grey-7">Good morning,</p>
        <p class="q-mt-none text-h5">Caesar Ian Belza</p>
      </q-card-section>
    </q-card>

    <q-card flat>
      <q-card-section>
        <q-card>
          <q-card-section>
            <q-list>
              <q-expansion-item
                expand-separator
                icon="perm_identity"
                label="Deposits"
              >
                <q-card>
                  <q-card-section>
                    <q-item>
                      <q-item-section>
                        <q-item-label>SAVINGS ACCOUNT</q-item-label>
                        <q-item-label caption lines="2"
                          >200013350344</q-item-label
                        >
                      </q-item-section>

                      <q-item-section side top>
                        <q-item-label caption>PHP 2,000.00</q-item-label>
                        <p>Available balance</p>
                      </q-item-section>
                    </q-item>
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
          </q-card-section>
        </q-card>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts"></script>
