<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Создать новую заявку</h1>
        <v-form class="mb-3" v-model="valid" ref="form" validation>
          <v-text-field name="title" label="Название" type="text" required v-model="title" :rules="[v => !!v || 'Название обязательно для заполнения']"></v-text-field>
          <v-text-field name="description" label="Описание" type="text" multi-line v-model="description" :rules="[v => !!v || 'Описание обязательно для заполнения']"></v-text-field>
        </v-form>
        <v-layout row class="mb-3">
          <v-flex xs12>
            <v-btn class="warning">
              Upload
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <img src="" height="100">
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-switch color="primary" label="Добавить в промо?" v-model="promo"></v-switch>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn class="success" @click="createAd" :disabled="!valid">Добавить заявку</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        description: '',
        promo: false,
        valid: false
      }
    },
    methods: {
      createAd () {
        if (this.$refs.form.validate()) {
          const ad = {
            title: this.title,
            description: this.description,
            promo: this.promo,
            imageSrc: 'https://img2.labirint.ru/books58/571060/covermid.jpg'
          }
          console.log(ad)

          this.$store.dispatch('createAd', ad)
        }
      }
    }
  }
</script>

<style scoped>

</style>
