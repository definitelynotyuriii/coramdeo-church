import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Ministries from './pages/Ministries'
import KidMinistry from './pages/KidMinistry'
import MusicMinistry from './pages/MusicMinistry'
import YouthMinistry from './pages/YouthMinistry'
import Give from './pages/Give'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ministries" element={<Ministries />} />
        <Route path="/ministries/kids" element={<KidMinistry />} />
        <Route path="/ministries/music" element={<MusicMinistry />} />
        <Route path="/ministries/youth" element={<YouthMinistry />} />
        <Route path="/give" element={<Give />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App