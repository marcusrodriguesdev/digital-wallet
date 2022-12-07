import axios from 'axios'

import { Currency } from '@/domain/protocols/currency'

/**
 *
 * @param currency - Currency code
 * @returns  Currency data from API or error
 */
const getCurrency = async (currency: string): Promise<Currency> => {
  try {
    const response = await axios.get(`https://economia.awesomeapi.com.br/json/${currency}`)
    return response.data
  } catch (error) {
    return error
  }
}

export { getCurrency }
