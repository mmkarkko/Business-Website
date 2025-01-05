import Footer from './components/Footer';
import Header from './components/Header'
import { Outlet } from "react-router-dom";
import './App.css'

function App() {

  return (
    <div className="App">
      <nav>
        <Header />
      </nav>
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
