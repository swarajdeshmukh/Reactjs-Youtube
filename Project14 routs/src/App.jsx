// npm i react-router-dom to install react router dom in project
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './Pages/About'
import Contact from './pages/Contact'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </div>
  )
}

export default App
