import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
import './index.scss'

const Index: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="page"></div>
      <Outlet />
    </div>
  )
}

export default Index
