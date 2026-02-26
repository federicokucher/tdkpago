import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "./components/layout/Layout"
import Home from "./pages/Home"
import Technology from "./pages/Technology"
import Blog from "./pages/Blog"
import About from "./pages/About"
import Contact from "./pages/Contact"
import GetStarted from "./pages/GetStarted"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-started" element={<GetStarted />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
