import React, { useState } from 'react'
import Products from '../ProductApp/Products '
const ProductApp = () => {
    const [basket, setBasket] = useState([]);
    
    const handleBasket = () => {
      console.log("Product");
      const isHasBasket = basket.find((item) => item.id == product.id);

      if (isHasBasker) {
        const newBasket = basket.filet((item) => item.id !== product.id);
      } else {
        const newBasket = {...basket, product};
        setBasket(newBasket); 
      }
    }

    
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-9">
            <Products 
            basketData={basket} />
        </div>
      </div>
    </div>
  )
}

export default ProductApp;
