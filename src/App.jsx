import { useState } from 'react'
import {Header} from './layouts/Header/Header'
import {Footer} from './layouts/Footer/Footer'
import { MainContainer } from './layouts/MainContainer/MainContainer'



export const  App = () => {

  return (
    <>
      <Header/>
      <MainContainer/>
      <Footer/>

    </>
  )
}


