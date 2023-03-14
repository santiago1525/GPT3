import './App.css';
import { Navbar, Cta, Brand } from './components';
import { Blog, Header, Footer, Features, Possibility, WhatGPT3 } from './containers';



function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />

    </div>
  );
}

export default App;
