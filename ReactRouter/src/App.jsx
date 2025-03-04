import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import UserDetail from './components/UserDetail'
import NotFound from './pages/NotFound'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/user/:id" element={<UserDetail/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
   </Router>
  )
}

export default App
