import react from 'react'
import { Route, Router, Switch } from 'react-router';
import Navbar from './components/Navbar';
import UserCard from './components/UserCard';
import UserSign from './components/UserSign';
import UserTable from './components/userTable';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Switch>
     <Route exact path='/' component={UserSign}/>
     <Route exact path='/usercard' component={UserCard}/>
     <Route exact path='/usertable' component={UserTable}/>
     </Switch>
  
    </div>
  );
}
export default App;