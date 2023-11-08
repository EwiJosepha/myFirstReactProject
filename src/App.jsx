
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './Components/Landingpage/Landing.jsx'
import Formm from './Components/Formfilling/Form.jsx'
import Profilecreated from './Components/Profilepic/profile.jsx'
import  Displaydata from './Components/Edittfile/Editbtn.jsx'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Landing  />}/>
      <Route path='/Form' element={ <Formm />}/>
      <Route path='/Profilepic' element={ <Profilecreated />}/>
      <Route path='/Edittfile' element={ <Displaydata />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
