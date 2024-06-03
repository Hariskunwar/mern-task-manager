
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Register from './Components/Register';
import Header from './Components/Header';

function App(){
  return (
    <Router>
      <div>
        <Header />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;