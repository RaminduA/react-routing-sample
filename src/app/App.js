import React from "react";
import {Routes,Route} from "react-router-dom"
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import NotFoundPage from "../pages/NotFound";

function App() {
  return (
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/404' element={<NotFoundPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
  );
}

export default App;
