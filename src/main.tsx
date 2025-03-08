import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import App from './App.tsx'

import {store} from '../src/store/index.ts'
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')!).render(
  <Provider store={store} >
    <App />
  </Provider>,
)
