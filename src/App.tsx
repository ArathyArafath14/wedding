import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePlanner } from './pages/HomePlanner'
import { HomeInvitation } from './pages/HomeInvitation'
import { About } from './pages/About'
import { Services } from './pages/Services'
import { Portfolio } from './pages/Portfolio'
import { Blog } from './pages/Blog'
import { Contact } from './pages/Contact'
import { Rsvp } from './pages/Rsvp'
import { Shop } from './pages/Shop'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePlanner />} />
        <Route path="/invitation" element={<HomeInvitation />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rsvp" element={<Rsvp />} />
      </Route>
    </Routes>
  )
}
