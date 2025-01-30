import { useState } from 'react';
import './App.css';
import Home from './layouts/Home';
import Contact from './layouts/Contact';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <Home/>
     {/* <Contact/> */}
    </>
  );
}

export default App;
