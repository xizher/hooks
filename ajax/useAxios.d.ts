import { Ref } from 'vue';

export declare function setBaseUrl (url: string) : {
  useAxios: () => {
    loading: Ref<boolean>
    doAxios: () => Promise<any>
  }
}

export declare function useAxios (options: {
  method: 'get' | 'post' | 'put' | 'delete'
  url: string
  data: any
  byBaseUrl: boolean
}) : {
  loading: Ref<boolean>
  doAxios: () => Promise<any>
}