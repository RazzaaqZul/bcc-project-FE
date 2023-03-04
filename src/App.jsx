import React from 'react';
import './index.css';
import './style'
import styles from './style';

import { Navbar, Hero, Footer, Button, Information1, Information2} from './components';

function App() {
  return (
   <main>
    <div >
      <Navbar/>
    </div>
    <div>
      <Hero/>
    </div>
    <div>
      <Information1/>
    </div>
    <div>
      <Information2/>
    </div>
    <div>
      <Footer/>
    </div>
   </main>
  );
}

export default App;
