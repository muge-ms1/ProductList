import { useState } from 'react';
import './product/Cards.css';
import Cards from './product/Cards';
import ProductDetail from './product/ProductDetail';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './Components/Header';
function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        document.body.className = isDarkTheme ? '' : 'dark-theme';
    };

  return (
    
    <div className="App">
      <BrowserRouter>
      <Header />
      <button onClick={toggleTheme} className="btn btn-primary mb-3">
                {isDarkTheme ? 'Light' : 'Dark'} Theme
            </button>
            <Routes>
                <Route path="/" element={<Cards />} />
                <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
        
        </BrowserRouter>

      </div>
  );
}

export default App;
