 
import './App.css'
import Counter from './Counter'
import Team from './Team'
import User from './User'
import Friends from './Friends'

function App() { 

  function hundleClick() {
    alert ('button clicked')
  }
  function addToFive (num) {
    alert (num+5)
  }
  return (
    <>
       
      <h1> React Core Concept </h1>
      <Friends></Friends>
      <User></User>
      <Team></Team>
      <Counter></Counter>

       {/* <button onClick={hundleClick} >Click Me</button>
       <button onClick={() => {alert('click button two')}}>Clicked</button>
       <button onClick={() => {addToFive(4 )}}>Five</button> */}
    </>
  )
}

export default App
