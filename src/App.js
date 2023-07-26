import { Route, Routes } from 'react-router-dom';
import './App.css';
import DashBoard from './Components/DashBoard';
import LoginPage from './Components/LoginPage';
import UserPage from './Components/UserPage';
import AddCars from './Components/AddCars';
import EditCars from './Components/EditCars';
import SignupPage from './Components/SignupPage';
import { useState } from 'react';

function App() {
  // Define userData and setUserData state variables
  const [userData, setUserData] = useState([]);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<DashBoard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<UserPage />} />
        {/* Pass userData and setUserData as props */}
        <Route
          path="/add/:token"
          element={<AddCars userData={userData} setUserData={setUserData} />}
        />
        <Route
          path="/edit"
          element={<EditCars userData={userData} setUserData={setUserData} />}
        />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
