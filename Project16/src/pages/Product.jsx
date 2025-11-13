
import { Outlet } from 'react-router-dom'
import NavbarProduct from '../components/NavbarProduct'

const Product = () => {
  return (
    <>
     <NavbarProduct />
      <Outlet />
    </>
    
  )
}

export default Product
