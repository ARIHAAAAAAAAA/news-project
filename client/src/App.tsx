// import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "../src/features/global/components/News"
import Home from "../src/features/global/pages/Home"
import Source from "../src/features/global/components/Source";
import LocationComponent from "../src/features/global/components/Location";
import Register from "../src/features/global/pages/Register";

function App() {

  return (
    <>
        <BrowserRouter>
      <>
        <Routes>
          <Route path="/news" element={<News />} />
          <Route path="/home" element={<Home />} />
          <Route path="/source" element={<Source />} />
          <Route path="/location" element={<LocationComponent />} />
          <Route path="/Register" element={<Register />} />
          <Route path={'*'} element={<h1>404 Not Found</h1>} />
        </Routes>
        {/* <Kidnapped/> */}
       </>
    </BrowserRouter>
    </>
  )

}
export default App;