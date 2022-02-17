import './App.css';
import Navbar from './components/Navbar'
import Form from './components/Form'
import electricit from './images/electricit.jpg';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <img src={electricit} width="100" alt="Logo" />
        <Form />
        <Footer />
      </header>
    </div>
  );
}

export default App;
