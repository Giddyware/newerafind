import { useContext, useEffect, useState } from 'react';
import './App.scss';
import Backdrop from './Backdrop/Backdrop';
import CartContext from './context/cart/CartContext';
import Header from './Header/Header';
import HomePage from './HomePage/HomePage';
import SideDrawer from './SideDrawer/SideDrawer';

function App() {
  const [isToggle, setToggle] = useState(false);

  const handleCartToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div className="app" style={{ height: '100%' }}>
      <Header onClick={handleCartToggle} />
      <div onClick={handleCartToggle}>
        <SideDrawer isToggle={isToggle} />
        {isToggle && <Backdrop />}
      </div>
      <HomePage />
    </div>
  );
}

export default App;
