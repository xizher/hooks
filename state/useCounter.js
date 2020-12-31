import { ref } from 'vue'

export function useCounter (initialValue = 0) {
  const count = ref(initialValue)

  function inc (delta = 1) {
    count.value += delta
    return count.value
  }

  function dec (delta = 1) {
    count.value -= delta
    return count.value
  }

  function get () {
    return count.value
  }

  function set (value) {
    count.value = value
    return count.value
  }

  function reset (val = initialValue) {
    initialValue = val
    return set(val)
  }

  return {
    count, inc, dec, get, set, reset
  }

}
