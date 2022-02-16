import './App.css';
import DefaultLayout from './layout/DefaultLayout';
import Dashboard from './pages/dashboard/Dashboard';
import Entrypage from './pages/entry/Entrypage';
import AddTicket from './pages/new-ticket/AddTicket';
import TicketList from './pages/ticket-listing/TicketList';
import Ticket from './pages/ticket/Ticket';



function App() {
  return (
    <div className="App">
      
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* 
         */}
         {/* <Entrypage /> */}
         {/* <TicketList /> */}
        
        <Ticket />

      </DefaultLayout>

    </div>
  );
}

export default App;
