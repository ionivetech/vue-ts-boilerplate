export const useCounterStore = defineStore('counter', () => {
  const count = ref<number>(0)

  const increment = () => count.value++
  const decrement = () => count.value--

  return { count, increment, decrement }
})
