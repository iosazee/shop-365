import './App.css';
import ContactUs from './components/ContactUs';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <section className="App">
      <Routes>
          <Route path='/contact' element={ <ContactUs /> } />
      </Routes>

    </section>
  );
}

export default App;
