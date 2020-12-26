import { watch } from 'vue'
import { useAxios } from '../ajax/useAxios.js'

const { loading, doAxios } = useAxios()

// console.log(loading)

watch(loading, val => console.log(val))


doAxios({
  url: 'https://geo.datav.aliyun.com/areas_v2/bound/100000.json',
  byBaseUrl: false
}).then(res => {
  console.log(res)
})
