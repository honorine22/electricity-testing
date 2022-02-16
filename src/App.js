import './App.css';
import Layout from './components/Layout'
import Form from './components/Form'
import electricit from './images/electricit.jpg';
function App() {
  return (
    <Layout>
      <img src={electricit} width="100" alt="Logo" />
      <Form />
    </Layout>
  );
}

export default App;
