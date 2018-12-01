<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Форма регистрации</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form v-model="valid" ref="form" lazy-validation>
              <v-text-field prepend-icon="person" name="email" label="E-mail" type="email" v-model="email" :rules="emailRules"></v-text-field>
              <v-text-field id="password" prepend-icon="lock" name="password" label="Пароль" type="password" v-model="password" :counter="6" :rules="passwordRules"></v-text-field>
              <v-text-field id="confirm" prepend-icon="lock" name="confirm" label="Подтвердите пароль" type="password" v-model="confirm" :counter="6" :rules="confirmRules"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="onSubmit" :disabled="!valid">Зарегестрироваться</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: '',
        confirm: '',
        valid: false,
        emailRules: [
          v => !!v || 'E-mail обязательное поле',
          v => /.+@.+/.test(v) || 'Не верный формат E-mail'
        ],
        passwordRules: [
          v => !!v || 'Пароль обязательное поле',
          v => (v && v.length >= 6) || 'Длина пароля должна быть больше или равна 6 символам'
        ],
        confirmRules: [
          v => !!v || 'Подтвердите пароль обязательное поле',
          v => (v === this.password) || 'Пароль не совпадает'
        ]
      }
    },
    methods: {
      onSubmit () {
        if (this.$refs.form.validate()) {
          const user = {
            email: this.email,
            password: this.password
          }
          console.log(user)
        }
      }
    }
  }
</script>

<style scoped>

</style>
