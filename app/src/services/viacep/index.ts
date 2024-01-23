import { Axios } from 'axios'

export const useViacep = () => {
  const instance = new Axios({ baseURL: 'https://viacep.com.br/ws' })
  return {
    findCep: (cep: string) => {
      return instance.get(`/${cep}/json/`)
    },
  }
}
