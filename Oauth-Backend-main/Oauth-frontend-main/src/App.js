
import { Route, Routes } from 'react-router-dom';
import Login from './login/Login';
import Signup from './signup/Signup';
import Dashboard from './dashboard/Dashboard';

function App() {
  return (
    <Routes>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/register' element = {<Signup/>}/>
        <Route path='/dashboard' element = {<Dashboard/>}/>
    </Routes>
  );
}

export default App;
