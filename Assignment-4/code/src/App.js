import React from "react";
import Home from "./LandPage/Home";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Postview from "./Postview";

function App(){
    return(
        <div className="wrapper">
            <Router>
                <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Postview" element={<Postview/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App;