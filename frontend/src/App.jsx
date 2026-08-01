import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import CreateTicket from "./pages/CreateTicket";
import TicketDetails from "./pages/TicketDetails";

function App() {
  return (
    <BrowserRouter>
<div className="w-full min-h-screen">        
      

        <Navbar />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create-ticket" element={<CreateTicket />} />
          <Route path="/ticket/:ticketId" element={<TicketDetails />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;