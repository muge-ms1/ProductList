import './App.css';
import Cards from './product/Cards';
import ProductDetail from './product/ProductDetail';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './Components/Header';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
            <Routes>
                <Route path="/" element={<Cards />} />
                <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
        
        </BrowserRouter>

      </div>
  );
}

export default App;
