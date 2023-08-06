import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './Pages/HomeScreen'
import AboutUs from './Pages/AboutUs'
import NotFound from './Pages/NotFound'
import Subscribe from './Pages/Subscribe'
import Channels from './Pages/Channels'
import Movies from './Pages/Movies'
import FavoriteMovies from './Pages/Dashboard/FavoriteMovies'
import LogIn from './Pages/LogIn'
import ContactUs from './Pages/ContactUs'

const App = () => {
  return (
<Routes>
  <Route path="/" element={<HomeScreen/>} />
  <Route path="/about-us" element={<AboutUs/>} />
  <Route path="/channels" element={<Channels/>} />
  <Route path="/movies" element={<Movies/>} />
  <Route path="/subscribe" element={<Subscribe/>} />
  <Route path="/login" element={<LogIn/>} />
  <Route path="/favorite-movies" element={<FavoriteMovies/>} />
  <Route path="/contact-us" element={<ContactUs/>} />
  <Route path="*" element={<NotFound/>} />
</Routes>
    )
}

export default App