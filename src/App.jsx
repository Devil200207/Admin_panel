import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home,Login,New,Single,List} from './pages/index';


const App = () => {
  return (
  <div className="app">
    <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route index element={<Home/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="users">
                    <Route index element={<List/>}/>
                    <Route path="new" element={<New/>}/>
                    <Route path=":userId" element={<Single/>}/>
                </Route>
                <Route path="products">
                    <Route index element={<List/>}/>
                    <Route path="new" element={<New/>}/>
                    <Route path=":productId" element={<Single/>}/>
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;