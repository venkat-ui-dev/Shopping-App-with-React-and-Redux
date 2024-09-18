import { useCallback } from 'react'

import logo from '../../assets/logo.png'
import { Button } from '../CommonComponent/Button'

import { productBtnAction } from '../../Store/ProductListSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store/Store';

export const Header = () => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state: RootState) => state.CartSlice.totalQuantity)

  const toggleBtnHandler = useCallback(() => {
    dispatch(productBtnAction.toggleCart());
  }, []);

  return <header id='main-header'>
    <div id='title'>
      <img src={logo} alt="VP Foods" />
      <h1>VP Foods</h1>
    </div>
    <nav>
      <Button textOnly onClick={() => toggleBtnHandler()}>Cart ({totalQuantity})</Button>
    </nav>
  </header>
}
