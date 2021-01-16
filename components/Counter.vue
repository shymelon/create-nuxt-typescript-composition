<template>
  <div class="d-flex">
    <v-btn @click="decrement">
      <v-icon>mdi-minus</v-icon>
    </v-btn>
    <v-sheet class="mx-3" rounded>
      <span class="text-h5 pa-3">
        {{ counter }}
      </span>
    </v-sheet>
    <v-btn @click="increment">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { useCount } from '~/composition/useCount'

export default defineComponent({
  setup () {
    const { increment, decrement, counter } = useCount()
    return { increment, decrement, counter }
  }
})
</script>

<style scoped>

</style>
