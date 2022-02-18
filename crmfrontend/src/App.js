import "./App.css";
import DefaultLayout from "./layout/DefaultLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Entrypage from "./pages/entry/Entrypage";
import AddTicket from "./pages/new-ticket/AddTicket";
import TicketList from "./pages/ticket-listing/TicketList";
import Ticket from "./pages/ticket/Ticket";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/private-route/PrivateRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Entrypage />} exact />
          <Route element={<PrivateRoute />}>
            <Route element={<DefaultLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add-ticket" element={<AddTicket />} />
            <Route path="/tickets" element={<TicketList />} />
            <Route path="/ticket/:id" element={<Ticket />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
