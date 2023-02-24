import 'semantic-ui-css/semantic.min.css'
import './layout/styles.css'

import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <div>
      <Navbar />
      <Outlet /> {/* Render child routes */}
    </div>
  );
}
export default App;
