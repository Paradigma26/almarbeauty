import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Productos from './components/Productos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="inicio"><Hero /></section>
      <section id="productos"><Productos /></section>
      <section id="contacto"><Contacto /></section>
      <Footer />
    </div>
  );
}

export default App;
