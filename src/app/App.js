import React from "react";
import {Routes,Route} from "react-router-dom";
import NotFoundPage from "../pages/NotFound";
import DashboardPage from "../pages/Dashboard";
import CustomerPage from "../pages/Customer";
import ItemPage from "../pages/Item";

function App() {
  return (
      <Routes>
          <Route exact path='/' element={<DashboardPage/>}/>
          <Route path='/dashboard' element={<DashboardPage/>}/>
          <Route path='/customer' element={<CustomerPage/>}/>
          <Route path='/item' element={<ItemPage/>}/>
          <Route path='/404' element={<NotFoundPage/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
  );
}

export default App;
