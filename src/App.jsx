import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Category from './components/category/Category'
import Category2 from './components/category/Category2'
import Services from './components/services/Services'
import Banner from './components/banner/Banner'
import { bannerData } from './constant/bannerData'

const App = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white
      duration-200 overflow-hidden'
    >
      <Navbar/>
      <Hero/>
      <Category/>
      <Category2/>
      <Services/>
      <Banner data={bannerData}/>
    </div>
  )
}

export default App
