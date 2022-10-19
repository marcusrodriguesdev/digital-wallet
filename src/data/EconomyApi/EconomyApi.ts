import axios from 'axios'

export const getCurrency = async (currency: string): Promise<void> => {
  try {
    const response = await axios.get(`https://economia.awesomeapi.com.br/json/${currency}`)
    return response.data
  } catch (error) {
    return error
  }
}
