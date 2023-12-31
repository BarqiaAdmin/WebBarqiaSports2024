import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home.tsx';
import WhatWeDo from './pages/WhatWeDo.tsx';
import AboutUs from './pages/AboutUs.tsx';
import CaseStudies from './pages/CaseStudies.tsx';
import Contact from './pages/Contact.tsx';
//import RaceWithUs from './pages/RaceWithUs.tsx';
//import Events from './pages/Events.tsx';
//import DecemberHackJam from './pages/Events/DecemberHackJam.tsx';
//import World from './pages/World.tsx';
//import BarqiaSportsWorld from './pages/BarqiaSportsWorld.tsx';

function App() {
  return (
    <div className="App" style={{background: 'black'}}>
      <Routes>
          <Route path='/' index element={<Home />} />
          <Route path='WhatWeDo' element={<WhatWeDo />} />
          <Route path='AboutUs' element={<AboutUs />} />
          <Route path='CaseStudies' element={<CaseStudies />} />
          <Route path='Contact' element={<Contact />} />
          {/**
          <Route path='RaceWithUs' element={<RaceWithUs />} />
          <Route path='Events' element={<Events />} />
          <Route path='Events/DecemberHackJam' element={<DecemberHackJam />} />
          <Route path='World' element={<World />} />
          <Route path='BarqiaSportsWorld' element={<BarqiaSportsWorld />} />
           */}
      </Routes>
    </div>
  );
}

export default App;