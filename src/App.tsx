import { ThemeProvider } from 'styled-components'
import { Table } from './components/Table/Table'
import { lightTheme } from './styles/theme.style'
import '@/App.css'


function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <Table />
      </ThemeProvider>
    </>
  )
}

export default App
