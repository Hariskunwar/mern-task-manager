
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Register from './Components/Register';
import Header from './Components/Header';
import TaskList from './Components/TaskList';

function App(){
  return (
    <Router>
      <div>
        <Header />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/alltasks' element={<TaskList />} />
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;