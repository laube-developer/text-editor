import { useState, useEffect } from "react"
import NotaBloco from '../components/NotaBloco/NotaBloco'

export default function Home() {
  useEffect(()=>{
    document.title = "Editor de Texto | By Rafael Laube"
  })
  return (
    <div>
      <NotaBloco titulo='Título da minha nota'/>
      <script src="https://kit.fontawesome.com/9cc6fa156c.js" crossOrigin="anonymous"></script>
    </div>
  )
}
