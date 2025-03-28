import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Category from './components/category/Category'
import Category2 from './components/category/Category2'
import Services from './components/services/Services'
import Banner from './components/banner/Banner'
import { bannerData, bannerData2 } from './constant/bannerData'
import Products from './components/products/Products'
import Blog from './components/blog/Blog'

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
      <Products/>
      <Banner data={bannerData2}/>
      <Blog/>
    </div>
  )
}

export default App
