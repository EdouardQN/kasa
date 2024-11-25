import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';

import Home from './pages/Home'
import About from './pages/About'
import Logement from './pages/Logement'
import Erreur404 from './pages/Erreur404'
import Root from './layout/Root'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="logement/:id" element={<Logement />} />
          <Route path="*" element={<Erreur404 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
