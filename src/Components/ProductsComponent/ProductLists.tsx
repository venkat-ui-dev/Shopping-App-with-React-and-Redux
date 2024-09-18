import { Button } from '../CommonComponent/Button';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useDispatch } from 'react-redux';
import { cartAction } from '../../Store/CartSlice';

export const ProductLists = ({ product }: any) => {

  const dispatch = useDispatch();

  const addToCartHandle = () => {
    dispatch(cartAction.addToCart(product))
  }


  return (
    <li className='food-item'>
      <article>
        <LazyLoadImage
          src={product.image}
          alt={product.name}
          effect='blur'
          wrapperProps={{
            style: { transitionDelay: "0.4s" },
          }}
        />
        <div>
          <h3>{product.name}</h3>
          <p className='food-item-price'>&#x20b9;{product.price}</p>
          <p className='food-item-description'>{product.description}</p>
        </div>
        <p className='food-item-action'>
          <Button onClick={addToCartHandle}>Add to Cart</Button>
        </p>
      </article>
    </li>
  )
}

