import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Chat from "./components/chat";
import Home from "./components/home";
import Login from "./pages/Login";
import { BrowserRouter as Router } from 'react-router-dom';

export default function Links() {
        return (
            // <Routes>
            //     <Route path="/" element={<Login />} />
            //     <Route path="/home" element={<Home />} />
            //     <Route path="/chat" element={<Chat />} />
            //     <Route path="*" element={<NotFound />} />
            // </Routes>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        );
    }
