import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing'
import Login from './pages/login'
import Register from './pages/register';
import './styles.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/' exact element = {<Landing/>}/>
        <Route path = '/login' exact element = {<Login/>}/>
        <Route path = '/register' exact element = {<Register/>}/>
      </Routes>
    </Router>
  );
}

export default App;
