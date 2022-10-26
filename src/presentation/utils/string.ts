// A Function to get initial caracter from a string
export const getInitials = (name: string): string => {
  if (!name) return null

  const names = name.split(' ')
  return names
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}
