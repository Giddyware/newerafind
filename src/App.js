import './App.css';
import Header from './Header/Header';
import HomePage from './HomePage/HomePage';
import SideDrawer from './SideDrawer/SideDrawer';

function App() {
  return (
    <div className="app">
      <Header />
      <HomePage />
      {/* <SideDrawer/> */}
    </div>
  );
}

export default App;
