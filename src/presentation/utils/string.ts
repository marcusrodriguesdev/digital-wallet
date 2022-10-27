// A Function to get initial caracter from a string
export const getInitials = (name: string): string => {
  if (!name) return null

  const names = name.split(' ')
  return names
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}

// A Function to validate email
export const validateEmail = (email: string): boolean => {
  const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/g
  const isValid = emailRegex.test(email)

  return isValid
}
