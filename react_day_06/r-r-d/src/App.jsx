import React, { lazy , Suspense } from 'react';
import { Route, Routes , Link, useNavigate} from "react-router-dom"
import A from './pages/Drilling';
// import Admin from './pages/Admin';
// import Dashboard from './pages/Dashboard';

// const Dashboard = React.lazy(()=>import('./pages/Dashboard'))
const Dashboard = lazy(()=>import('./pages/Dashboard'))
const Admin = lazy(()=>import('./pages/Admin'))

function App() {
  
  // let navigate = useNavigate();
  // function handleBtn1(){
  //   navigate('/admin')
  // }
  // function handleBtn2(){
  //   navigate('/dashboard')
  // }


  return (
  <>
    {/* <button onClick={handleBtn1}>Admin</button>
    <button onClick={handleBtn2}>Dashboard</button> */}

    {/* <li> <a href="/admin">Admin</a> </li>
    <li> <a href="/dashboard">Dashboard</a> </li>}

      {/* <Link to='/dashboard'>dashboard</Link> */}
      {/* <Link to='/admin'>admin</Link> */}
      {/* <Routes>
        <Route path='/admin' element={ <Admin /> } />
        <Route path='/admin' element={ <Suspense fallback={"loading1..."}>
          <Admin />
        </Suspense> } />
        <Route path='/dashboard' element={ <Suspense fallback={"loading2..."}>
          <Dashboard />
        </Suspense> } />
      </Routes> */}
      <A />
  </>
  )
}

export default App