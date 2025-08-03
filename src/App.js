import React, { useRef } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 8;
  const loadingBarRef = useRef(null);

  return (
    <Router>
      <LoadingBar color="#0d6efd" ref={loadingBarRef} height={3} />
      <NavBar />
      <Routes>
        <Route path="/" element={<News key="home" pageSize={pageSize} category="general" loadingBarRef={loadingBarRef} />} />
        <Route path="/general" element={<News key="general" pageSize={pageSize} category="general" loadingBarRef={loadingBarRef} />} />
        <Route path="/business" element={<News key="business" pageSize={pageSize} category="business" loadingBarRef={loadingBarRef} />} />
        <Route path="/entertainment" element={<News key="entertainment" pageSize={pageSize} category="entertainment" loadingBarRef={loadingBarRef} />} />
        <Route path="/health" element={<News key="health" pageSize={pageSize} category="health" loadingBarRef={loadingBarRef} />} />
        <Route path="/science" element={<News key="science" pageSize={pageSize} category="science" loadingBarRef={loadingBarRef} />} />
        <Route path="/sports" element={<News key="sports" pageSize={pageSize} category="sports" loadingBarRef={loadingBarRef} />} />
        <Route path="/technology" element={<News key="technology" pageSize={pageSize} category="technology" loadingBarRef={loadingBarRef} />} />
      </Routes>
    </Router>
  );
};

export default App;
