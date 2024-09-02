import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardComponent from './custom-components/CardComponent';

function App() {
  const [cardDetails,setCardDetails] = useState([{name:"Nitin",about:"A SWE @ JP MORGAN CHASE AND COMPANY",
    interest:["GYM","CODING","HIKING"]
  },
  {name:"Anshul",about:"Former intern at PWC",
    interest:["GYM","CODING","HIKING"]
  }]);
  return <div>
    <CardComponent state={cardDetails} ></CardComponent>
  </div>
}

export default App
