import { useState } from 'react';
import './App.scss';
import Backdrop from './Backdrop/Backdrop';

import Header from './Header/Header';
import HomePage from './HomePage/HomePage';
import SideDrawer from './SideDrawer/SideDrawer';

function App() {
  const [isToggle, setToggle] = useState(false);

  const handleCartToggle = () => {
    if (isToggle !== true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    console.log(isToggle);
    setToggle((prev) => !prev);
  };

  return (
    <div className="app" style={{ height: '100%' }}>
      <Header onClick={handleCartToggle} />

      <SideDrawer isToggle={isToggle} onClick={handleCartToggle} />
      <>
        {isToggle && <Backdrop onClick={handleCartToggle} />}
        <HomePage />
      </>
    </div>
  );
}

export default App;
