import './App.css';
import Header from './components/header';
import TotalDetails from './pages/totalDetails';
import Order from './pages/order';
import { BrowserRouter, Outlet, Route, Router, Routes } from 'react-router-dom';
import Navi from './components/nav';
import Auth from './pages/auth';
import AddItem from './pages/addItem';
import Layout from './components/layout';
import Home from './pages/home';
import PrivateRoutes from './components/privateRoutes';
import Footer from './components/footer';

function App() {

  return (

    <div className='App'>
    

      <Routes >
        <Route  path="/login" element={<Auth />} />

        <Route  element={<PrivateRoutes />}>

          <Route  path='/add-item' element={<AddItem />} />
          <Route  path='/order' element={<Order />} />
          <Route  path='/' element={<TotalDetails />} />
        </Route>
      </Routes>
      {/* 



       <Routes >
          <Route path='/' element={<Layout />}>
            

          </Route>
          <Route index element={<Auth />} />
          <Route path='/add-item' element={<AddItem />} />
          <Route path='/order' element={<Order />} />
          <Route path='/total-details' element={<TotalDetails />} />

        </Routes>
    
    */}
    <Footer/>
    </div>

  );

  // return (
  //   <div className="App">
  //   <Header/>
  //   <Navi/>
  //  <Outlet/>
  //   </div>
  // );
}

export default App;
