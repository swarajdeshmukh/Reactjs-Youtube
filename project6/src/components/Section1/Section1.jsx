import Navbar from './Navbar'
import Herosection from './Herosection'

const Section1 = (props) => {
  console.log(props)
  return (
    <div className='h-screen w-full'>
      <Navbar />
      <Herosection users={props.users}/>
    </div>
  )
}

export default Section1
