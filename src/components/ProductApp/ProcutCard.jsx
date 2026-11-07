import React from 'react'
import {classMerge} from "../../common/helpers/classMerge"
import styles from './Products.module.css';


const ProcutCard = ({ product, isHasBasket, onClickProduct }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageBox}>
        <span className={styles.category}>{product.category}</span>
        <img
          className={styles.image}
          src={product.images[0]}
          alt={product.title}
        />
      </div>
      <div className={styles.body}>
        <div className={styles.meta}>
          <span>{product.brand}</span>
          <span className={styles.rating}>${product.rating}</span>
        </div>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.description}>{product.description}</p>

        <div className={styles.footer}>
          <div>
            <div className={styles.price}>${product.price}</div>
            {!product.stock && (
              <div className={styles.outOfStock}>Out of Stock</div>
            )}

          </div>
          <button
            className={classMerge(styles.button,
              isHasBasket && styles.removeBtn,
            )}
            disabled={!product.stock}
            onClick={onClickProduct}
          >            
            {isHasBasket ? 'Remove' : 'Add'}

          </button>
        </div>
      </div>
    </div>
  )
}

export default ProcutCard
