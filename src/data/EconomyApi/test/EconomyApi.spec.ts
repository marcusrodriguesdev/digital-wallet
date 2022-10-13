import { AxiosInstance } from 'axios'
import { mock } from 'jest-mock-extended'

import { getCurrency } from '../EconomyApi'
import { data } from './mock'

describe('EconomyApi', () => {
  it('should return data', async () => {
    const mockedAxios = mock<AxiosInstance>()
    mockedAxios.get.mockResolvedValue({ data })
    const result = await getCurrency('/USD-BRL/2?start_date=20221012&end_date=20221012')

    expect(result).toEqual(data)
  })

  it('should return error', async () => {
    const mockedAxios = mock<AxiosInstance>()
    mockedAxios.get.mockRejectedValue(new Error('error'))
    const result = await getCurrency('error')

    expect(result).toEqual('Request failed with status code 404')
  })
})
