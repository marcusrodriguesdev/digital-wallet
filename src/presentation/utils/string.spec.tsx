import { getInitials, validateEmail } from './string'

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

  it('should return true if the email is valid', () => {
    const email = 'alguem@gmail.com'
    const isValid = validateEmail(email)
    expect(isValid).toBeTruthy()
  })

  it('should return false if the email is invalid', () => {
    const email = 'alguemgmail.com'
    const isValid = validateEmail(email)
    expect(isValid).toBeFalsy()
  })

  it('should return false if the email is empty', () => {
    const email = ''
    const isValid = validateEmail(email)
    expect(isValid).toBeFalsy()
  })
})
