import Header from './Components/header/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/footer/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<div>Homepage</div>}/>
       <Route path="/about" element={<div>About</div>}/>
       <Route path="/products" element={<div>Products</div>}/> 
       <Route path=":productId" element={<div>Product Details</div>}/>
     </Routes>
     </BrowserRouter>
     <Footer/>
     </div>
   );
}

export default App;
