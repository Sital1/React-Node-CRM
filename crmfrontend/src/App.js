import './App.css';
import DefaultLayout from './layout/DefaultLayout';
import Dashboard from './pages/dashboard/Dashboard';
import Entrypage from './pages/entry/Entrypage';
import AddTicket from './pages/new-ticket/AddTicket';



function App() {
  return (
    <div className="App">
      
      <DefaultLayout>
        {/* <Dashboard /> */}
        <AddTicket />
      </DefaultLayout>

    </div>
  );
}

export default App;
