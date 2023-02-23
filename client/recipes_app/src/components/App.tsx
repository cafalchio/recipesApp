import 'semantic-ui-css/semantic.min.css'
import './App.css'

import { Outlet } from 'react-router-dom';
import Navbar from './navbar/Navbar';


function App() {
  return (
    <div>
      <Navbar />

      <Outlet /> {/* Render child routes */}
    </div>
  );
}
export default App;
