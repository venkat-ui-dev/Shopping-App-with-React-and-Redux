import './App.css'
import { Header } from './Components/HeaderComponent/Header'
import { Products } from './Components/ProductsComponent/Products'
import { Cart } from './Components/CartComponent/Cart'
import { useSelector } from 'react-redux'
import { RootState } from './Store/Store'
import { Spinner } from './Components/CartComponent/Spinner'
import { Notification } from './Components/CommonComponent/Notification'


export const App = () => {
  const { cartIsVisible, isLoading, error } = useSelector((state: RootState) => state.productList)

  return (
    <>
      {error && <Notification title={error} status={'error'} />}
      <div id='container'>
        <Header />
        {isLoading && <Spinner />}
        {!cartIsVisible ?
          <Products /> :
          <Cart />}
      </div>

    </>
  )
}
