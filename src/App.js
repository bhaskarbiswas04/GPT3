import React from 'react'


import {Header, WhatGPT, Features, Possibilities, Blog, Footer} from './containers'
import {Navbar, CTA, Brands} from './components';
import './App.css'

function App() {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar />
            <Header />
        </div>
        <Brands />
        <WhatGPT />
        <Features />
        <Possibilities />
        <CTA />
        <Blog />
        <Footer />
    </div>
    
  )
}

export default App