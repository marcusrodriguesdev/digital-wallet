import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { getCurrency } from './economy-api'
import { data } from './test/mock'

describe('EconomyApi', () => {
  it('should return the currency', async () => {
    const mock = new MockAdapter(axios)

    mock.onGet('https://economia.awesomeapi.com.br/json/USD-BRL').reply(200, data)

    const response = await getCurrency('USD-BRL')

    expect(response).toEqual(data)
  })

  it('should return an error', async () => {
    const mock = new MockAdapter(axios)
    const error = 'Network Error'
    mock.onGet('https://economia.awesomeapi.com.br/json/USD-BRL').networkError()

    const response = await getCurrency('USD-BRL')

    expect(response).toEqual(new Error(error))
  })
})
