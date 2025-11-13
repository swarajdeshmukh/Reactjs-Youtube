
import { Link, Route, Routes } from "react-router-dom" 
import Home from "./page/Home"
import About from "./page/About"
import Contact from "./page/Contact"
const App = () => {
  return (

    <div>
      <div className="nav">

        <div className="nav-left">
          <Link to='/'><h3>Swaraj</h3></Link>
        </div>

        <div className="nav-right">
          <ul className="list">
            <li><Link to='/'>Home</Link> </li>
            <li><Link to='/about'>About</Link> </li>
            <li><Link to='/contact'>Contact</Link> </li>
          </ul>
        </div>
          
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route  path='/about' element={<About />}/>
          <Route path="/contact" element={<Contact />} />
       </Routes>
      </div>

    </div>
    
    // <div>hello</div>
  )
}

export default App
