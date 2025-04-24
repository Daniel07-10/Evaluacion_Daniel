import { useState } from 'react'
import {Header} from './layouts/Header/Header'
import {Footer} from './layouts/Footer/Footer'
import { MainContainer } from './layouts/MainContainer/MainContainer'
import { InputFiltro } from './components/InputFiltro/InputFiltro'


export const  App = () => {

  return (
    <>
      <Header/>
      <MainContainer/>
      <Footer/>

    </>
  )
}


