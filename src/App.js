import './App.scss';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/navbar/Navbar';
import Hero from './Components/hero/Hero';
import Dashboard from './Components/dashboard/Dashboard';
import Clients from './Components/clients/Clients';
import Bank from './Components/Bank/Bank';
import Sales from './Components/sales/Sales';
import Cheques from './Components/cheques/Cheques';
import Email from './Components/email/Email';
import Internal from './Components/internal/Internal';
import Activity from './Components/activity/Activity';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <div className="main-container">
          <Hero />
          <Routes>
          <Route path="/" element={<Dashboard />} /> 
          <Route path="/clients" element={<Clients />} /> 
          <Route path="/bank" element={<Bank />} /> 
          <Route path="/sales" element={<Sales />} /> 
          <Route path="/cheques" element={<Cheques />} /> 
          <Route path="/email" element={<Email />} /> 
          <Route path="/internal" element={<Internal />} /> 
          <Route path="/activity" element={<Activity />} /> 

          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;
