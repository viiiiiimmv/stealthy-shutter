import { useState } from 'react'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import { posts } from './assets/data/posts'
import GalleryPage from './pages/GalleryPage'
import './App.css'

// Import fonts to ensure bundling
import './assets/fonts/BingoRegular-aYJ8m.otf'
import './assets/fonts/MontserratAlternates-LightItalic.ttf'
import './assets/fonts/Montserrat-VariableFont_wght.ttf'
import './assets/fonts/Galant-BF6902dc08be60f.ttf'

function App() {

  return (
    <>
      <Home/>
      <GalleryPage/>
    </>
  )
}

export default App
