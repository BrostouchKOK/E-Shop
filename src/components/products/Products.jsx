import React from 'react'
import Heading from '../shared/Heading'
import ProductCard from './ProductCard'
import { ProductData, ProductData2 } from '../../constant/productData'

const Products = () => {
  return (
    <div>
      <div className='container'>
        {/* header section */}
        <Heading
          title={"Our Products"}
          subtitle={"Explore Our Products"}
        />
        {/* body section */}
        <ProductCard
          data={ProductData}
        />
        <ProductCard
          data={ProductData2}
        />
      </div>
    </div>
  )
}

export default Products
