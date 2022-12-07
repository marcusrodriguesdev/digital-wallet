import axios from 'axios'

const getCurrency = async (currency: string): Promise<void> => {
  try {
    const response = await axios.get(`https://economia.awesomeapi.com.br/json/${currency}`)
    return response.data
  } catch (error) {
    return error
  }
}

export { getCurrency }
