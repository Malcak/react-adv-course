import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons
} from '../components'
import products from '../data/products'
import { ProductCardHandlers } from '../interfaces/interfaces'
import '../styles/custom-styles.css'

const product = products[0]

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <ProductCard
          key={product.id}
          product={product}
          className="bg-dark text-white"
          initialValues={{ count: 4, maxCount: 10 }}
        >
          {({
            reset,
            count,
            increaseBy,
            isMaxCountReached,
            maxCount
          }: ProductCardHandlers) => (
            <>
              <ProductImage className="custom-image" />
              <ProductTitle className="text-white" />
              <ProductButtons className="custom-buttons" />
              <button onClick={reset}>Reset</button>
              <button onClick={() => increaseBy(-2)}>-2</button>
              {!isMaxCountReached && (
                <button onClick={() => increaseBy(2)}>+2</button>
              )}
              <span>
                {count}/{maxCount}
              </span>
            </>
          )}
        </ProductCard>
      </div>
    </div>
  )
}
