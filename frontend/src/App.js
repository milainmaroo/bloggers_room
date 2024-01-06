import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import BlogForm from './pages/BlogForm'
import { BlogsContextProvider } from './context/BlogContext'

function App() {
  return (
    <div className='App'>
      <BlogsContextProvider>
        <Router>
          <Navbar />
          <div className='pages'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/blog' element={<BlogForm />} />
            </Routes>
          </div>
        </Router>
      </BlogsContextProvider>
    </div>
  )
}

export default App
