import axios from 'axios'

const client = axios.create({
  baseURL: 'https://economia.awesomeapi.com.br',
  timeout: 10000
})

const getCurrency = async (url: string): Promise<void> => {
  try {
    const response = await client.get(url)
    return response.data
  } catch (error) {
    return error.message
  }
}

export { getCurrency }
