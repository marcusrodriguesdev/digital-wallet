import { getInitials } from './string'

describe('presentation/utils/string', () => {
  it('should return the initials of a string', () => {
    const initials = getInitials('test')
    expect(initials).toBe('T')
  })

  it('should return the initials of a string with more than one word', () => {
    const initials = getInitials('test test')
    expect(initials).toBe('TT')
  })

  it('should return the null if the string is empty', () => {
    const initials = getInitials('')
    expect(initials).toBeNull()
  })
})
