import { useLocation } from 'react-router-dom'

export function useActivePath() {
  const location = useLocation()
  
  return (path) => {
    return location.pathname === path
  }
} 