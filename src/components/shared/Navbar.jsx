/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {

  const cartObj = useSelector(store => store.cartReducer)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <NavLink to="/" className="navbar-brand">React Shop</NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" exact className="nav-link">หน้าหลัก</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/manage" className="nav-link">จัดการร้าน</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">เกี่ยวกับเรา</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">ติดต่อเรา</NavLink>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">
                ตะกร้า &nbsp;
                <span className="badge rounded-pill bg-danger">
                { cartObj.cartItems.length }
                </span>
                &nbsp; ชิ้น
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
