import { useEffect, useState } from 'react'

// Like useState, but the value is saved to localStorage and survives page reloads.
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key)
      return stored !== null ? JSON.parse(stored) : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // storage can be unavailable (private mode); the app still works without it
    }
  }, [key, value])

  return [value, setValue]
}
