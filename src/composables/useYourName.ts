export function useYourName() {
  const name = ref<string>('')
  const alreadySetName = ref<boolean>(false)

  const setName = () => {
    if (name.value)
      alreadySetName.value = true
  }

  const goBack = () => {
    name.value = ''
    alreadySetName.value = false
  }

  return { name, alreadySetName, setName, goBack }
}
