import { RouterProvider } from 'react-router-dom'
import './style/App.css'
import { Router } from './routers/AppRouter'

const App = () => {

  return (
    <RouterProvider router={Router} />
  )
}

export default App
