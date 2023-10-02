import logo from './logo.svg';
// import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Components/Home"
import Cart from "./Components/Cart"
import Store from "./Components/Store"
import {Provider} from "react-redux"


function App() {
  return (
   
      <div>
      

    <>

<Provider store={Store}>

    <BrowserRouter>
        <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
      <Footer/>
    </BrowserRouter>

    </Provider>
    </>
    </div>
  );
}

export default App;