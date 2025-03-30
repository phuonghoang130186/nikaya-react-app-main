import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { DisplayProvider } from './contexts/DisplayContext.jsx'
import { ReadingProvider } from './contexts/SettingReading.jsx'
import { AuthenticateProvider } from './contexts/AuthenticateContent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DisplayProvider>
      <ReadingProvider>
        <AuthenticateProvider>
          <App />
        </AuthenticateProvider>
      </ReadingProvider>
    </DisplayProvider>
  </StrictMode>,
)
