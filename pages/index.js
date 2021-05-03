import { useState, useEffect } from "react"

import NotaBloco from '../components/NotaBloco/NotaBloco'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

// import Link from 'next/link'

export default function Home() {
  useEffect(()=>{
    document.title = "Editor de Texto | By Rafael Laube"
  })
  return (
    <div>
      <Header/>
      <div className="content">
        <NotaBloco titulo='Título da minha nota'/>
        <script src="https://kit.fontawesome.com/9cc6fa156c.js" crossOrigin="anonymous"></script>
      </div>
      <Footer/>
    </div>
  )
}
