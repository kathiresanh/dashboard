import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Topbar from './Topbar/Topbar';
import Control from './Control/Control';

function App() {
  return (
   <div className='container-fluid'>
     <div className='row'>
       <Sidebar></Sidebar>
       <Control></Control>
     </div>
   </div>
  );
}

export default App;
