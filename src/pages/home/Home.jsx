import React, { useState } from 'react'
import ProductList from '../productlist/ProductList'

import { useSelector, useDispatch } from 'react-redux'

const Home = () => {
    document.title = 'Home | React Shop'

    const productObj = useSelector(store => store.productReducer)

    // console.log(productObj.items)

    const dispatch = useDispatch()

    // ส่วนของการเขียนค้นหาข้อมูล
    const [searchkey, setSearchkey] = useState('')
    const [productItmes, setProductItmes] = useState(productObj.items)
    const filterItem = () => {
        const duplicatelist = productObj.items
        const filteredlist = duplicatelist.filter(
            item => item.title.toLowerCase().includes(searchkey.toLowerCase())
        )
        setProductItmes(filteredlist)
    }

    const handleAddtoCart = (index) => {
        // console.log(index)
        dispatch({type:'ADD_ITEM_TO_CART', payload: productItmes[index]})
    }

    return (
        <div>
            <h1 className="mb-3">รายการสินค้า</h1>
            <div className="mb-4">
                <input type="search" className="form-control" placeholder="Search items"
                value={searchkey}
                onChange={(e)=>{setSearchkey(e.target.value)}}
                onKeyUp={filterItem}
                />
            </div>
            <ProductList 
                products={productItmes} 
                handleAddtoCart={handleAddtoCart} 
            />
        </div>
    )
}

export default Home
