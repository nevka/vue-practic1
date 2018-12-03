<template>
  <v-app>
    <v-navigation-drawer app temporary v-model="drawer">
      <v-list>
        <v-list-tile v-for="link of links" :key="link.title" :to="link.url">
          <v-list-tile-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="link.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app dark color="primary">
      <v-toolbar-side-icon @click="drawer =! drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" class="pointer">Добавить приложение</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-for="link of links" :key="link.title" :to="link.url">
          <v-icon left>{{link.icon}}</v-icon>
          {{link.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <template v-if="error">
      <v-snackbar color="error" :timeout="5000" :multi-line="true" @input="closeError" :value="true">
        {{error}}
        <v-btn dark flat @click.native="closeError">Закрыть</v-btn>
      </v-snackbar>
    </template>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      links: [
        {
          title: 'Вход',
          icon: 'lock',
          url: '/login'
        },
        {
          title: 'Регистрация',
          icon: 'face',
          url: '/registration'
        },
        {
          title: 'Заказы',
          icon: 'bookmark_border',
          url: '/orders'
        },
        {
          title: 'Добавить',
          icon: 'note_add',
          url: '/new'
        },
        {
          title: 'Мои заявки',
          icon: 'list',
          url: '/list'
        }
      ]
    }
  },
  computed: {
    error () {
      return this.$store.getters.error
    }
  },
  methods: {
    closeError () {
      this.$store.dispatch('clearError')
    }
  }
}
</script>

<style scoped>
  .pointer{
    cursor: pointer;
  }
</style>
