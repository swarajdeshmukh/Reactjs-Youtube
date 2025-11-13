
import { Link } from 'react-router-dom'

const NavbarProduct = () => {
  return (
    <div className='NavbarProduct'>
    <Link to='/product/mens'>Mens</Link>
    <Link to='/product/women'>Womens</Link>
    <Link to='/product/kids'>Kids</Link>
    </div>
  )
}

export default NavbarProduct
