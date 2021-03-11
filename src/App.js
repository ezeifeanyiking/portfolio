import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Section from './components/Section';
// import "./images/my_image.jpeg"

function App() {
  return (
    <div className="App bg-grey-200 font-sans flex flex-col items-center">
      <Header />
      <h1 className = "text-red-500">Learn React in 1 Day</h1>
      <Section />
      <Footer />
    </div>
  );
}

export default App;
