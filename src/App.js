import './CSS/App.css';

import { EnergyQuery } from './Page/EnergyQuery';
import { Home } from './Page/Home';
import { Query } from './Page/ElementQuery';
import  {ProcessStatus}  from './Page/ProcessStatus';
import { TestPage } from './Page/TestPage';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { GenInfo } from './Page/UUID_Slide';
import { ProcessTable } from './Page/ProcessTable';
function App() {


  return (

      <Router>
      <div className='neum'>
          <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route path='/query/element/*' element={<Query/>} />
              <Route path='/query/energy/*' element={<EnergyQuery/>} />
              <Route path='/query/get_process/*' element={<ProcessStatus/>} />
              <Route path='/test' element={<TestPage/>} />
              <Route path='/query/UUID/detail/*' element={<GenInfo/>} />
              <Route path='/query/get_process/table/*' element={<ProcessTable/>}/>
          </Routes>
      </div>
    </Router>
    
  );
}




export default App;

// <ShowDataTR>{JSON.parse(structures)}</ShowDataTR>