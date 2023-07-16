import logo from "./logo.svg";
import './App.css';
import { SignIn } from './Pages/SignIn.js';
import { SignUp } from './Pages/SignUp.js';
import { Navbar } from './Components/Navbar.js';
import { Dashboard } from "./Pages/Dashboard.js";
import { Chatbot } from "./Pages/Chatbot.js"

import { Routes, Route } from "react-router-dom"
import { PrivateRoute } from "./Components/PrivateRoute";


function App() {
  return(
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={ 
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>  
          } 
        />
        <Route path="/signin" element={ <SignIn /> } />
        <Route path="/signup" element={ <SignUp />} />
        <Route
          path="/chatbot/:chatbotId"
          element={
            <PrivateRoute>
              <Chatbot />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  )
}

export default App;
