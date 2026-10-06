import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './layout/Layout'
import JoinUs from './pages/JoinUs'
import Home from './pages/Home'
import About from './pages/About'
import Ministries from './pages/Ministries'
import KidMinistry from './pages/KidMinistry'
import MusicMinistry from './pages/MusicMinistry'
import YouthMinistry from './pages/YouthMinistry'
import Give from './pages/Give'
import Contact from './pages/Contact'

function HomeTransition() {
  const { key } = useLocation()
  return (
    <div key={key} style={{ animation: 'homeFade 0.6s ease-out' }}>
      <style>{`
        @keyframes homeFade {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <Home />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomeTransition />} />
        <Route path="/about" element={<About />} />
        <Route path="/ministries" element={<Ministries />} />
        <Route path="/ministries/kids" element={<KidMinistry />} />
        <Route path="/ministries/music" element={<MusicMinistry />} />
        <Route path="/ministries/youth" element={<YouthMinistry />} />
        <Route path="/give" element={<Give />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join" element={<JoinUs />} />
      </Route>
    </Routes>
  )
}

export default App