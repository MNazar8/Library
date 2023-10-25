import Home from './views/Home'
import Detail from './views/Detail'
import Login from './views/Login'
import SignUp from './views/Signup'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path='/home/:id' element={<Detail/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </>
    )
}

export default App
