import React from 'react'
import BasketItem from './BasketItem'
const Basket = () => {
  return (
    <div className={styles.basket}>
      <div className={styles.header}>
        <h2 className={styles.title}>Basket</h2>
        <span className={styles.count}>{basket.length}</span>
      </div>

      {!basket.length && <p className={styles.empty}>Your basket is empty</p>}
         
        {
            basket.map((item, index) => (
                <BasketItem
                key={`basket-id ${item.id} ${index}`}
                item={item}
                />
            ))
        }
    </div>
  )
}

export default Basket
