import { useState } from 'react'
import Home from './pages/Home'

import './App.css'
import SunsetCarousel from './pages/Sunsets'
import BloomGallery from './pages/Flowers'
import RandomCorner from './pages/Randoms'
import MountainCarousel from './pages/Mountains'
import LunarQuietMoments from './pages/Moon'
import AnimalMoments from './pages/BirdsAnimals'
import Closure from './pages/Closure'

function App() {

  return (
    <>
      <Home/>
      <SunsetCarousel/>
      <BloomGallery/>
      <MountainCarousel/>
      <LunarQuietMoments/>
      <AnimalMoments/>
      <RandomCorner/>
      <Closure/>
    </>
  )
}

export default App
