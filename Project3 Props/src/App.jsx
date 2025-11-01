import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    
      <div className='parent'>
        <Card user='Swaraj Deshmukh' img="https://images.unsplash.com/photo-1712820504667-8952366b02d3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387"/>

        <Card user='Pratik Chaudhari' img="https://images.unsplash.com/photo-1679531751641-79f78cbb5c0b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"/>
      </div>
      
    
  )
}

export default App
