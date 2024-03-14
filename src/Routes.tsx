import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Chat from "./components/chat";
import Home from "./components/home";

export default function Links() {
        return (
            <Routes>
                  <Route path="/" element={<Home />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        );
    }
