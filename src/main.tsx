import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./styles/base.scss"
import { theme } from './themes/theme'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './themes/globalStyle'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
        <App />
    </ThemeProvider>
  </React.StrictMode>,
)
