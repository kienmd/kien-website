import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Layout from './components/Layout'

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        {/* this file structure is wrong!! as Layout should wrap around the Routes but we've defined the Routes in Layout.jsx */}
        <Layout /> 
      </Router> 
    </ThemeProvider>
  )
}
