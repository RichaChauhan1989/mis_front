// import logo from './logo.svg';
// import './App.css';
import TopBar from "./components/TopBar";
import {Route, Routes} from "react-router";
import Home from "./components/Home";
//import ChatRoom from "./components/ChatRoom";
//import NumberSumUp from "./components/NumberSumUp";
import Login from "./components/Login";
import Register from "./components/Register";
import RegistrationForm from "./components/Register";
import Main from "./components/main";

function App() {
  return (
    <div className="App">
        <TopBar/>
      <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/main" element={<Main/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<RegistrationForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
