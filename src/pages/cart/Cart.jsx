/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Cart = () => {

    document.title = 'Cart | React Shop'

    const cartObj = useSelector(store => store.cartReducer)
    const itmes = cartObj.cartItems

    const dispatch = useDispatch()

    return (
        <div>
            <h1 className="mb-5">ตะกร้าสินค้า</h1>

            <div className="wrapper wrapper-content animated fadeInRight">
                <div className="row">
                    <div className="col-md-9">
                    <div className="ibox">
                        <div className="ibox-title">
                        <div className="row">
                            <div className="col-md-6"><h5>รายการสินค้าในตะกร้า</h5></div>
                            <div className="col-md-6 text-end"><span>(<strong>{ itmes.length }</strong>) ชิ้น</span></div>
                        </div>

                        </div>

                        {
                            itmes.map((product, index) => {
                                return (
                                <div className="ibox-content" key={index}>
                                    <div className="table-responsive">
                                        <table className="table shoping-cart-table">
                                        <tbody>
                                            <tr>
                                            <td width={120}>
                                                <img src={product.imgUrl} className="card-img-top" alt="..." />
                                            </td>
                                            <td className="desc">
                                                <h3>
                                                <a href="#" className="text-navy">
                                                    {product.title}
                                                </a>
                                                </h3>
                                                <p className="small">
                                                    {product.description}
                                                </p>
                                                <div className="m-t-sm">
                                                <a href="#delete" className="text-muted" onClick={()=>{dispatch({type:'DELETE_ITEM_FROM_CART', payload:product})}}>
                                                    <i className="fa fa-trash" /> ลบรายการนี้
                                                </a>
                                                </div>
                                            </td>
                                            <td>
                                                THB{product.price}
                                            </td>
                                            <td width={65}>
                                                <input type="text" className="form-control" placeholder={1} />
                                            </td>
                                            <td>
                                                <h4>
                                                THB{product.price}
                                                </h4>
                                            </td>
                                            </tr>
                                        </tbody>
                                        </table>
                                    </div>
                                </div>
                                )
                            })
                        }

                        <div className="ibox-content">
                            <div className="row">
                            <div className="col-md-6"><NavLink to="/">กลับไปซื้อสินค้าต่อ</NavLink></div>
                            <div className="col-md-6 text-end"><button className="btn btn-primary pull-right"><i className="fa fa fa-shopping-cart" /> ชำระเงิน (Check out)</button></div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="ibox">
                        <div className="ibox-title">
                        <h5>สรุปยอดชำระ</h5>
                        </div>
                        <div className="ibox-content">
                        <span>
                            รวมทั้งหมด
                        </span>
                        <h2 className="font-bold">
                            THB3,900.00
                        </h2>
                        <hr />
                        <span className="text-muted small">
                            *ราคานี้ยังไม่รวมภาษีมุลค่าเพิ่ม 7%
                        </span>
                        </div>
                    </div>
                    <div className="ibox">
                        <div className="ibox-title">
                        <h5>Support</h5>
                        </div>
                        <div className="ibox-content">
                        <h3><i className="fa fa-phone" /> +66 02 783 001</h3>
                        <span className="small">
                            หามีคำถามเกี่ยวกับสินค้าบริการ และการชำระเงินสามารถติดต่อเราได้ตลอด 24 ชม.
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
