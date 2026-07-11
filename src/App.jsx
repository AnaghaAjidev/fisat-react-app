import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddStud from './components/AddStud'
import SearchStud from './components/SearchStud'
import DeleteStud from './components/DeleteStud'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ViewStud from './components/ViewStud'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddStud />} />
        <Route path='/search' element={<SearchStud />} />
        <Route path='/delete' element={<DeleteStud />} />
        <Route path='/view' element={<ViewStud />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
