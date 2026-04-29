import react, { createContext } from 'react'
import './App.css'
import Aprsnt from './Aparnt'
import GetData from './Data/GetData'
import Change from './Hooks/UseState'
// import { UserContext } from './Hooks/context/UseContext'
import FromContext from './Data/FromContext'
import B from './Hooks/context/B'
import Form from './Hooks/form/Form'
import Dataprovider from './Hooks/context/ContextProvider'
import List from './Hooks/context/userList'
//  export const UserContext = createContext()
import UseEffecttt from './Hooks/UseEffect'
import UseEffect2 from './useEffect2'
import LoadingEffect from './LoadingEffect'
import Logout from './Hooks/form/LogOut'
import UseReducer from './Hooks/UseReducer'

import { BrowserRouter,Routes,Route } from 'react-router-dom'


import Navbar from './Hooks/Router/Navbar'
import Home from './Hooks/Router/Home'
import About from './Hooks/Router/About'
import Contact from './Hooks/Router/Contact'
import SubPath from './Hooks/Router/SubPath'
import SinglePage from './Hooks/Router/SinglePage'
import Card from './Hooks/Router/Card'
import { Suspense } from 'react'
function App() {
  // const [count, setCount] = useState(0)
// const namee ="abcd"

  return (
     <>
    <BrowserRouter>

<Routes>

<Route path='nav' element={ <Navbar /> } />

<Route path='/' element={<Card />} />

<Route path='/user/:id' element={ <SinglePage /> } />



<Route path='home' element={<Home />}>

<Route path='subPath' element={<SubPath  />} />
</Route>
<Route path='about' element={<About />} />
<Route path='contact' element={<Contact />} />

</Routes>

    </BrowserRouter>

    {/* <h2>this is app.jsx page</h2> */}
    
   </>
  )
}

export default App
