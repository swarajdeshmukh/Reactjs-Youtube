
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'


const users = [
  {
    img: 'https://assets.unileversolutions.com/v1/134103152.jpg?im=AspectCrop=(1280,740);Resize=(1280,740)',
    intro:'',
    tag:'Satisfide'
  },
  {
    img: 'https://images.unsplash.com/photo-1665436035665-d7dad9086ee2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=759',
    intro:'',
    tag:'UnderServed'
  },
  {
    img: 'https://images.unsplash.com/photo-1661955657913-510565d33ba2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
    intro:'',
    tag:'Underbanked'
  }, 
]

const App = () => {
  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App
