import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Output from "./Output"
import Button from './Button.jsx'
import Name from './Name.jsx'
import Array from './Array.jsx'
import Mapp from './Mapping.jsx'
import Counter from './Usestate.jsx'
import Tasbeeh from './Usestate.jsx'
import Webpage from './Webpage.jsx'
import Card from './Card'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Output/>
    <Button />
    <Name/>
    <Array/>
    <Mapp/>
    <Counter/>
    <Tasbeeh/>
    <Webpage/>
    <Card/>
    
  </StrictMode>,
)
