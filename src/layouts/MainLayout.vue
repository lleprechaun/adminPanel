<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="q-ma-none">
      <q-toolbar>

        <q-toolbar-title class="col-3 text-center q-ml-xl" style="border-right: solid white 2px ">
          Админ-панель
        </q-toolbar-title>

        <div
          class="col-9 text-center text-h6"
        >{{selectLink}}</div>
      </q-toolbar>
    </q-header>
  <div class="row">
    <div class="col-3 q-ml-xl q-mt-xl q-mr-none">
      <q-page-container
        v-model="leftDrawerOpen"
        show-if-above
        bordered
      >
        <q-list>
          <div class="text-center">
          <EssentialLink
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link"
            @selectedLink="selectedLink"
          />
          </div>
        </q-list>
      </q-page-container>
    </div>
    <div class="col-9">
      <q-page-container>
      </q-page-container>
    </div>
  </div>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Пользователи',
    link: ''
  },
  {
    title: 'Редактирование ставок',
    link: ''
  },
  {
    title: 'Редактирование раздела "Вопросы - ответы"',
    link: ''
  },
  {
    title: 'Редактирование реферальной программы',
    link: ''
  },
  {
    title: 'Баги и ошибки',
    link: ''
  },
  {
    title: 'Создание объявлений',
    link: ''
  },
  {
    title: 'Табеля',
    link: ''
  },
  {
    title: 'Документы',
    link: ''
  }
]

export default defineComponent({
  name: 'MainLayout',
  data () {
    return {
      selectLink: 'Пользователи'
    }
  },
  components: {
    EssentialLink
  },
  methods: {
    selectedLink (title) {
      this.selectLink = title
    }
  },
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
