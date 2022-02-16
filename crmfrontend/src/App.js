import './App.css';
import DefaultLayout from './layout/DefaultLayout';
import Dashboard from './pages/dashboard/Dashboard';
import Entrypage from './pages/entry/Entrypage';



function App() {
  return (
    <div className="App">
      
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>

    </div>
  );
}

export default App;
