import axios from 'axios'
import { ref } from 'vue'

let BASE_URL = ''

export function setBaseUrl (url) {
  BASE_URL = url
  return {
    useAxios
  }
}

export function useAxios () {
  const loading = ref(false)

  return {
    loading, doAxios
  }

  function doAxios ({
    method = 'get'
    , url
    , data
    , byBaseUrl = true
  } = {}) {
    return new Promise((resolve, reject) => {
      loading.value = true
      method = method.toLowerCase()
      url = byBaseUrl ? `${BASE_URL}${url}` : url
      // url = method === 'delete' ? '' : '' // TODO: delete send data
      axios[method](url, method === 'get' ? { params: data } : data)
        .then(({ data: result }) => {
          loading.value = false
          if (byBaseUrl) {
            result.err ? reject(result.info) : resolve(result.data) // API result
          } else {
            resolve(result)
          }
        })
        .catch(err => {
          loading.value = false
          reject(err)
        })
    })
  }
}
