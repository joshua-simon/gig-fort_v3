import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing'
import './styles.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/' exact element = {<Landing/>}/>
      </Routes>
    </Router>
  );
}

export default App;
