import { ref } from '@nuxtjs/composition-api'

export const useCount = () => {
  const number = ref<number>(0)

  const increment = () => number.value++
  const decrement = () => number.value--

  return { counter: number, increment, decrement }
}
