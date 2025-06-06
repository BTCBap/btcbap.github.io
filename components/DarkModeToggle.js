import { useEffect, useState } from 'react'

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const stored = typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark'
    setDark(stored)
    document.documentElement.classList.toggle('dark', stored)
  }, [])

  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', next ? 'dark' : 'light')
    }
  }

  return (
    <button onClick={toggle} className="btn btn-ghost fixed bottom-4 left-4">
      <i className={`fas ${dark ? 'fa-moon' : 'fa-sun'}`}></i>
    </button>
  )
}
