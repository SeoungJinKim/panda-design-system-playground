import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Button } from './lib'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Button size='medium' color='primary'>
      Test
    </Button>
  </React.StrictMode>
)
