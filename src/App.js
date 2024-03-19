// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostJob from "./components/postJob.jsx";
import JobList from "./components/jobList.jsx"; 

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostJob />} />
        <Route path="/jobList" element={<JobList />} /> 
      </Routes>
    </Router>
  );
}
