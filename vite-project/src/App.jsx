import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header';
import Products from './assets/products.png'
import './App.css'
import CardProduct from './components/cardProduct';
function App() {

  return (
    <>
     <Header/>
     <div className="banner">
        <img src={Products} alt="products" />
        <h1>Доставка бесплатно от 1000 ₽</h1>
     </div>
     <div className="sale">
      <h2>Акции</h2>
      <CardProduct/>
     </div>
    </>
  )
}

export default App
