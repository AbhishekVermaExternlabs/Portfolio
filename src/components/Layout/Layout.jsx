import React, { Fragment } from 'react'
import About from '../About/About'
import Experience from '../Experience/Experience'
import Header from '../Header/Header'
import HeroSection from '../Hero-section/HeroSection'
import Services from '../Services/Services'


const Layout = () => {
  return <Fragment>
    <Header/>
    <HeroSection/>
    <About/>
    <Services/>
    <Experience/>
  </Fragment>
}

export default Layout