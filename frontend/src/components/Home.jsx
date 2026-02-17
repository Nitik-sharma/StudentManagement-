import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 to-blue-100 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md shadow-md rounded-xl m-4 px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">EduPredict</h1>

        <div className="flex gap-6 items-center">
          <button className="text-blue-600 font-medium hover:underline">
            <Link to={"/login"}> Login</Link>
          </button>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            <Link to={"/register"}> Register</Link>
          </button>
        </div>
      </nav>

      {/* Hero section */}

      <section className="flex flex-col items-center text-center mt-16 px-4">
        <div className="bg-white/60 backdrop-blur-md shadow-lg rounded-xl p-10 max-w-3xl">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Student Management System with{" "}
            <span className="text-blue-600">Placement Prediction</span>
          </h2>

          <p className="text-gray-600 mb-6">
            The all‑in‑one platform to track academic progress and forecast your
            career success using Machine Learning.
          </p>

          <button className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-16 px-8">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">
          Features Section
        </h3>

        <div className="grid md:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="font-semibold text-lg mb-2">Attendance</h4>
            <p className="text-gray-600 text-sm">
              Track daily presence and view percentage.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="font-semibold text-lg mb-2">Assignments</h4>
            <p className="text-gray-600 text-sm">
              Submit tasks and track deadlines easily.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="font-semibold text-lg mb-2">Mock Tests</h4>
            <p className="text-gray-600 text-sm">
              Visualize score analysis and progress tracking.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="font-semibold text-lg mb-2 text-blue-600">
              AI‑Powered Prediction
            </h4>
            <p className="text-gray-600 text-sm">
              Predict placement probability using ML.
            </p>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className=" bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8 rounded-xl  m-10">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">EduPredict</h2>
            <p className="text-sm text-gray-200">Your future, predicted.</p>
          </div>

          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="text-sm text-gray-200">
              <li>Dashboard</li>
              <li>Support</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
