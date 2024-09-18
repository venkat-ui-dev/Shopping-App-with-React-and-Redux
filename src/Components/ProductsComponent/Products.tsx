import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductList, productBtnAction } from '../../Store/ProductListSlice';
import { AppDispatch, RootState } from '../../Store/Store';
import { ProductLists } from './ProductLists';

export const Products = () => {
    const dispatch: AppDispatch = useDispatch();

    const { productList } = useSelector((state: RootState) => state.productList)

    useEffect(() => {
        dispatch(getProductList())
    }, [])

    const categoryHandler = (selectedData: any) => {
        dispatch(productBtnAction.filterCatergory(selectedData))
    }

    return (
        <div>
            <div id='filter-container'>
                <select name="filter" id="Filter" onChange={(ev) => categoryHandler(ev.target.value)}>
                    <option value="all">All</option>
                    <option value="vg">Veg</option>
                    <option value="nv">Non Veg</option>
                </select>
            </div>
            <ul id='food'>
                {productList.map((product: any) => (<ProductLists key={product.id} product={product} />))}
            </ul>
        </div>
    )
}
