import React from 'react'
import "./home.css"
import Navbar from '../../compo/navbar/Navbar'
import Header from '../../compo/header/Header'
import { Featured } from '../../compo/featured/Featured'
import PropertyList from '../../compo/propertyList/PropertyList'
import FeaturedProperties from '../../compo/featuredProperties/FeaturedProperties'
import MailList from '../../compo/mailList/MailList'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <div className="homeContainer">
      <Featured/>
      <h1 className="homeTitle">Browse by property type</h1>
      <PropertyList/>
      <h1 className="homeTitle">Places guests love</h1>
      <FeaturedProperties/>
      <MailList/>
    </div>
    </>
  )
}

export default Home
