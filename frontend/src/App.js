import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from "./components/Quiz";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App min-h-screen bg-gray-50">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;