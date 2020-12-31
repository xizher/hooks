import { watch, watchEffect } from 'vue'
import { useAxios } from '../ajax/useAxios.js'
import { useCounter } from '../state/useCounter.js'

// const { loading, doAxios } = useAxios()

// // console.log(loading)

// watch(loading, val => console.log(val))


// doAxios({
//   url: 'https://geo.datav.aliyun.com/areas_v2/bound/100000.json',
//   byBaseUrl: false
// }).then(res => {
//   console.log(res)
// })

// const { count, inc, dec, get, set, reset } = useCounter()

// // watchEffect(() => {
// //   console.log(count.value)
// // })

// watch(count, val => {
//   console.log(val)
// })

// inc()
// dec()
// set(2)
// console.log('get', get())
