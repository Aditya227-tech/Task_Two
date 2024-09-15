import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import confetti from "canvas-confetti";
import "./styles.css";

const CongratulationsPage = () => {
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-100 overflow-hidden p-4">
      <div className="flex flex-col items-center justify-center min-h-screen space-y-8 text-center">
        <h1
          className="text-6xl font-bold mb-4"
          style={{
            fontFamily: "'Dancing Script', cursive",
            color: "#ffffff", // White color
          }}
        >
          Congratulations!
        </h1>
        <p className="text-xl text-orange-500 mb-4">Your test is over.</p>
        <img
          src="https://tse3.mm.bing.net/th?id=OIP.AcYOC-m3TVftsJTRNiEIZwHaFt&pid=Api&P=0&h=180"
          alt="image"
          style={{
            width: "196px",
            height: "196px",
            backgroundColor: "#d1d5db",
            borderRadius: "80px",
            marginBottom: "16px",
          }}
        />
      </div>
      <div className="absolute bottom-4 left-0 w-full flex justify-start mt-4">
        <Link
          to="/testreport"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105 mt-8"
        >
          View results -&gt;
        </Link>
      </div>
    </div>
  );
};

const TestReportPage = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <h1 className="text-4xl font-bold">Test Report Page</h1>
  </div>
);

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CongratulationsPage />} />
          <Route path="/testreport" element={<TestReportPage />} />
        </Routes>
      </div>
    </Router>
  );
}
