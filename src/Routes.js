import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/index";
import { Biography } from "./pages/biography";
import { Memories } from "./pages/memories";
import { Service } from "./pages/service";

export const RoutesComponent = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/biography" element={<Biography />} />
                <Route path="/service" element={<Service />} />
                <Route path="/memories" element={<Memories />} />
            </Routes>
        </Router>
    );
}