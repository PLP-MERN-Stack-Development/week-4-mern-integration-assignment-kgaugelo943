import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import PostFormPage from './pages/PostFormPage';
import Layout from './components/Layout';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

function App() {
  return (
      <BrowserRouter>
          <Layout>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/posts/:id" element={<PostDetail />} />
                  <Route path="/create" element={<PostFormPage />} />
              </Routes>
          </Layout>
      </BrowserRouter>
  );
}

export default App

import RequireAuth from './components/RequireAuth';

// Inside <Routes>
<Route path="/create" element={
    <RequireAuth>
        <PostFormPage />
    </RequireAuth>
} />