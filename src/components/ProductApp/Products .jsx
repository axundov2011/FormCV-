import React from 'react'
import {productsData} from "../../mock/productData"
import ProductCard from '../ProductApp/ProcutCard'
import styles from './Products.module.css';

const Products = ({ basketData, onSelectProduct }) => {
  return (
    <div className={styles.container}>
      {
        productsData.map((product) => {
          const isHasBasket = basketData.find((item) => item.id === product.id)


          return (
            <ProductCard
            key={product.id}
            product={product}
            isHasBasket={isHasBasket}
            onSelectProduct={() => onSlectProduct(product)}
            />
          )
        })
      }
    </div>
  )
}

export default Products 
