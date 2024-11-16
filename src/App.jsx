import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import NewsDetails from './components/NewsDetails'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
<Navbar/>

<Routes>
  <Route path="/" element={<Home />} />
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path="/news/:id" element={<NewsDetails />} />
</Routes>

<Footer/>
    </div>
  )
}

export default App
