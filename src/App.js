import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import ManageServices from './ManageServices/ManageServices';
import About from './Pages/About/About';
import AddService from './Pages/AddService/AddService';
import Checkout from './Pages/Checkout/Checkout/Checkout';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Order from './Pages/Order/Order';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';
// import TrackApplicationRenders from './Pages/TrackApplicationRenders/TrackApplicationRenders';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/service/:serviceId' element={<ServiceDetail />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/checkout/:serviceId' element={<RequireAuth><Checkout /></RequireAuth>} />
        <Route path='/addservice' element={<RequireAuth><AddService /></RequireAuth>} />
        <Route path='/manage' element={<RequireAuth><ManageServices /></RequireAuth>} />
        <Route path='/orders' element={<RequireAuth><Order /></RequireAuth>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer></ToastContainer>
      {/* <TrackApplicationRenders /> */}
    </div>
  );
}

export default App;
