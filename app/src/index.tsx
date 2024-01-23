import './index.css'
import App from './App'
import React from 'react'
import '@fontsource/poppins'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { CookiesProvider } from '@hooks/cookies'
import { StorageProvider } from './hooks/storage'
import { ApiProvider } from './hooks/api'
import { DefaultTheme } from './theme'
import { enableMapSet } from 'immer'
import { ThemeProvider } from '@mui/material'
import { AuthProvider } from '@hooks/auth'
import { SnackbarProvider } from 'notistack'
import { BrowserRouter } from 'react-router-dom'

enableMapSet()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={DefaultTheme}>
      <SnackbarProvider
        maxSnack={1}
        autoHideDuration={5000}
        anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
      >
        <BrowserRouter>
          <CookiesProvider>
            <StorageProvider>
              <AuthProvider apiBaseURL={process.env.REACT_APP_API_URL}>
                <ApiProvider apiBaseURL={process.env.REACT_APP_API_URL}>
                  <App />
                </ApiProvider>
              </AuthProvider>
            </StorageProvider>
          </CookiesProvider>
        </BrowserRouter>
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
