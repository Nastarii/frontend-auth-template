import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/NavBar';

import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';
import Protected from './pages/Protected';
import ActivationCode from './pages/ActivationCode';
import RecoverPassword from './pages/RecoverPassword';

function App() {
  return (
    <Router>
      <div className="text-center">
        <Navbar />
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/recoverPassword" element={<RecoverPassword />} />
          <Route path="/activationCode" element={<ActivationCode />} />
          <Route path="/protected" element={<Protected />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
