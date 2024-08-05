import Home from "./components/home"
import Navbar from "./components/navbar"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Spical from "./components/sub_componets/spical"
import Contact from "./components/sub_componets/contact"
import Account from "./components/sub_componets/account"
import Rigistar from "./components/sub_componets/rigistar"
function App() {

  return (
    <BrowserRouter>
<Routes>
  <Route path="/" element={<Navbar/>}/>
  <Route index element={<Home/>}/>
  <Route path="spical" element={<Spical/>}/>
 <Route path="contact"  element={<Contact/>}/>
 <Route  path="account" element={<Account/>} />
 <Route  path="rigistar" element={<Rigistar/>} />
</Routes>

    </BrowserRouter>
  )
}

export default App