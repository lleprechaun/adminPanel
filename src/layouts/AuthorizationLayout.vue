<template>
  <div class="flex flex-center q-pt-xl">
  <q-card class="my-card" style="width: 30vw;">

    <q-card-section class="q-my-sm">
      <div class="text-h3 text-center" style="font-family: 'Roboto Light'">
        Авторизация
      </div>
    </q-card-section>

    <q-separator />

    <q-card-actions vertical>
    <q-form
      class="q-gutter-xl q-py-lg column items-center"
      @submit.prevent
    >
      <q-input
        v-model="phone"
        type="tel"
        mask = "+7 (###) ###-##-##"
        label="Номер телефона"
        class="input"
      />

      <q-input
        type="password"
        v-model="code"
        label="Код"
        class="input"
      />

        <q-btn
          label="Войти"
          type="submit"
          color="primary"
          @click="login()"
          style="width: 8vw"
        />
    </q-form>
    </q-card-actions>
  </q-card>
    </div>
</template>
<style>
.input{
  width: 25vw
}
</style>
