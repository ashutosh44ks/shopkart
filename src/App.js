import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import NewProducts from './components/NewProducts';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <NewProducts />
      <Footer />
    </div>
  );
}

export default App;
