
import Header from './components/Header/Header';
import "./assets/js/script";
import Services from './components/Services/Services';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import FAQ from './components/FAQ/FAQ';
import UserGuide from './components/Userguide/userguide';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <About />
      <Blog/>
      <FAQ/>
      <UserGuide/>
      <Contact />
      <Footer />
  
    </div>
  );
}

export default App;
